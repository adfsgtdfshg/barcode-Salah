const CACHE_NAME = 'barcode-reader-v2';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './icons/icon.svg',
  './manifest.webmanifest',
  'https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap',
  'https://cdn.jsdelivr.net/npm/exceljs/dist/exceljs.min.js'
];

// تثبيت Service Worker وتخزين الملفات المطلوبة
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('تخزين الملفات في الكاش...');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => {
        console.log('تم تخزين جميع الملفات بنجاح');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('خطأ في تخزين الملفات:', error);
      })
  );
});

// تفعيل Service Worker وحذف الكاش القديم
self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log('حذف الكاش القديم:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      self.clients.claim()
    ])
  );
});

// استجابة للطلبات مع استراتيجية الكاش أولاً
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request)
          .then((response) => {
            // تخزين النسخة الجديدة في الكاش
            if (response.ok && event.request.method === 'GET') {
              const responseToCache = response.clone();
              caches.open(CACHE_NAME)
                .then((cache) => {
                  cache.put(event.request, responseToCache);
                });
            }
            return response;
          })
          .catch(() => {
            // إذا فشل الاتصال، نعرض صفحة الخطأ
            if (event.request.mode === 'navigate') {
              return caches.match('./index.html');
            }
            return new Response('حدث خطأ في الاتصال', {
              status: 503,
              statusText: 'Service Unavailable'
            });
          });
      })
  );
});