'use strict';

// ---------- Translations ----------
// Croatian plural forms: 1 zadatak, 2–4 zadatka, 5+ zadataka (21 zadatak, 22 zadatka, 11–14 zadataka)
function hrPlural(n, one, few, many) {
    const m10 = n % 10, m100 = n % 100;
    if (m10 === 1 && m100 !== 11) return one;
    if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return few;
    return many;
}

const I18N = {
    en: {
        titleA: 'Math', titleB: 'Game',
        play: '▶ Play',
        addPlayer: '+ Player',
        defaultPlayer: 'Player 1',
        greeting: name => `Hi ${name}! Ready to practice?`,
        summaryQuestions: n => `${n} questions`,
        noTimer: 'no timer',
        numbersRange: (min, max) => `numbers ${min}–${max}`,
        answersInRange: 'answers in range',
        statBest: 'Best score', statGames: 'Games', statStars: 'Stars ⭐', statStreak: 'Best streak',
        trophies: 'Trophies',
        tapTrophy: 'Tap a trophy to see how to win it.',
        round: n => `Round ${n}`,
        fixup: 'fix-up',
        seenBefore: 'You saw this one before. You can do it!',
        praise: ['Great!', 'Super!', 'Awesome!', 'You got it!', 'Brilliant!', 'Yes!', 'Fantastic!', 'Well done!'],
        nowYouKnow: 'Now you know it!',
        timesUp: "⏰ Time's up!",
        almost: 'Almost!',
        remember: 'Remember:',
        combo: n => `combo +${n}`,
        speedy: 'speedy!',
        go: 'Go!',
        roundOne: "Just 1 tricky one left. Let's fix it!",
        roundMany: n => `Let's fix the ${n} tricky ones. You can do it!`,
        letsGo: "Let's go!",
        paused: 'Paused ⏸',
        pausedText: 'Take a break. The timer is stopped.',
        resume: '▶ Continue',
        quit: 'Quit game',
        title3: 'Amazing! 🎉', title2: 'Great job! 👏', title1: 'You did it! 💪',
        sub1: 'Every round makes you stronger. Play again to get more stars!',
        subAll: n => `You solved all ${n} questions.`,
        points: () => 'points',
        newBest: '🏅 New best score!',
        firstTry: 'First try',
        rounds: n => (n === 1 ? 'Round' : 'Rounds'),
        bestStreak: 'Best streak',
        superFast: 'Super fast',
        newTrophies: 'New trophies!',
        trickyTitle: 'Tricky ones to remember',
        tries: n => `${n} tries`,
        home: '🏠 Home',
        again: '↻ Play again',
        trophyWon: 'Trophy won!',
        settingsFor: p => `Settings for ${p}`,
        quickStart: 'Quick start',
        timesTables: 'Times tables × ÷',
        questions: 'Questions',
        timePer: 'Time per question',
        noTimerOpt: 'No timer',
        seconds: n => `${n} seconds`,
        numbersFrom: 'Numbers from',
        to: 'to',
        limitAnswers: '🎯 Answers must stay inside the number range',
        limitHint: 'e.g. 0–20: 13 + 7 ✓   13 + 8 ✗',
        operations: 'Operations',
        sounds: '🔊 Sounds',
        review: '🔁 Bring back old mistakes in new games',
        speak: '🗣️ Read questions aloud (like the teacher)',
        voiceLang: 'Voice language',
        save: 'Save',
        errRange: 'Numbers must be between 0 and 999, and "from" must not be bigger than "to".',
        errDiv: 'Division needs numbers bigger than 0.',
        errOps: 'Pick at least one operation.',
        errLimit: op => `With these numbers no ${op} question has an answer inside the range. Make the range bigger or turn off the 🎯 answer limit.`,
        newPlayer: 'New player',
        editPlayer: 'Edit player',
        name: 'Name',
        namePh: 'Your name',
        pickAnimal: 'Pick an animal',
        deletePlayer: 'Delete player',
        errName: 'Please type a name.',
        confirmDelete: n => `Delete ${n} and all their trophies?`,
        tr: {
            first: ['First Steps', 'Finish your first game'],
            perfect: ['Perfect!', 'Get every question right in round 1 (5+ questions)'],
            streak5: ['On Fire', '5 correct answers in a row'],
            streak10: ['Unstoppable', '10 correct answers in a row'],
            lightning: ['Lightning', '5 answers in under 2 seconds in one game'],
            speedy: ['Speed Racer', 'Perfect round 1 with a 3-second timer'],
            persist: ['Never Give Up', 'Finish a game that needed 3 or more rounds'],
            record: ['New Record', 'Beat your own best score'],
            rainbow: ['All-Rounder', 'Play with + − × ÷ all at once'],
            games5: ['Practice Pro', 'Play 5 games'],
            games25: ['Champion', 'Play 25 games'],
            stars30: ['Star Collector', 'Collect 30 stars'],
            correct100: ['Sharp Shooter', '100 correct answers'],
            correct500: ['Math Wizard', '500 correct answers'],
        },
    },
    hr: {
        titleA: 'Mate', titleB: 'matika',
        play: '▶ Igraj',
        addPlayer: '+ Igrač',
        defaultPlayer: 'Igrač 1',
        greeting: name => `Bok, ${name}! Idemo vježbati?`,
        summaryQuestions: n => `${n} ${hrPlural(n, 'zadatak', 'zadatka', 'zadataka')}`,
        noTimer: 'bez vremena',
        numbersRange: (min, max) => `brojevi ${min}–${max}`,
        answersInRange: 'rezultat u rasponu',
        statBest: 'Rekord', statGames: 'Igre', statStars: 'Zvjezdice ⭐', statStreak: 'Najduži niz',
        trophies: 'Trofeji',
        tapTrophy: 'Dodirni trofej i saznaj kako ga osvojiti.',
        round: n => `${n}. runda`,
        fixup: 'popravak',
        seenBefore: 'Ovaj zadatak već znaš. Možeš ti to!',
        praise: ['Bravo!', 'Super!', 'Odlično!', 'Točno!', 'Sjajno!', 'Da!', 'Fantastično!', 'Svaka čast!'],
        nowYouKnow: 'Sad to znaš!',
        timesUp: '⏰ Isteklo je vrijeme!',
        almost: 'Skoro!',
        remember: 'Zapamti:',
        combo: n => `niz +${n}`,
        speedy: 'brzo!',
        go: 'Kreni!',
        roundOne: 'Ostao je još samo jedan težak zadatak. Idemo ga riješiti!',
        roundMany: n => `Idemo popraviti ${n} ${hrPlural(n, 'težak zadatak', 'teška zadatka', 'teških zadataka')}. Možeš ti to!`,
        letsGo: 'Kreni!',
        paused: 'Pauza ⏸',
        pausedText: 'Odmori se malo. Vrijeme je zaustavljeno.',
        resume: '▶ Nastavi',
        quit: 'Prekini igru',
        title3: 'Fantastično! 🎉', title2: 'Bravo! 👏', title1: 'Uspjelo ti je! 💪',
        sub1: 'Vježba čini majstora! Igraj ponovno i osvoji više zvjezdica.',
        subAll: n => `Svih ${n} zadataka je riješeno.`,
        points: n => hrPlural(n, 'bod', 'boda', 'bodova'),
        newBest: '🏅 Novi rekord!',
        firstTry: 'Iz prve',
        rounds: n => hrPlural(n, 'Runda', 'Runde', 'Rundi'),
        bestStreak: 'Najduži niz',
        superFast: 'Super brzo',
        newTrophies: 'Novi trofeji!',
        trickyTitle: 'Zapamti ove zadatke',
        tries: n => `${n} ${hrPlural(n, 'pokušaj', 'pokušaja', 'pokušaja')}`,
        home: '🏠 Početna',
        again: '↻ Igraj ponovno',
        trophyWon: 'Novi trofej!',
        settingsFor: p => `Postavke: ${p}`,
        quickStart: 'Brzi odabir',
        timesTables: 'Tablica množenja × ÷',
        questions: 'Broj zadataka',
        timePer: 'Vrijeme po zadatku',
        noTimerOpt: 'Bez vremena',
        seconds: n => `${n} ${hrPlural(n, 'sekunda', 'sekunde', 'sekundi')}`,
        numbersFrom: 'Brojevi od',
        to: 'do',
        limitAnswers: '🎯 Rezultat mora biti unutar raspona brojeva',
        limitHint: 'npr. 0–20: 13 + 7 ✓   13 + 8 ✗',
        operations: 'Računske operacije',
        sounds: '🔊 Zvukovi',
        review: '🔁 Ponavljaj stare greške u novim igrama',
        speak: '🗣️ Čitaj zadatke naglas (kao učiteljica)',
        voiceLang: 'Jezik glasa',
        save: 'Spremi',
        errRange: 'Brojevi moraju biti od 0 do 999, a „od” ne smije biti veći od „do”.',
        errDiv: 'Za dijeljenje su potrebni brojevi veći od 0.',
        errOps: 'Odaberi barem jednu računsku operaciju.',
        errLimit: op => `S ovim brojevima nema zadataka ${op} čiji je rezultat unutar raspona. Povećaj raspon ili isključi 🎯 ograničenje rezultata.`,
        newPlayer: 'Novi igrač',
        editPlayer: 'Uredi igrača',
        name: 'Ime',
        namePh: 'Tvoje ime',
        pickAnimal: 'Odaberi životinju',
        deletePlayer: 'Obriši igrača',
        errName: 'Upiši ime.',
        confirmDelete: n => `Obrisati igrača ${n} i sve trofeje?`,
        tr: {
            first: ['Prvi koraci', 'Završi svoju prvu igru'],
            perfect: ['Savršeno!', 'Sve točno u 1. rundi (5+ zadataka)'],
            streak5: ['U plamenu', '5 točnih odgovora zaredom'],
            streak10: ['Raketa', '10 točnih odgovora zaredom'],
            lightning: ['Munja', '5 odgovora brže od 2 sekunde u jednoj igri'],
            speedy: ['Formula', 'Savršena 1. runda uz vrijeme od 3 sekunde'],
            persist: ['Ne odustajem', 'Završi igru koja je trajala 3 ili više rundi'],
            record: ['Novi rekord', 'Pobijedi svoj najbolji rezultat'],
            rainbow: ['Duga', 'Igraj sa + − × ÷ odjednom'],
            games5: ['Knjiga znanja', 'Odigraj 5 igara'],
            games25: ['Pehar', 'Odigraj 25 igara'],
            stars30: ['Zvjezdano nebo', 'Skupi 30 zvjezdica'],
            correct100: ['Pogodak u metu', '100 točnih odgovora'],
            correct500: ['Čarobnjak', '500 točnih odgovora'],
        },
    },
};

