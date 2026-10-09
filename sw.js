// Service worker: lets the game load and play without internet.
// Files are served from the cache right away and refreshed in the background,
// so after an update the new version shows up on the next visit.
const CACHE = 'math-game-v1';
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
    event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES)));
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

    event.respondWith(caches.open(CACHE).then(async cache => {
        const cached = await cache.match(req, { ignoreSearch: true })
            || (req.mode === 'navigate' ? await cache.match('index.html') : undefined);
        const fresh = fetch(req)
            .then(res => {
                if (res.ok) cache.put(req, res.clone());
                return res;
            })
            .catch(() => cached);
        event.waitUntil(fresh.catch(() => {}));
        return cached || fresh;
    }));
});
