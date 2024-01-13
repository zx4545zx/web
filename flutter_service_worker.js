'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "074b096ac140eb088028f0d0b888e810",
"index.html": "dada2f0442d8948bb3a24c12d88171d7",
"/": "dada2f0442d8948bb3a24c12d88171d7",
"main.dart.js": "a7400d8ae1603a3d7426874e8211a9f8",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "fc05275add6b0348d06a2ec23fe1b10f",
"assets/AssetManifest.json": "fe439b5c0aabc9353c3d97a28043b07d",
"assets/NOTICES": "2a1c566309ee6ece683144eafccd61b5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "b03becd5cfa24fa8dc0cb63bd09e2d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "ffde02293be86592761d9efbb62d996e",
"assets/fonts/MaterialIcons-Regular.otf": "fed227124dbd09a200ad28c09c04ead5",
"assets/assets/images/slip.png": "15bbcd930b026746ba22593bb2d2bc0a",
"assets/assets/images/promptPay.png": "2b236b1d7472b1f27e2130a7a62552cd",
"assets/assets/icons/under2.png": "57e70fde52f88f088ebe7b87ebc44788",
"assets/assets/icons/under3.png": "b5ffde81b9db8ef7f4370b3a7b7d9c9e",
"assets/assets/icons/dollarCoin.png": "202cbf43b555beb231c183c38eee78d7",
"assets/assets/icons/mascot_sit.gif": "90cc11ffef2d0f22ca6dc80591a63fd1",
"assets/assets/icons/movieTicket.png": "8bc2097a3d369e9015fd8795b2b29b3e",
"assets/assets/icons/time.png": "1fe3209318f043be7d3dd04bfcf93540",
"assets/assets/icons/under4.png": "2561e6b680fcb83fb51c83d477970ab3",
"assets/assets/icons/equalSign.png": "d610818b447245ec3ea68df8c89b617f",
"assets/assets/icons/dineIn.png": "f98762075fc59c49facc2fe6bd755ee1",
"assets/assets/icons/mascot_stand.gif": "58200c08a84ef1349499b94c828ea6ab",
"assets/assets/icons/top1@3x1.png": "7b76d8e78d4215685b26ba00d7b3f266",
"assets/assets/icons/notic.png": "ac53fd4176481c19dd591f683460d539",
"assets/assets/icons/ticket.png": "c2aa1d358a944c1769677f9031d8ae6e",
"assets/assets/icons/top3@3x1.png": "18e429a110672649c491b04b95f24689",
"assets/assets/icons/under4@3x1.png": "563f2dcd461f7722649a07793f82fd27",
"assets/assets/icons/person.png": "e5206f4e22a150ea7aec0242b9be0fce",
"assets/assets/icons/top2@3x1.png": "71b66b179fb05ddfa76bc62f207edbbd",
"assets/assets/icons/under5@3x1.png": "a4fbf5dfcecafcc10871f4627bab2ca6",
"assets/assets/icons/food1.png": "06d9afd3ff8b35f294a7d29100ff69b7",
"assets/assets/icons/search.png": "d2fa1e5a2c20934270c968586742636d",
"assets/assets/icons/top3.png": "a39e7d7a4b4b5bca51428cf25f76a07e",
"assets/assets/icons/print.png": "7470d3dac16fc2c5459db68271879dbc",
"assets/assets/icons/users.png": "eb05f4caaefc8eca27463483020926f1",
"assets/assets/icons/top2.png": "3b5a06249180771eebbd25a2e78ff108",
"assets/assets/icons/maleUser.png": "55b45c22a5c79ec64c02756df0902938",
"assets/assets/icons/food.png": "93eafff5ed0af25536b28cc28eaea671",
"assets/assets/icons/top1.png": "ed1db944a600d9720582e22d76e0d62f",
"assets/assets/icons/under1@3x1.png": "124b02627d5cde69acedec5581dad20f",
"assets/assets/icons/appIcon.png": "97ecef15b0d6a86cfca7215d96be7080",
"assets/assets/icons/tables.png": "d64f4e07e4e0d0a138bbb9a14ef9cece",
"assets/assets/icons/call.png": "c23b09f15fa0af2d4c34adb84bb30a2c",
"assets/assets/icons/under3@3x1.png": "a9aacc26ac8e0ae879fc0794bd8c7fae",
"assets/assets/icons/unlock.png": "a279a4111266e78252b7f82df2012cd9",
"assets/assets/icons/top4@3x1.png": "fd202878b1333dbb95f8e84e11d4a54b",
"assets/assets/icons/cash.png": "4e56f5dbd0cbc96745f1c21dd7db54ce",
"assets/assets/icons/mascot.png": "cfc4acb113676a62a95009a47fb142ba",
"assets/assets/icons/posstik.png": "9297522a2a176916026f2f992b37d6e1",
"assets/assets/icons/shadow.png": "695f9a05fa96562f454019fb76f9163b",
"assets/assets/icons/line.png": "12e44bdfe89bc4fc922e218583c5a616",
"assets/assets/icons/scan.png": "87349560c8cf8df5d2e5e900f06850ac",
"assets/assets/icons/takeAway.png": "abd42977fa6c2f0f5ae1bcdae256d91f",
"assets/assets/icons/under2@3x1.png": "38c4a42e3201722f2c5db32433a23a35",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
