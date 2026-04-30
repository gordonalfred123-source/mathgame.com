/*!
 * MathFormulaGame - Service Worker
 * Provides offline caching using Cache API for PWA functionality
 * 
 * This service worker caches:
 * - Core files (index.html, style.css, script.js)
 * - External CDN resources (KaTeX, Font Awesome)
 * 
 * To modify caching behavior:
 * - Adjust the CACHE_NAME version for updates
 * - Modify the precacheAndInstall function
 * - Add more resources to the cache
 */

const CACHE_NAME = 'mathformulagame-v1.0.0';
const urlsToCache = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './manifest.json',
    'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
    'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js',
    'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// Install event - cache essential resources
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('MathFormulaGame: Caching core resources');
                return cache.addAll(urlsToCache);
            })
            .then(() => {
                return self.skipWaiting();
            })
            .catch(err => {
                console.error('MathFormulaGame: Cache install failed:', err);
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME && cacheName.startsWith('mathformulagame-')) {
                        console.log('MathFormulaGame: Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            return self.clients.claim();
        })
    );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
    const requestUrl = new URL(event.request.url);
    
    // Skip non-GET requests
    if (event.request.method !== 'GET') {
        return;
    }

    // Skip chrome-extension and other non-http(s) requests
    if (!requestUrl.protocol.startsWith('http')) {
        return;
    }

    // Handle external CDN requests specially
    if (requestUrl.href.startsWith('https://cdn.jsdelivr.net') || 
        requestUrl.href.startsWith('https://cdnjs.cloudflare.com')) {
        event.respondWith(
            caches.open(CACHE_NAME).then(cache => {
                return cache.match(event.request).then(response => {
                    if (response) {
                        return response;
                    }
                    return fetch(event.request).then(fetchResponse => {
                        if (fetchResponse.ok) {
                            cache.put(event.request, fetchResponse.clone());
                        }
                        return fetchResponse;
                    }).catch(() => {
                        console.log('MathFormulaGame: Offline - CDN resource unavailable');
                        return new Response('Offline', { status: 503 });
                    });
                });
            })
        );
        return;
    }

    // For local requests, try network first, then cache
    event.respondWith(
        fetch(event.request)
            .then(response => {
                if (response.ok) {
                    const responseClone = response.clone();
                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, responseClone);
                    });
                }
                return response;
            })
            .catch(() => {
                return caches.match(event.request).then(response => {
                    if (response) {
                        return response;
                    }
                    // Return offline page fallback for navigation requests
                    if (event.request.mode === 'navigate') {
                        return caches.match('./index.html');
                    }
                    return new Response('Offline - Resource not cached', { 
                        status: 503,
                        statusText: 'Service Unavailable'
                    });
                });
            })
    );
});

// Handle messages from the main app
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
    
    if (event.data && event.data.type === 'CACHE_URLS') {
        const urls = event.data.urls;
        caches.open(CACHE_NAME).then(cache => {
            cache.addAll(urls).then(() => {
                console.log('MathFormulaGame: Additional URLs cached');
            });
        });
    }
});