function detectLang() {
    const nav = (navigator.language || 'en').toLowerCase();
    return /^(hr|bs|sr)/.test(nav) ? 'hr' : 'en';
}

let lang = 'en';

// t('key') returns the text; for function entries extra args are passed through
function t(key, ...args) {
    const v = I18N[lang][key] !== undefined ? I18N[lang][key] : I18N.en[key];
    return typeof v === 'function' ? v(...args) : v;
}

// ---------- Constants ----------
const OPS = {
    '+': { sym: '+', say: { en: 'plus', hr: 'plus', de: 'plus' } },
    '-': { sym: '−', say: { en: 'minus', hr: 'minus', de: 'minus' } },
    '*': { sym: '×', say: { en: 'times', hr: 'puta', de: 'mal' } },
    '/': { sym: '÷', say: { en: 'divided by', hr: 'podijeljeno sa', de: 'geteilt durch' } },
};
const VOICE_LANGS = { en: ['en'], hr: ['hr', 'bs', 'sr'], de: ['de'] };

const DEFAULT_SETTINGS = {
    questions: 10,
    seconds: 5,
    min: 0,
    max: 20,
    limitAnswers: false,
    ops: ['+'],
    sound: true,
    review: true,
    speak: false,
    lang: 'en',
};

const SECONDS_OPTIONS = [0, 3, 4, 5, 6, 7, 8, 10, 15, 20];
const AVATARS = ['🦊', '🐼', '🦁', '🐸', '🐵', '🦄', '🐯', '🐨', '🐙', '🐧', '🐶', '🐱'];
const PRAISE_EMOJI = ['🎉', '⭐', '👏', '💪', '✨', '🌟', '😃'];

const FEEDBACK_OK_MS = 800;
const FEEDBACK_BAD_MS = 2200; // longer, so the correct answer can sink in
const MAX_DIGITS = 5;

