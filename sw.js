// Stocks : service worker (fonctionnement hors connexion de l'application)
const CACHE = 'stocks-1.0.0';
const COQUILLE = ['./', './index.html', './manifest.json', './firebase-config.js',
  './icons/icon-180.png', './icons/icon-192.png', './icons/icon-512.png'];
const EXTERNES = ['www.gstatic.com', 'cdn.jsdelivr.net', 'fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(COQUILLE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(k => Promise.all(k.filter(n => n !== CACHE).map(n => caches.delete(n)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Fichiers de l'application : réseau d'abord (mises à jour), cache si hors connexion.
  if (url.origin === location.origin) {
    e.respondWith(fetch(req).then(r => { const c = r.clone(); caches.open(CACHE).then(x => x.put(req, c)); return r; })
      .catch(() => caches.match(req).then(r => r || caches.match('./index.html'))));
    return;
  }
  // Bibliothèques et polices : cache d'abord.
  if (EXTERNES.includes(url.hostname)) {
    e.respondWith(caches.match(req).then(r => r || fetch(req).then(res => { const c = res.clone(); caches.open(CACHE).then(x => x.put(req, c)); return res; })));
  }
  // Tout le reste (Firebase) passe sans intervention : Firebase gère lui-même le hors-connexion.
});
