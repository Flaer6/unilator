// В файле sw.js
const cacheName = "offline-cache";
const offlineUrls = [
  "/",
  "index.html",
  "css/style.css",
  "js/hypotenuse.js",
  "js/cathetus.js",
  // Добавьте другие ресурсы вашего сайта, которые нужно кэшировать
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(offlineUrls);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