const TROPHIES = [
    { id: 'first', icon: '🎒', test: c => c.stats.games >= 1 },
    { id: 'perfect', icon: '💯', test: c => c.perfect },
    { id: 'streak5', icon: '🔥', test: c => c.bestStreak >= 5 },
    { id: 'streak10', icon: '🚀', test: c => c.bestStreak >= 10 },
    { id: 'lightning', icon: '⚡', test: c => c.fast >= 5 },
    { id: 'speedy', icon: '🏎️', test: c => c.perfect && c.s.seconds > 0 && c.s.seconds <= 3 },
    { id: 'persist', icon: '💪', test: c => c.rounds >= 3 },
    { id: 'record', icon: '🥇', test: c => c.newBest },
    { id: 'rainbow', icon: '🌈', test: c => c.s.ops.length === 4 },
    { id: 'games5', icon: '📚', test: c => c.stats.games >= 5 },
    { id: 'games25', icon: '🏆', test: c => c.stats.games >= 25 },
    { id: 'stars30', icon: '🌟', test: c => c.stats.stars >= 30 },
    { id: 'correct100', icon: '🎯', test: c => c.stats.correct >= 100 },
    { id: 'correct500', icon: '🧙', test: c => c.stats.correct >= 500 },
];
const trophyName = tr => t('tr')[tr.id][0];
const trophyDesc = tr => t('tr')[tr.id][1];

// ---------- Helpers ----------
const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));
const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const pick = arr => arr[Math.floor(Math.random() * arr.length)];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function escapeHtml(str) {
    return str.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// Restart a CSS animation class on an element
function animate(el, cls) {
    el.classList.remove(cls);
    void el.offsetWidth;
    el.classList.add(cls);
}

// ---------- Storage (per player) ----------
const STORE_KEY = 'mathgame.v2';

function newPlayer(name, avatar) {
    return {
        id: 'p' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
        name,
        avatar,
        settings: { ...DEFAULT_SETTINGS, ops: [...DEFAULT_SETTINGS.ops], lang },
        stats: { games: 0, correct: 0, stars: 0, bestScore: 0, bestStreak: 0 },
        trophies: {},
        missed: {}, // question key -> times missed, used to bring old mistakes back
    };
}

function loadStore() {
    try {
        const data = JSON.parse(localStorage.getItem(STORE_KEY));
        if (data && Array.isArray(data.players) && data.players.length) {
            data.players.forEach(p => {
                p.settings = { ...DEFAULT_SETTINGS, ...p.settings };
                p.stats = { ...newPlayer().stats, ...p.stats };
                p.trophies = p.trophies || {};
                p.missed = p.missed || {};
            });
            return data;
        }
    } catch (e) { /* storage unavailable or corrupt: start fresh */ }
    return null;
}

function saveStore() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) { /* ignore */ }
}

const saved = loadStore();
lang = saved && I18N[saved.lang] ? saved.lang : detectLang();
const store = saved || { players: [newPlayer(t('defaultPlayer'), '🦊')], current: null };
store.lang = lang;
if (!store.players.some(p => p.id === store.current)) store.current = store.players[0].id;

const player = () => store.players.find(p => p.id === store.current);

// ---------- Sound (generated, no files needed) ----------
let audioCtx = null;

function audio() {
    if (!player().settings.sound) return null;
    if (!audioCtx) {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return null;
        audioCtx = new AC();
    }
    if (audioCtx.state === 'suspended') audioCtx.resume();
    return audioCtx;
}

function tone(freq, dur, { type = 'sine', vol = 0.18, delay = 0, slideTo = null } = {}) {
    const ctx = audio();
    if (!ctx) return;
    const t0 = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);
    if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, t0 + dur);
    gain.gain.setValueAtTime(0.0001, t0);
    gain.gain.exponentialRampToValueAtTime(vol, t0 + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(gain).connect(ctx.destination);
    osc.start(t0);
    osc.stop(t0 + dur + 0.05);
}

const sfx = {
    tap: () => tone(700, 0.04, { vol: 0.05 }),
    correct: streak => {
        const base = 523 * Math.pow(2, Math.min(streak, 10) / 12); // rises with the streak
        tone(base, 0.12);
        tone(base * 1.5, 0.2, { delay: 0.09 });
    },
    wrong: () => tone(260, 0.35, { type: 'triangle', vol: 0.2, slideTo: 140 }),
    tick: () => tone(1000, 0.05, { type: 'square', vol: 0.04 }),
    count: () => tone(440, 0.12, { vol: 0.12 }),
    go: () => tone(880, 0.25, { vol: 0.15 }),
    fanfare: () => [523, 659, 784, 1047, 784, 1047].forEach((f, i) => tone(f, 0.22, { delay: i * 0.12, type: 'triangle' })),
    trophy: () => [784, 988, 1175, 1568].forEach((f, i) => tone(f, 0.18, { delay: i * 0.08 })),
};

// ---------- Speech (read the question aloud, like the teacher) ----------
const canSpeak = 'speechSynthesis' in window;

function pickVoice(voiceLang) {
    const voices = speechSynthesis.getVoices();
    for (const prefix of VOICE_LANGS[voiceLang] || ['en']) {
        const v = voices.find(v => v.lang.toLowerCase().replace('_', '-').startsWith(prefix));
        if (v) return v;
    }
    return null;
}

function speak(text, voiceLang) {
    return new Promise(resolve => {
        if (!canSpeak) return resolve();
        let done = false;
        const finish = () => { if (!done) { done = true; resolve(); } };
        const u = new SpeechSynthesisUtterance(text);
        const voice = pickVoice(voiceLang);
        if (voice) u.voice = voice;
        u.lang = voice ? voice.lang : voiceLang;
        u.rate = 0.95;
        u.onend = finish;
        u.onerror = finish;
        setTimeout(finish, 4000); // never let speech block the game
        speechSynthesis.cancel();
        speechSynthesis.speak(u);
    });
}

// iOS only allows speech that starts from a tap, so "unlock" it on Play
function unlockSpeech() {
    if (canSpeak && player().settings.speak) {
        const u = new SpeechSynthesisUtterance(' ');
        u.volume = 0;
        speechSynthesis.speak(u);
    }
}

// ---------- Questions ----------
function makeQuestion(op, a, b) {
    const answer = op === '+' ? a + b : op === '-' ? a - b : op === '*' ? a * b : a / b;
    return { op, a, b, answer, key: `${op},${a},${b}` };
}

function parseKey(key) {
    const [op, a, b] = key.split(',');
    const na = Number(a), nb = Number(b);
    if (!OPS[op] || !Number.isInteger(na) || !Number.isInteger(nb) || (op === '/' && nb === 0)) return null;
    return makeQuestion(op, na, nb);
}

