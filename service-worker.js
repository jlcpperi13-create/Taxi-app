const CACHE_NAME = "control-taxi-cache-v3";
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

// index.html y navegación: siempre intenta la red primero (para no quedarse con versiones viejas).
// Solo usa la caché si no hay conexión a internet.
self.addEventListener("fetch", (event) => {
  const isNavigation = event.request.mode === "navigate" || event.request.url.endsWith("index.html") || event.request.url.endsWith("/");
  if (isNavigation) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, response.clone()));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }
  // Otros archivos (íconos, manifest): caché primero, red como respaldo.
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return (
        cached ||
        fetch(event.request).then((response) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, response.clone());
            return response;
          });
        }).catch(() => cached)
      );
    })
  );
});
