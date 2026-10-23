const CACHE_NAME = "micontable-cache-v7";
const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

// Instala y guarda los archivos en caché
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

// Limpia cachés viejas al activar
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Solo se guardan los archivos de la app y los de Firebase (versión fija).
// Firestore, el inicio de sesión y la copia en la nube van siempre directos a internet.
const FIREBASE_JS = /^https:\/\/www\.gstatic\.com\/firebasejs\/10\.13\.1\//;
function guardar(cache, req, r) {
  if (r && r.ok) cache.put(req, r.clone()).catch(() => {});
  return r;
}
self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin && !FIREBASE_JS.test(req.url)) return;
  const esPagina = req.mode === "navigate" || url.pathname.endsWith("index.html") || url.pathname.endsWith("/") || url.pathname.endsWith("manifest.json");
  if (esPagina) {
    // Copia guardada al instante; la versión nueva se descarga por detrás para la próxima vez.
    const red = caches.open(CACHE_NAME).then(cache => fetch(req).then(r => guardar(cache, req, r)));
    event.waitUntil(red.catch(() => {}));
    event.respondWith(
      caches.match(req, { ignoreSearch: true }).then(c => c || red).catch(() => caches.match("./index.html"))
    );
    return;
  }
  event.respondWith(
    caches.match(req).then(c => c || caches.open(CACHE_NAME).then(cache => fetch(req).then(r => guardar(cache, req, r))))
  );
});
