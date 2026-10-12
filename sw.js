// Service worker: lets the game load and play without internet.
// With internet, files always come fresh from the server (so updates show right away);
// the cached copy is only used when the network is down or too slow.
const CACHE = 'math-game-v2';
const NETWORK_TIMEOUT_MS = 4000;
const FILES = [
    './',
    'index.html',
    'styles.css',
    'script.js',
    'manifest.webmanifest',
    'fonts/fredoka-latin.woff2',
    'fonts/fredoka-latin-ext.woff2',
    'icons/icon.svg',
    'icons/icon-192.png',
    'icons/icon-512.png',
    'icons/apple-touch-icon.png',
];

self.addEventListener('install', event => {
    event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES.map(f => new Request(f, { cache: 'reload' })))));
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    const req = event.request;
    if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;

    event.respondWith((async () => {
        const cache = await caches.open(CACHE);
        const fromCache = async () => (await cache.match(req, { ignoreSearch: true }))
            || (req.mode === 'navigate' ? cache.match('index.html') : undefined);

        // 'no-cache' makes the browser check with the server instead of reusing its own copy
        const network = fetch(req, { cache: 'no-cache' }).then(res => {
            if (res.ok) cache.put(req, res.clone());
            return res;
        });
        network.catch(() => {}); // handled below
        const timeout = new Promise(resolve => setTimeout(resolve, NETWORK_TIMEOUT_MS));
        try {
            const res = await Promise.race([network, timeout]);
            if (res) return res;
            return (await fromCache()) || network; // slow network: use the copy, keep waiting otherwise
        } catch (e) {
            return (await fromCache()) || Response.error(); // offline
        }
    })());
});
