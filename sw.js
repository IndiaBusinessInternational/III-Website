/* India Intelligence International — service worker (IBI PWA kit, III colours). Makes the app installable and gives an offline fallback.
 * NETWORK-FIRST for everything: online you always get the live files (no stale versions);
 * the cache is only used when the network fails. Other sites (APIs, Google, CDNs) are never touched.
 * Bump CACHE with every release. */
const CACHE = 'iii-website-v1-4';
self.addEventListener('install', (e) => { self.skipWaiting(); e.waitUntil(caches.open(CACHE).then((c) => c.addAll([new Request('./', { cache: 'reload' })])).catch(() => {})); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE && k.startsWith('iii-website-')).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;           // APIs, Google, CDNs: browser default
  e.respondWith(fetch(req).then((res) => {
    if (res && res.status === 200 && res.type === 'basic') { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {}); }
    return res;
  }).catch(() => caches.match(req).then((r) => r || (req.mode === 'navigate' ? caches.match('./') : undefined)).then((r) => r || new Response('Offline', { status: 503, headers: { 'Content-Type': 'text/plain' } }))));
});