function fitsSettings(q, s) {
    if (!s.ops.includes(q.op)) return false;
    const inRange = n => n >= s.min && n <= s.max;
    const ok = q.op === '/' ? inRange(q.b) && inRange(q.answer) : inRange(q.a) && inRange(q.b);
    if (!ok) return false;
    // with the answer limit, the result (and the dividend) must be in range too
    return !s.limitAnswers || (inRange(q.answer) && inRange(q.a));
}

// Can this operation produce at least one question whose answer stays in range?
function limitPossible(op, { min, max }) {
    if (op === '+' || op === '-') return 2 * min <= max;
    if (op === '*') return min === 0 || min * min <= max;
    return Math.max(1, min) * min <= max;
}

// Question with operands AND answer inside [min, max]; null if this try didn't work out
function limitedQuestion(op, { min, max }) {
    if (op === '+') {
        // pick the sum first, then split it, so we don't get lots of "+ 0"
        const sum = rand(2 * min, max);
        const a = rand(min, sum - min);
        return makeQuestion('+', a, sum - a);
    }
    if (op === '-') {
        const a = rand(2 * min, max);
        return makeQuestion('-', a, rand(min, a - min));
    }
    if (op === '*') {
        const a = rand(min, max);
        const top = a === 0 ? max : Math.floor(max / a);
        return top < min ? null : makeQuestion('*', a, rand(min, top));
    }
    const divisor = rand(Math.max(1, min), Math.max(1, max));
    const top = Math.floor(max / divisor);
    return top < min ? null : makeQuestion('/', divisor * rand(min, top), divisor);
}

function randomQuestion(s) {
    const op = pick(s.ops);
    if (s.limitAnswers && limitPossible(op, s)) {
        for (let i = 0; i < 100; i++) {
            const q = limitedQuestion(op, s);
            if (q) return q;
        }
    }
    if (op === '/') {
        // Division is the reverse of a multiplication fact: (b × q) ÷ b = q
        const divisor = rand(Math.max(1, s.min), Math.max(1, s.max));
        const quotient = rand(s.min, s.max);
        return makeQuestion('/', divisor * quotient, divisor);
    }
    let a = rand(s.min, s.max);
    let b = rand(s.min, s.max);
    if (op === '-' && a < b) [a, b] = [b, a]; // never negative
    return makeQuestion(op, a, b);
}

function buildQuestions(s, p) {
    const list = [];
    const keys = new Set();

    // Mix in up to 30% of facts this player got wrong in earlier games
    if (s.review) {
        const old = shuffle(Object.keys(p.missed).map(parseKey).filter(q => q && fitsSettings(q, s)));
        old.slice(0, Math.floor(s.questions * 0.3)).forEach(q => { list.push(q); keys.add(q.key); });
    }

    let attempts = 0;
    while (list.length < s.questions) {
        const q = randomQuestion(s);
        if (keys.has(q.key) && ++attempts < 500) continue; // allow repeats only for tiny ranges
        keys.add(q.key);
        list.push(q);
    }
    return shuffle(list);
}

const questionText = q => `${q.a} ${OPS[q.op].sym} ${q.b}`;
const spokenText = (q, voiceLang) => `${q.a} ${OPS[q.op].say[voiceLang] || OPS[q.op].say.en} ${q.b}`;

// ---------- Elements ----------
const el = {
    screens: { home: $('#screen-home'), game: $('#screen-game'), results: $('#screen-results') },
    players: $('#players'),
    greeting: $('#greeting'),
    summary: $('#settings-summary'),
    homeStats: $('#home-stats'),
    trophyGrid: $('#trophy-grid'),
    trophyCount: $('#trophy-count'),
    trophyDesc: $('#trophy-desc'),
    roundChip: $('#round-chip'),
    streakChip: $('#streak-chip'),
    streakVal: $('#streak-val'),
    scoreVal: $('#score-val'),
    progress: $('#progress'),
    timer: $('#timer'),
    timerFill: $('#timer-fill'),
    mascot: $('#game-mascot'),
    card: $('#question-card'),
    qText: $('#q-text'),
    slot: $('#answer-slot'),
    feedback: $('#feedback'),
    floatLayer: $('#float-layer'),
    keypad: $('#keypad'),
    countdown: $('#countdown'),
    countNum: $('#count-num'),
    roundOverlay: $('#round-overlay'),
    pauseOverlay: $('#pause-overlay'),
    settingsModal: $('#settings-modal'),
    playerModal: $('#player-modal'),
    toasts: $('#toasts'),
    confetti: $('#confetti'),
    langSelect: $('#lang-select'),
};

let currentScreen = 'home';

function showScreen(name) {
    Object.entries(el.screens).forEach(([key, screen]) => screen.classList.toggle('active', key === name));
    currentScreen = name;
    window.scrollTo(0, 0);
    if (document.activeElement) document.activeElement.blur();
}

// ---------- Language ----------
function applyLanguage() {
    document.documentElement.lang = lang;
    el.langSelect.value = lang;
    $$('[data-i18n]').forEach(node => { node.textContent = t(node.dataset.i18n); });
    $('#player-name').placeholder = t('namePh');
    $('#set-seconds').innerHTML = SECONDS_OPTIONS
        .map(n => `<option value="${n}">${n ? t('seconds', n) : t('noTimerOpt')}</option>`).join('');
    el.trophyDesc.textContent = t('tapTrophy');
    renderHome();
}

el.langSelect.onchange = () => {
    const old = lang;
    lang = el.langSelect.value;
    store.lang = lang;
    // the read-aloud voice follows the language, unless it was set to something else on purpose
    const p = player();
    if (p.settings.lang === old) p.settings.lang = lang;
    store.players.forEach(pl => { if (pl.name === I18N[old].defaultPlayer) pl.name = t('defaultPlayer'); });
    saveStore();
    applyLanguage();
};

