"use strict";

var CACHE_PREFIX = "motsportes-pwa";
var CACHE_VERSION = "v1";
var STATIC_CACHE = CACHE_PREFIX + "-static-" + CACHE_VERSION;

var STATIC_ASSETS = [
  "./",
  "./index.html",
  "./offline.html",
  "./css/styles.css",
  "./js/app.js",
  "./manifest.webmanifest",
  "./data/data.json",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  "./assets/images/hero-photo.png",
  "./assets/images/canva/1.png",
  "./assets/images/canva/2.png",
  "./assets/images/canva/3.png",
  "./assets/images/canva/4.png",
  "./assets/images/canva/5.png",
  "./assets/images/canva/6.png",
  "./assets/images/canva/7.png",
  "./assets/images/canva/8.png",
  "./assets/images/canva/9.png"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(STATIC_CACHE).then(function (cache) {
      return cache.addAll(STATIC_ASSETS);
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.map(function (key) {
          var isOwnCache = key.indexOf(CACHE_PREFIX + "-") === 0;
          if (isOwnCache && key !== STATIC_CACHE) {
            return caches.delete(key);
          }
          return Promise.resolve(false);
        })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

self.addEventListener("fetch", function (event) {
  var request = event.request;

  if (request.method !== "GET") {
    return;
  }

  var url = new URL(request.url);
  if (url.origin !== self.location.origin) {
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(function () {
        return caches.match("./offline.html");
      })
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(function (cachedResponse) {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(request).catch(function () {
        return Response.error();
      });
    })
  );
});
