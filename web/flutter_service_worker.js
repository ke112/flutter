'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "6cbcc3d34340a3e85a0eee5d18b938cb",
"index.html": "39a541f245f4429811fc79f09f346ea7",
"/": "39a541f245f4429811fc79f09f346ea7",
"main.dart.js": "3fb9fa42e1f272e3982a54fcb0a93387",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "94bc8fa5bde126cfe313372c56f75011",
"assets/AssetManifest.json": "1f350af0605c36bdb6f8381a571d5a45",
"assets/NOTICES": "8a5e25fcba2bff3191b0d2ae35105adb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/resource/images/icon_live_go.png": "7eed322740e0294260834700f613fae8",
"assets/resource/images/bg_goufang.png": "608738bff70709c1f527b59874cf1ae6",
"assets/resource/images/dev_detail_openAccountBg.png": "4fb2976d87f5f19ba855721df2136713",
"assets/resource/images/dev_document_doc.png": "1ae6ca941f40899411df34e41e2cdf5e",
"assets/resource/images/icon_vr_go.png": "720e4d6643d87fe3c3048767da359ab0",
"assets/resource/images/2.0x/dev_detail_openAccountBg.png": "59cbc627e48e42a3a7297b34f7288c07",
"assets/resource/images/2.0x/dev_document_doc.png": "1ae6ca941f40899411df34e41e2cdf5e",
"assets/resource/images/2.0x/dev_detail_grayArrow_right.png": "89066df7c1288d4365c83a02023d6e3d",
"assets/resource/images/2.0x/dev_detail_comment_sel.png": "74e54ab2576e47c7956690dcc4f364f4",
"assets/resource/images/2.0x/icon_item_video.png": "69f4e015774f84c84ce161f0654ec883",
"assets/resource/images/2.0x/dev_detail_mianzeshengming.png": "cd357d4e88c5b733fe572d3e78b85f1e",
"assets/resource/images/2.0x/bg_item_house_special.png": "edf8db065771caf2448c948fe86ee1db",
"assets/resource/images/2.0x/dev_document_excel.png": "d3e0bd3c83f17ba256704fb265198771",
"assets/resource/images/2.0x/dev_document_png.png": "a29f47a22939633d1c20f83ad9d9ddc8",
"assets/resource/images/2.0x/dev_detail_dingyue.png": "c3fa5fdc59f60cc150c7282166d3a5d4",
"assets/resource/images/2.0x/dev_detail_online_selhouse.png": "d96d24fde57fc5c501e8fe49ea8cadde",
"assets/resource/images/2.0x/dev_document_jpg.png": "359491ef3f539a221d0260f9a7606869",
"assets/resource/images/2.0x/dev_detail_yuyuekanfang.png": "336ecfb4c4de8ee1dedd3291c1da251c",
"assets/resource/images/2.0x/dev_document_pdf.png": "89ceb44932f45829fa2414d0ff6ab9ea",
"assets/resource/images/2.0x/dev_document_ppt.png": "16a097aac95d29b466e12b86cb198417",
"assets/resource/images/2.0x/icon_item_vr.png": "d6d0cc17122a94b92724fce5de72dc52",
"assets/resource/images/2.0x/default_icon.png": "ca4cd48bbf9ccafb25759e7e5884fea5",
"assets/resource/images/2.0x/dev_detail_comment_nor.png": "ce661593e5fec19c3fed4bf69502fade",
"assets/resource/images/2.0x/1.png": "26ba67ba2758f52cc574c10ab0152b95",
"assets/resource/images/dev_detail_grayArrow_right.png": "f7563d8869fd115a0f3cd5aeed84d713",
"assets/resource/images/bg_live.png": "9190393d32c768c5a3d1b699dea722f4",
"assets/resource/images/dev_detail_comment_sel.png": "cddfd72b9ebbaa805e2921bea1704966",
"assets/resource/images/icon_item_video.png": "805302d1c20e360f1b2b1aeafc2e1ccb",
"assets/resource/images/dev_detail_mianzeshengming.png": "6a2b78d2e4ff3a847536c22e0b532cae",
"assets/resource/images/bg_item_house_special.png": "6f34a44a4083ea1a135c4db3e7477a36",
"assets/resource/images/dev_document_excel.png": "d3e0bd3c83f17ba256704fb265198771",
"assets/resource/images/3.0x/dev_detail_openAccountBg.png": "3ddb8ecc7ccced8a9246be101398a2e7",
"assets/resource/images/3.0x/dev_document_doc.png": "8446be073e08aa133c70248cb80b643b",
"assets/resource/images/3.0x/dev_detail_grayArrow_right.png": "bb6dd5c013843add3ccbd82e4e504745",
"assets/resource/images/3.0x/dev_detail_comment_sel.png": "e2403189d45560e253c452ef8fb85f73",
"assets/resource/images/3.0x/icon_item_video.png": "1277a8c681887fb92a1dc2af59fceb40",
"assets/resource/images/3.0x/dev_detail_mianzeshengming.png": "911597513ccdf0871ea249ec940250de",
"assets/resource/images/3.0x/bg_item_house_special.png": "5c1d75f1023f555278242f4565db8631",
"assets/resource/images/3.0x/dev_document_excel.png": "ec98b598da7084625e7cff99a3f034d6",
"assets/resource/images/3.0x/dev_document_png.png": "78a90286d8b29946de1ff99007e407b9",
"assets/resource/images/3.0x/dev_detail_dingyue.png": "09d9cf0260446a2d035e49938f3261d2",
"assets/resource/images/3.0x/dev_detail_online_selhouse.png": "870e6da82e39bdcd39cfeaa203c59976",
"assets/resource/images/3.0x/dev_document_jpg.png": "2cdd41e046c1be3355fdae75387de1bf",
"assets/resource/images/3.0x/dev_detail_yuyuekanfang.png": "ef8df9d984e3e5d3ec674299922111f0",
"assets/resource/images/3.0x/dev_document_pdf.png": "51e941a083c6c13e37212d559ab96f6e",
"assets/resource/images/3.0x/dev_document_ppt.png": "38e08ff720e9d27b9742c6464f07ea03",
"assets/resource/images/3.0x/icon_item_vr.png": "832339a609345d252f412aa90700f4e1",
"assets/resource/images/3.0x/default_icon.png": "45b6f055788eb1d6c07f112dc07e0295",
"assets/resource/images/3.0x/dev_detail_comment_nor.png": "e59e7d1a9cde21fe0cfc1a3edd7f9996",
"assets/resource/images/3.0x/1.png": "26ba67ba2758f52cc574c10ab0152b95",
"assets/resource/images/dev_document_png.png": "a29f47a22939633d1c20f83ad9d9ddc8",
"assets/resource/images/dev_detail_dingyue.png": "39540c18d3a42d452278472631e89db5",
"assets/resource/images/dev_detail_online_selhouse.png": "51fa99ee565b2439c484ef3825a28127",
"assets/resource/images/icon_dev_name.png": "fd3a6ede24f408745b828e3a7e3b1914",
"assets/resource/images/icon_like.png": "87cb8743a186e1b0bd016029ad684ec0",
"assets/resource/images/dev_document_jpg.png": "359491ef3f539a221d0260f9a7606869",
"assets/resource/images/dev_detail_yuyuekanfang.png": "9a9146f22257a2ccccfda81145a58f26",
"assets/resource/images/vr_icon.png": "4a409b160b3685085105629c6415bde2",
"assets/resource/images/bg_bottom.png": "11e169412e31b375ab91707a154ddabe",
"assets/resource/images/dev_document_pdf.png": "89ceb44932f45829fa2414d0ff6ab9ea",
"assets/resource/images/dev_document_ppt.png": "16a097aac95d29b466e12b86cb198417",
"assets/resource/images/icon_item_vr.png": "30c6c81408e29dc1fdd9b2c1bbd3b130",
"assets/resource/images/have_already_collected.png": "5f96c5a3a0bb4e2dbb53cd6d84e9b863",
"assets/resource/images/shape_bg_btn_vr.png": "7057ace1f88d012237c422347fba2702",
"assets/resource/images/default_icon.png": "ca4cd48bbf9ccafb25759e7e5884fea5",
"assets/resource/images/dev_detail_comment_nor.png": "04f6848f3779acca705b9922551d7186",
"assets/resource/images/1.png": "26ba67ba2758f52cc574c10ab0152b95",
"assets/resource/images/bg_two.png": "2f9d8acbb5e7c9d6e85c51f6d90cee64",
"assets/resource/images/icon_video3.png": "14c011ac8d70a42937f8ac719e8c181d",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
