const C = 'whoami-v4'; // bump this version whenever you edit a file below
const FILES = ['./', 'index.html', 'characters.js', 'game.js', 'manifest.webmanifest', 'icon.svg'];

self.addEventListener('install', e => { self.skipWaiting(); e.waitUntil(caches.open(C).then(c => c.addAll(FILES))); });
self.addEventListener('activate', e => e.waitUntil(
  caches.keys().then(k => Promise.all(k.filter(x => x !== C).map(x => caches.delete(x)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true })
    .then(r => r || fetch(e.request).catch(() => caches.match('index.html'))));
});
