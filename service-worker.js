self.addEventListener("install", (event) => {
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    console.log("Activated");
});

self.addEventListener("fetch", (event) => {
    event.respondWith(fetch(event.request));
});