// ---------- Home ----------
function renderHome() {
    const p = player();
    const s = p.settings;

    el.players.innerHTML = '';
    store.players.forEach(pl => {
        const b = document.createElement('button');
        b.className = 'player-chip' + (pl.id === p.id ? ' active' : '');
        b.innerHTML = `<span class="av">${pl.avatar}</span>${escapeHtml(pl.name)}`;
        b.onclick = () => {
            if (pl.id === store.current) return openPlayerModal(pl);
            store.current = pl.id;
            saveStore();
            renderHome();
        };
        el.players.appendChild(b);
    });
    const add = document.createElement('button');
    add.className = 'player-chip add';
    add.textContent = t('addPlayer');
    add.onclick = () => openPlayerModal(null);
    el.players.appendChild(add);

    el.greeting.textContent = t('greeting', `${p.avatar} ${p.name}`);

    const ops = s.ops.map(o => OPS[o].sym).join(' ');
    const time = s.seconds ? `⏱ ${s.seconds} s` : `⏱ ${t('noTimer')}`;
    el.summary.textContent = [
        t('summaryQuestions', s.questions),
        time,
        ops,
        t('numbersRange', s.min, s.max) + (s.limitAnswers ? ` 🎯` : ''),
    ].join(' · ') + '  ✏️';

    el.homeStats.innerHTML = [
        [p.stats.bestScore, t('statBest')],
        [p.stats.games, t('statGames')],
        [p.stats.stars, t('statStars')],
        [p.stats.bestStreak, t('statStreak')],
    ].map(([v, l]) => `<div class="stat"><b>${v}</b><small>${l}</small></div>`).join('');

    const won = TROPHIES.filter(tr => p.trophies[tr.id]).length;
    el.trophyCount.textContent = `${won} / ${TROPHIES.length}`;
    el.trophyDesc.textContent = t('tapTrophy');
    el.trophyGrid.innerHTML = '';
    TROPHIES.forEach(tr => {
        const b = document.createElement('button');
        const has = !!p.trophies[tr.id];
        b.className = 'trophy' + (has ? '' : ' locked');
        b.innerHTML = `<span class="ti">${tr.icon}</span>${trophyName(tr)}`;
        b.onclick = () => {
            $$('.trophy-grid .trophy').forEach(x => x.classList.remove('selected'));
            b.classList.add('selected');
            el.trophyDesc.textContent = `${tr.icon} ${trophyName(tr)}: ${trophyDesc(tr)}${has ? ' ✅' : ''}`;
        };
        el.trophyGrid.appendChild(b);
    });
}

// ---------- Game state ----------
let game = null;
let session = 0; // bumps on every new game/quit so stale timeouts do nothing

const timer = { running: false, elapsed: 0, duration: 0, last: 0, raf: 0, lastTick: -1 };

function later(ms, fn) {
    const id = session;
    setTimeout(() => { if (id === session) fn(); }, ms);
}

function startGame() {
    session++;
    audio();
    unlockSpeech();

    const p = player();
    const s = { ...p.settings, ops: [...p.settings.ops] };
    game = {
        s,
        round: 1,
        queue: buildQuestions(s, p),
        index: 0,
        retry: [],
        results: new Map(), // key -> { q, attempts, solved }
        roundMarks: [],
        current: null,
        input: '',
        score: 0,
        streak: 0,
        bestStreak: 0,
        firstTry: 0,
        fast: 0,
        correctCount: 0,
        locked: true,
        paused: false,
        pendingNext: false,
        qStart: 0,
    };
    game.total = game.queue.length;
    game.queue.forEach(q => game.results.set(q.key, { q, attempts: 0, solved: false }));

    el.scoreVal.textContent = '0';
    el.streakChip.hidden = true;
    el.timer.classList.toggle('off', !s.seconds);
    showScreen('game');
    startRound();
}

function startRound() {
    game.index = 0;
    game.roundMarks = game.queue.map(() => '');
    el.qText.textContent = '';
    setSlot('');
    el.feedback.textContent = '';
    el.card.className = 'question-card';
    resetTimerBar();
    renderTopbar();
    renderProgress();
    countdown().then(nextQuestion);
}

function countdown() {
    return new Promise(resolve => {
        const id = session;
        const go = t('go');
        const steps = reducedMotion ? [go] : ['3', '2', '1', go];
        el.countdown.hidden = false;
        let i = 0;
        const step = () => {
            if (id !== session) return;
            if (i >= steps.length) {
                el.countdown.hidden = true;
                return resolve();
            }
            el.countNum.textContent = steps[i];
            animate(el.countNum, 'go');
            steps[i] === go ? sfx.go() : sfx.count();
            i++;
            setTimeout(step, 600);
        };
        step();
    });
}

function renderTopbar() {
    const label = game.round === 1 ? t('round', 1) : `${t('round', game.round)} · ${t('fixup')}`;
    el.roundChip.textContent = `${label} · ${Math.min(game.index + 1, game.queue.length)}/${game.queue.length}`;
    el.scoreVal.textContent = game.score;
    if (game.streak >= 2) {
        el.streakChip.hidden = false;
        el.streakVal.textContent = game.streak;
        animate(el.streakChip, 'anim-bounce');
    } else {
        el.streakChip.hidden = true;
    }
}

function renderProgress() {
    el.progress.innerHTML = game.queue.map((_, i) => {
        const mark = game.roundMarks[i];
        const cls = mark || (i === game.index && !game.locked ? 'current' : '');
        return `<div class="dot ${cls}"></div>`;
    }).join('');
}

function setSlot(html, empty = html === '') {
    el.slot.innerHTML = html;
    el.slot.classList.toggle('empty', empty);
}

function nextQuestion() {
    if (game.paused) { game.pendingNext = true; return; }
    if (game.index >= game.queue.length) return endRound();

    const q = game.current = game.queue[game.index];
    game.input = '';
    game.locked = false;

    el.qText.textContent = `${questionText(q)} =`;
    setSlot('');
    el.slot.classList.add('typing');
    el.card.className = 'question-card';
    animate(el.card, 'anim-pop');
    el.feedback.className = 'feedback';
    el.feedback.innerHTML = game.round > 1 ? `<small>${t('seenBefore')}</small>` : '';
    el.keypad.classList.remove('locked');
    renderTopbar();
    renderProgress();
    resetTimerBar();

    const id = session;
    const begin = () => {
        if (id !== session || game.current !== q || game.locked) return;
        game.qStart = performance.now();
        startTimer();
    };
    if (game.s.speak) speak(spokenText(q, game.s.lang), game.s.lang).then(begin);
    else begin();
}

// ---------- Timer ----------
function resetTimerBar() {
    stopTimer();
    timer.elapsed = 0;
    el.timerFill.style.transform = 'scaleX(1)';
    el.timer.classList.remove('mid', 'low');
}

