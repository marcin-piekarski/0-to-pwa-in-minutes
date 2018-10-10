importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

if (workbox) {

    var CACHE_NAME = 'goggles-ecom-pwa';

    // Configure Workbox
    workbox.setConfig({
        debug: true
    });

    // Configure Workbox Caching
    workbox.core.setCacheNameDetails({
        prefix: CACHE_NAME,
        suffix: 'v1',
    });

    // Set skip waiting and clients claims as per Workbox Codelabs
    workbox.skipWaiting();
    workbox.clientsClaim();

    /**
     * Pre-Cache Files
     */

    workbox.precaching.precacheAndRoute([
        '/',
        '/css/bootstrap.css',
        '/css/login_overlay.css',
        '/css/style6.css',
        '/css/shop.css',
        '/css/owl.carousel.css',
        '/css/owl.theme.css',
        '/css/style.css',
        '/css/fontawesome-all.css',
        '/css/simplyCountdown.css',
        '/js/jquery-2.2.3.min.js',
        '/js/modernizr-2.6.2.min.js',
        '/js/classie-search.js',
        '/js/demo1-search.js',
        '/js/minicart.js',
        '/js/simplyCountdown.js',
        '/js/owl.carousel.js',
        '/js/move-top.js',
        '/js/easing.js',
        '/js/bootstrap.js'
    ]);

    /**
     * Cache CSS using State While Re-validate
     */

    workbox.routing.registerRoute(
        /.*\.css/,

        workbox.strategies.staleWhileRevalidate({

            // Don't keep any entries for more than 3 days.
            maxAgeSeconds: 3 * 24 * 60 * 60,

            // Automatically cleanup if quota is exceeded.
            purgeOnQuotaError: true,

            // Note: Status code '0' is used for opaque responses
            statuses: [0, 200]
        })
    );

    /**
     * Cache JS using State While Re-validate
     */

    workbox.routing.registerRoute(
        /.*\.js/,

        workbox.strategies.staleWhileRevalidate({

            // Don't keep any entries for more than 3 days.
            maxAgeSeconds: 3 * 24 * 60 * 60,

            // Automatically cleanup if quota is exceeded.
            purgeOnQuotaError: true,

            // Note: Status code '0' is used for opaque responses
            statuses: [0, 200]
        })
    );

    /**
     * Cache Images using Cache First
     */

    workbox.routing.registerRoute(
        /.*\.(?:png|jpg|jpeg|svg|gif)/,

        // Use the cache if it's available
        workbox.strategies.cacheFirst({

            // Use a custom cache name
            cacheName: CACHE_NAME + '-image-cache',

            plugins: [
                new workbox.expiration.Plugin({

                    // Don't keep any entries for more than 3 days.
                    maxAgeSeconds: 3 * 24 * 60 * 60,

                    // Automatically cleanup if quota is exceeded.
                    purgeOnQuotaError: true,

                    // Note: Status code '0' is used for opaque responses
                    statuses: [0, 200]
                })
            ],
        })
    );

    /**
     * Custom Matcher/Handler for HTML
     *
     * @param url
     * @param event
     * @param params
     * @returns {boolean}
     */

    var matcher = function({url, event, params}) {
        var isNavigating = event.request.mode === "navigate";
        var isHTML = event.request.headers.get("accept").includes("text/html");
        var isLocal = url.origin === location.origin;

        return isNavigating && isHTML && isLocal;
    };

    var handler = function({event}) {
        return workbox.strategies
            .networkFirst({

                // Use a custom cache name
                cacheName: CACHE_NAME + '-html-cache',

                plugins: [
                    new workbox.cacheableResponse.Plugin({

                        // Keep at most recent entries
                        maxEntries: 240,

                        // Don't keep any entries for more than 3 days.
                        maxAgeSeconds: 3 * 24 * 60 * 60,

                        // Automatically cleanup if quota is exceeded.
                        purgeOnQuotaError: true,

                        // Note: Status code '0' is used for opaque responses
                        statuses: [0, 200]
                    })
                ],
            })
            .handle({event})
            .then(function (response) {
                return response ? response : fromCache(precacheCacheName, event.request);
            })
            .catch(function() {
                return fromCache(precacheCacheName, event.request)
            });
    };

    workbox.routing.registerRoute(matcher, handler);
}