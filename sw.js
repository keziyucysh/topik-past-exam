// Offline cache for the TOPIK I practice app (used when the app is hosted as a standalone PWA).
const CACHE = "topik1-v2";
const CORE = ["./", "./index.html", "./manifest.webmanifest", "./sessions/index.json", "./icons/icon-192.png", "./icons/icon-512.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return;
  // JSON (question banks, index): network first so new sessions show up; everything else: cache first.
  if (url.pathname.endsWith(".json")) {
    e.respondWith(fetch(e.request).then(r => { const c = r.clone(); caches.open(CACHE).then(x => x.put(e.request, c)); return r; }).catch(() => caches.match(e.request)));
  } else if (!e.request.headers.has("range")) {
    e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request).then(r => {
      if (r.ok && r.status === 200) { const c = r.clone(); caches.open(CACHE).then(x => x.put(e.request, c)); }
      return r;
    })));
  }
});
