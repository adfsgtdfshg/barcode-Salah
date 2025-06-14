const CACHE_NAME = 'excel-reader-v3';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  'https://cdn.jsdelivr.net/npm/exceljs/dist/exceljs.min.js',
  'https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap',
  'https://fonts.gstatic.com/s/cairo/v28/SLXgc1nY6HkvangtZmpQdkhzfH5lkSs2SgRjCAGMQ1z0hGA-W1Q.woff2',
  'https://fonts.gstatic.com/s/cairo/v28/SLXgc1nY6HkvangtZmpQdkhzfH5lkSs2SgRjCAGMQ1z0hL4-W1Q.woff2'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // إذا وجدنا استجابة في الكاش، نعيدها
        if (response) {
          return response;
        }
        // وإلا نقوم بجلب الطلب من الشبكة
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});