function startTimer() {
    if (!game.s.seconds) return;
    timer.duration = game.s.seconds * 1000;
    timer.elapsed = 0;
    timer.last = performance.now();
    timer.lastTick = -1;
    timer.running = true;
    timer.raf = requestAnimationFrame(tickTimer);
}

function stopTimer() {
    timer.running = false;
    cancelAnimationFrame(timer.raf);
}

function tickTimer(now) {
    if (!timer.running) return;
    if (!game.paused) timer.elapsed += Math.min(now - timer.last, 250);
    timer.last = now;

    const left = Math.max(0, timer.duration - timer.elapsed);
    const frac = left / timer.duration;
    el.timerFill.style.transform = `scaleX(${frac})`;
    el.timer.classList.toggle('mid', frac <= 0.5 && left > 2000);
    el.timer.classList.toggle('low', left <= 2000);

    // soft tick during the last 2 seconds
    const sec = Math.ceil(left / 1000);
    if (sec <= 2 && sec > 0 && sec !== timer.lastTick && !game.paused) {
        timer.lastTick = sec;
        sfx.tick();
    }

    if (left <= 0) {
        timer.running = false;
        checkAnswer(true);
        return;
    }
    timer.raf = requestAnimationFrame(tickTimer);
}

function answerTime() {
    return game.s.seconds ? timer.elapsed : performance.now() - game.qStart;
}

// ---------- Input ----------
function pressKey(key) {
    if (currentScreen !== 'game' || !game || game.locked || game.paused) return;
    if (key === 'Enter') {
        if (game.input !== '') checkAnswer(false);
        return;
    }
    if (key === 'Backspace') {
        game.input = game.input.slice(0, -1);
    } else if (/^[0-9]$/.test(key)) {
        if (game.input.length >= MAX_DIGITS) return;
        game.input = game.input === '0' ? key : game.input + key;
    } else {
        return;
    }
    sfx.tap();
    setSlot(game.input);
    el.slot.classList.add('typing');
    if (game.input) animate(el.slot, 'anim-bounce');
}

// ---------- Checking answers ----------
function checkAnswer(timedOut) {
    if (game.locked) return;
    game.locked = true;
    stopTimer();
    el.keypad.classList.add('locked');
    el.slot.classList.remove('typing');

    const q = game.current;
    const result = game.results.get(q.key);
    result.attempts++;

    // When time runs out, whatever is already typed still counts
    const given = game.input === '' ? null : Number(game.input);
    const correct = given === q.answer;
    const ms = answerTime();

    if (correct) {
        result.solved = true;
        game.streak++;
        game.correctCount++;
        game.bestStreak = Math.max(game.bestStreak, game.streak);
        if (game.round === 1) game.firstTry++;
        if (ms < 2000) game.fast++;

        const base = game.round === 1 ? 10 : 5;
        const speed = game.s.seconds ? Math.round(5 * Math.max(0, 1 - ms / (game.s.seconds * 1000))) : 0;
        const combo = Math.min(Math.max(game.streak - 1, 0), 5);
        const pts = base + speed + combo;
        game.score += pts;

        game.roundMarks[game.index] = 'ok';
        el.card.classList.add('ok');
        animate(el.card, 'anim-bounce');
        animate(el.mascot, 'anim-hop');
        el.feedback.className = 'feedback ok';
        el.feedback.textContent = `${game.round > 1 ? t('nowYouKnow') : pick(t('praise'))} ${pick(PRAISE_EMOJI)}`;
        floatPoints(pts, combo >= 2 ? t('combo', combo) : speed >= 4 ? t('speedy') : '');
        sfx.correct(game.streak);
        if (game.streak === 5 || game.streak === 10 || game.streak === 20) confetti(60);
    } else {
        game.streak = 0;
        game.retry.push(q);
        game.roundMarks[game.index] = 'bad';
        setSlot((given !== null ? `<s>${given}</s>` : '') + q.answer, false);
        el.card.classList.add('bad');
        animate(el.card, 'anim-shake');
        animate(el.mascot, 'anim-tilt');
        el.feedback.className = 'feedback bad';
        const title = given === null ? t('timesUp') : t('almost');
        el.feedback.innerHTML = `${title}<small>${t('remember')} ${questionText(q)} = ${q.answer}</small>`;
        sfx.wrong();
        if (navigator.vibrate) navigator.vibrate(120);
    }

    renderTopbar();
    renderProgress();
    later(correct ? FEEDBACK_OK_MS : FEEDBACK_BAD_MS, () => {
        game.index++;
        nextQuestion();
    });
}

function floatPoints(pts, note) {
    const f = document.createElement('div');
    f.className = 'float-pts';
    f.innerHTML = `+${pts}${note ? `<small>${note}</small>` : ''}`;
    f.addEventListener('animationend', () => f.remove());
    el.floatLayer.appendChild(f);
}

function endRound() {
    if (game.retry.length === 0) return finishGame();

    game.round++;
    game.queue = shuffle(game.retry);
    game.retry = [];
    const n = game.queue.length;
    $('#round-title').textContent = `${t('round', game.round)} 🔁`;
    $('#round-text').textContent = n === 1 ? t('roundOne') : t('roundMany', n);
    el.roundOverlay.hidden = false;
}

$('#btn-round-go').onclick = () => {
    el.roundOverlay.hidden = true;
    startRound();
};

// ---------- Pause ----------
function pauseGame() {
    if (currentScreen !== 'game' || !game || game.paused || !el.roundOverlay.hidden || !el.countdown.hidden) return;
    game.paused = true;
    if (canSpeak) speechSynthesis.cancel();
    el.pauseOverlay.hidden = false;
}

function resumeGame() {
    if (!game || !game.paused) return;
    game.paused = false;
    timer.last = performance.now();
    el.pauseOverlay.hidden = true;
    if (game.pendingNext) {
        game.pendingNext = false;
        nextQuestion();
    }
}

function quitGame() {
    session++;
    stopTimer();
    if (canSpeak) speechSynthesis.cancel();
    game = null;
    el.pauseOverlay.hidden = true;
    el.roundOverlay.hidden = true;
    el.countdown.hidden = true;
    renderHome();
    showScreen('home');
}

$('#btn-pause').onclick = pauseGame;
$('#btn-resume').onclick = resumeGame;
$('#btn-quit').onclick = quitGame;
document.addEventListener('visibilitychange', () => { if (document.hidden) pauseGame(); });

