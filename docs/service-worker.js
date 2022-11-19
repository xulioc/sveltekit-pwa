const r = [
  "/sveltekit-pwa/_app/immutable/start-6355d648.js",
  "/sveltekit-pwa/_app/immutable/components/layout.svelte-318c4699.js",
  "/sveltekit-pwa/_app/immutable/components/error.svelte-87d4f8e1.js",
  "/sveltekit-pwa/_app/immutable/components/pages/_page.svelte-aa58de35.js",
  "/sveltekit-pwa/_app/immutable/modules/pages/_layout.ts-5ffbbe04.js",
  "/sveltekit-pwa/_app/immutable/chunks/singletons-2e378b84.js",
  "/sveltekit-pwa/_app/immutable/chunks/index-4ce6debf.js",
  "/sveltekit-pwa/_app/immutable/chunks/_layout-b711fdb6.js",
  "/sveltekit-pwa/_app/immutable/chunks/0-531b66cf.js",
  "/sveltekit-pwa/_app/immutable/chunks/1-06f245c2.js",
  "/sveltekit-pwa/_app/immutable/chunks/2-234451a5.js"
], h = [
  "/sveltekit-pwa/.nojekyll",
  "/sveltekit-pwa/android-chrome-192x192.png",
  "/sveltekit-pwa/android-chrome-512x512.png",
  "/sveltekit-pwa/apple-touch-icon.png",
  "/sveltekit-pwa/browserconfig.xml",
  "/sveltekit-pwa/favicon-16x16.png",
  "/sveltekit-pwa/favicon-32x32.png",
  "/sveltekit-pwa/favicon.ico",
  "/sveltekit-pwa/favicon.png",
  "/sveltekit-pwa/mstile-150x150.png",
  "/sveltekit-pwa/safari-pinned-tab.svg",
  "/sveltekit-pwa/site.webmanifest"
], n = "1668881577001", a = self, o = `cache${n}`, p = r.concat(h), m = new Set(p);
a.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(o).then((t) => t.addAll(p)).then(() => {
      a.skipWaiting();
    })
  );
});
a.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(async (t) => {
      for (const s of t)
        s !== o && await caches.delete(s);
      a.clients.claim();
    })
  );
});
async function u(e) {
  const t = await caches.open(`offline${n}`);
  try {
    const s = await fetch(e);
    return t.put(e, s.clone()), s;
  } catch (s) {
    const c = await t.match(e);
    if (c)
      return c;
    throw s;
  }
}
a.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const t = new URL(e.request.url), s = t.protocol.startsWith("http"), c = t.hostname === self.location.hostname && t.port !== self.location.port, i = t.host === self.location.host && m.has(t.pathname), l = e.request.cache === "only-if-cached" && !i;
  s && !c && !l && e.respondWith(
    (async () => i && await caches.match(e.request) || u(e.request))()
  );
});