// ---------- Results ----------
function finishGame() {
    stopTimer();
    const p = player();
    const s = game.s;
    const ratio = game.firstTry / game.total;
    const stars = ratio >= 0.9 ? 3 : ratio >= 0.7 ? 2 : 1;
    const newBest = p.stats.games > 0 && game.score > p.stats.bestScore;

    p.stats.games++;
    p.stats.correct += game.correctCount;
    p.stats.stars += stars;
    p.stats.bestScore = Math.max(p.stats.bestScore, game.score);
    p.stats.bestStreak = Math.max(p.stats.bestStreak, game.bestStreak);

    // Remember tricky facts for future games; forget ones solved on the first try
    const tricky = [];
    game.results.forEach(r => {
        if (r.attempts > 1) {
            p.missed[r.q.key] = (p.missed[r.q.key] || 0) + 1;
            tricky.push(r);
        } else {
            delete p.missed[r.q.key];
        }
    });
    const missedKeys = Object.keys(p.missed);
    missedKeys.slice(0, Math.max(0, missedKeys.length - 60)).forEach(k => delete p.missed[k]);

    const ctx = {
        s,
        stats: p.stats,
        perfect: game.firstTry === game.total && game.total >= 5,
        bestStreak: game.bestStreak,
        fast: game.fast,
        rounds: game.round,
        newBest,
    };
    const earned = TROPHIES.filter(tr => !p.trophies[tr.id] && tr.test(ctx));
    earned.forEach(tr => { p.trophies[tr.id] = new Date().toISOString(); });
    saveStore();

    // Title & stars
    $('#res-title').textContent = t('title' + stars);
    $('#res-sub').textContent = stars === 1 ? t('sub1') : t('subAll', game.total);
    $('#res-stars').innerHTML = [0, 1, 2].map(i =>
        `<span class="star${i < stars ? ' on' : ''}" style="animation-delay:${0.3 + i * 0.25}s">★</span>`).join('');
    $('#res-best').hidden = !newBest;
    $('#res-points').textContent = t('points', game.score);

    $('#res-stats').innerHTML = [
        [`${game.firstTry}/${game.total}`, t('firstTry')],
        [game.round, t('rounds', game.round)],
        [game.bestStreak, t('bestStreak')],
        [game.fast, t('superFast')],
    ].map(([v, l]) => `<div class="stat"><b>${v}</b><small>${l}</small></div>`).join('');

    $('#res-trophies').innerHTML = earned.length
        ? `<h3>${t('newTrophies')}</h3><div class="list">${earned.map((tr, i) =>
            `<div class="trophy" style="animation-delay:${1 + i * 0.3}s"><span class="ti">${tr.icon}</span>${trophyName(tr)}</div>`).join('')}</div>`
        : '';

    $('#res-tricky').innerHTML = tricky.length
        ? `<h3>${t('trickyTitle')}</h3><ul>${tricky.map(r =>
            `<li>${questionText(r.q)} = <b>${r.q.answer}</b> <small>(${t('tries', r.attempts)})</small></li>`).join('')}</ul>`
        : '';

    showScreen('results');
    countUp($('#res-score'), game.score);
    sfx.fanfare();
    confetti(stars === 3 ? 220 : 120);
    earned.forEach((tr, i) => later(1200 + i * 900, () => { toast(tr); sfx.trophy(); }));
}

function countUp(node, target) {
    if (reducedMotion) { node.textContent = target; return; }
    const start = performance.now();
    const dur = 1200;
    const step = now => {
        const k = Math.min(1, (now - start) / dur);
        node.textContent = Math.round(target * (1 - Math.pow(1 - k, 3)));
        if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
}

function toast(tr) {
    const div = document.createElement('div');
    div.className = 'toast';
    div.innerHTML = `<span class="ti">${tr.icon}</span><span>${t('trophyWon')}<br>${trophyName(tr)}</span>`;
    div.addEventListener('animationend', () => div.remove());
    el.toasts.appendChild(div);
}

$('#btn-again').onclick = startGame;
$('#btn-home').onclick = () => { renderHome(); showScreen('home'); };
$('#btn-play').onclick = startGame;

// ---------- Confetti ----------
let confettiParts = [];
let confettiRunning = false;

function confetti(count = 150) {
    if (reducedMotion) return;
    const c = el.confetti;
    const dpr = window.devicePixelRatio || 1;
    c.width = innerWidth * dpr;
    c.height = innerHeight * dpr;
    const colors = ['#7c5cff', '#22c55e', '#ff5a6e', '#ff9f1c', '#ffd23f', '#38bdf8'];
    for (let i = 0; i < count; i++) {
        confettiParts.push({
            x: innerWidth / 2 + (Math.random() - 0.5) * innerWidth * 0.4,
            y: innerHeight * 0.4,
            vx: (Math.random() - 0.5) * 14,
            vy: -Math.random() * 14 - 4,
            size: 6 + Math.random() * 7,
            color: pick(colors),
            rot: Math.random() * Math.PI,
            vr: (Math.random() - 0.5) * 0.3,
            life: 0,
        });
    }
    if (!confettiRunning) {
        confettiRunning = true;
        requestAnimationFrame(drawConfetti);
    }
}

function drawConfetti() {
    const c = el.confetti;
    const ctx = c.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    confettiParts.forEach(pt => {
        pt.vy += 0.35;
        pt.vx *= 0.99;
        pt.x += pt.vx;
        pt.y += pt.vy;
        pt.rot += pt.vr;
        pt.life++;
        ctx.save();
        ctx.translate(pt.x, pt.y);
        ctx.rotate(pt.rot);
        ctx.globalAlpha = Math.max(0, 1 - pt.life / 180);
        ctx.fillStyle = pt.color;
        ctx.fillRect(-pt.size / 2, -pt.size / 4, pt.size, pt.size / 2);
        ctx.restore();
    });
    confettiParts = confettiParts.filter(pt => pt.y < innerHeight + 40 && pt.life < 180);
    if (confettiParts.length) requestAnimationFrame(drawConfetti);
    else { confettiRunning = false; ctx.clearRect(0, 0, innerWidth, innerHeight); }
}

// ---------- Settings ----------
function openSettings() {
    const p = player();
    const s = p.settings;
    $('#settings-title').textContent = t('settingsFor', `${p.avatar} ${p.name}`);
    $('#set-questions').value = String(s.questions);
    $('#set-seconds').value = String(s.seconds);
    $('#set-min').value = s.min;
    $('#set-max').value = s.max;
    $('#set-limit').checked = s.limitAnswers;
    $$('.ops input').forEach(i => { i.checked = s.ops.includes(i.value); });
    $('#set-sound').checked = s.sound;
    $('#set-review').checked = s.review;
    $('#set-speak').checked = s.speak;
    $('#set-lang').value = s.lang;
    $('.speak-lang').hidden = !s.speak || !canSpeak;
    $('#set-speak').closest('label').hidden = !canSpeak;
    $('#settings-error').textContent = '';
    el.settingsModal.hidden = false;
}

$('#set-speak').onchange = e => { $('.speak-lang').hidden = !e.target.checked; };

$$('.presets button').forEach(b => {
    b.onclick = () => {
        const [min, max, ops, limit] = b.dataset.preset.split(',');
        $('#set-min').value = min;
        $('#set-max').value = max;
        $('#set-limit').checked = limit === '1';
        $$('.ops input').forEach(i => { i.checked = ops.includes(i.value); });
        animate(b, 'anim-bounce');
    };
});

$('#btn-save-settings').onclick = () => {
    const min = parseInt($('#set-min').value, 10);
    const max = parseInt($('#set-max').value, 10);
    const limitAnswers = $('#set-limit').checked;
    const ops = $$('.ops input').filter(i => i.checked).map(i => i.value);
    const err = $('#settings-error');

    if (isNaN(min) || isNaN(max) || min < 0 || max > 999 || min > max) {
        err.textContent = t('errRange');
        return;
    }
    if (max < 1 && ops.includes('/')) {
        err.textContent = t('errDiv');
        return;
    }
    if (!ops.length) {
        err.textContent = t('errOps');
        return;
    }
    const impossible = limitAnswers && ops.find(op => !limitPossible(op, { min, max }));
    if (impossible) {
        err.textContent = t('errLimit', OPS[impossible].sym);
        return;
    }

    const p = player();
    p.settings = {
        ...p.settings,
        questions: parseInt($('#set-questions').value, 10),
        seconds: parseInt($('#set-seconds').value, 10),
        min,
        max,
        limitAnswers,
        ops,
        sound: $('#set-sound').checked,
        review: $('#set-review').checked,
        speak: $('#set-speak').checked,
        lang: $('#set-lang').value,
    };
    saveStore();
    el.settingsModal.hidden = true;
    renderHome();
};

$('#btn-settings').onclick = openSettings;
el.summary.onclick = openSettings;

// ---------- Players ----------
let editingPlayer = null;
let chosenAvatar = AVATARS[0];

function openPlayerModal(p) {
    editingPlayer = p;
    chosenAvatar = p ? p.avatar : AVATARS[store.players.length % AVATARS.length];
    $('#player-title').textContent = p ? t('editPlayer') : t('newPlayer');
    $('#player-name').value = p ? p.name : '';
    $('#player-error').textContent = '';
    $('#btn-delete-player').hidden = !p || store.players.length < 2;
    renderAvatars();
    el.playerModal.hidden = false;
    if (!p) setTimeout(() => $('#player-name').focus(), 50);
}

function renderAvatars() {
    const grid = $('#avatar-grid');
    grid.innerHTML = '';
    AVATARS.forEach(a => {
        const b = document.createElement('button');
        b.type = 'button';
        b.textContent = a;
        b.className = a === chosenAvatar ? 'active' : '';
        b.onclick = () => { chosenAvatar = a; renderAvatars(); };
        grid.appendChild(b);
    });
}

$('#btn-save-player').onclick = () => {
    const name = $('#player-name').value.trim();
    if (!name) {
        $('#player-error').textContent = t('errName');
        return;
    }
    if (editingPlayer) {
        editingPlayer.name = name;
        editingPlayer.avatar = chosenAvatar;
    } else {
        const p = newPlayer(name, chosenAvatar);
        store.players.push(p);
        store.current = p.id;
    }
    saveStore();
    el.playerModal.hidden = true;
    renderHome();
};

$('#btn-delete-player').onclick = () => {
    const p = editingPlayer;
    if (!p || store.players.length < 2) return;
    if (!confirm(t('confirmDelete', p.name))) return;
    store.players = store.players.filter(x => x.id !== p.id);
    store.current = store.players[0].id;
    saveStore();
    el.playerModal.hidden = true;
    renderHome();
};

$('#btn-edit-player').onclick = () => openPlayerModal(player());

// Close buttons and backdrop clicks for modals
$$('[data-close]').forEach(b => { b.onclick = () => { b.closest('.overlay').hidden = true; }; });
[el.settingsModal, el.playerModal].forEach(m => {
    m.addEventListener('click', e => { if (e.target === m) m.hidden = true; });
});

// ---------- Keypad & keyboard ----------
el.keypad.addEventListener('pointerdown', e => {
    const b = e.target.closest('button');
    if (!b) return;
    e.preventDefault(); // instant response, no focus, no double-tap zoom
    b.classList.add('pressed');
    setTimeout(() => b.classList.remove('pressed'), 120);
    pressKey(b.dataset.key);
});

document.addEventListener('keydown', e => {
    const modalOpen = !el.settingsModal.hidden || !el.playerModal.hidden;
    if (modalOpen) {
        if (e.key === 'Escape') { el.settingsModal.hidden = true; el.playerModal.hidden = true; }
        else if (e.key === 'Enter' && !el.playerModal.hidden) $('#btn-save-player').click();
        return;
    }

    if (currentScreen === 'game') {
        if (!el.roundOverlay.hidden) {
            if (e.key === 'Enter') { e.preventDefault(); $('#btn-round-go').click(); }
            return;
        }
        if (game && game.paused) {
            if (e.key === 'Enter' || e.key === 'Escape' || e.key === ' ') { e.preventDefault(); resumeGame(); }
            return;
        }
        if (e.key === 'Escape' || e.key === 'p') return pauseGame();
        if (/^[0-9]$/.test(e.key) || e.key === 'Enter' || e.key === 'Backspace') {
            e.preventDefault();
            const b = el.keypad.querySelector(`[data-key="${e.key}"]`);
            if (b) { b.classList.add('pressed'); setTimeout(() => b.classList.remove('pressed'), 120); }
            pressKey(e.key);
        }
        return;
    }

    // Enter starts a game from home/results (unless a button is focused)
    if (e.key === 'Enter' && !e.target.closest('button, input, select')) {
        e.preventDefault();
        startGame();
    }
});

// Voices load asynchronously in some browsers
if (canSpeak) speechSynthesis.getVoices();

saveStore();
applyLanguage();
