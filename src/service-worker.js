var CACHE_NAME = "cave-game-cache";
const HTML_CONTENT_TYPE = "text/html";
const JSON_API_CONTENT_TYPE = "application/vnd.api+json";
const FONT_ORIGINS = [
  "https://fonts.gstatic.com",
  "https://fonts.googleapis.com"
];
var PRE_CACHED_ASSETS = [
  "/",
  "/install.js",
  "/index.html",
  "/index.js",
  "/components/ButtonRow.js",
  "/components/CenterSection.js",
  "/components/Frame.js",
  "/components/index.js",
  "/components/PlayerInfo.js",
  "/components/RightSection.js",
  "/components/views/EquipmentList.js",
  "/components/views/Image.js",
  "/components/views/index.js",
  "/components/views/ItemMenu.js",
  "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/enemies/bat.png",
  "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/enemies/bear-head.png",
  "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/enemies/grim-reaper.png",
  "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/enemies/haunting.png",
  "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/enemies/imp-laugh.png",
  "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/enemies/spectre.png",
  "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/enemies/spiked-dragon-head.png",
  "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/enemies/witch-face.png",
  "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/equip/amulet.png",
  "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/equip/axe.png",
  "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/equip/breastplate.png",
  "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/equip/gem-pendant.png",
  "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/equip/gloves.png",
  "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/equip/helmet.png",
  "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/equip/legs.png",
  "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/equip/mace.png",
  "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/equip/orb-wand.png",
  "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/equip/shield.png",
  "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/equip/sword.png",
  "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/equip/wood-stick.png",
  "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/gui/back.png",
  "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/gui/forward.png",
  "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/gui/health-normal.png",
  "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/gui/speaker-off.png",
  "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/gui/speaker.png",
  "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/gui/trophy-cup.png",
  "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/items/potion-ball.png",
  "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/items/shiny-apple.png",
  "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/items/square-bottle.png",
  "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/items/white-book.png",
  "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/map/cauldron.png",
  "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/map/cave-entrance.png",
  "/js development/bats.js",
  "/js development/eventHandling.js",
  "/js development/examine button.js",
  "/js development/importantFunctionality.js",
  "/js development/importantObjects.js",
  "/js development/item menu button.js",
  "/js development/items.js",
  "/js development/movement.js",
  "/js development/some-logic.js",
  "/lib/index.js",
  "/store/Buttons.js",
  "/store/GameText.js",
  "/store/index.js",
  "/store/MainScreen.js",
  "/store/Player.js"
];

function isNavigationRequest(event) {
  return event.request.mode === "navigate";
}

function isCachedAssetRequest(event) {
  let isSameOriginRequest = event.request.url.startsWith(self.location.origin);
  let isFontRequest = FONT_ORIGINS.some(origin =>
    event.request.url.startsWith(origin)
  );

  return !isNavigationRequest(event) && (isSameOriginRequest || isFontRequest);
}

function isHtmlRequest(event) {
  let isGetRequest = event.request.method === "GET";
  let isHTMLRequest = event.request.headers
    .get("accept")
    .startsWith(HTML_CONTENT_TYPE);

  return isNavigationRequest(event) || (isGetRequest && isHTMLRequest);
}

/* self.addEventListener("install", function(event) {
  let now = Date.now();
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      let cachePromises = PRE_CACHED_ASSETS.map(function(asset) {
        var url = new URL(asset, location.href);
        var request = new Request(url, { mode: "no-cors" });
        return fetch(request).then(function(response) {
          if (response.status >= 400) {
            throw new Error("prefetch failed!");
          }
          return cache.put(asset, response);
        });
      });

      return Promise.all(cachePromises);
    })
  );
}); */

self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        // delete old caches
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", function(event) {
  if (
    event.request.cache === "only-if-cached" &&
    event.request.mode !== "same-origin"
  ) {
    return;
  }

  if (isCachedAssetRequest(event)) {
    event.respondWith(
      caches.open(CACHE_NAME).then(function(cache) {
        return cache.match(event.request).then(function(response) {
          if (response) {
            return response;
          } else {
            return fetch(event.request.clone()).then(function(response) {
              let contentType = response.headers.get("content-type") || "";
              if (
                response.status < 400 &&
                !contentType.startsWith(JSON_API_CONTENT_TYPE)
              ) {
                cache.put(event.request, response.clone());
              }
              return response;
            });
          }
        });
      })
    );
  }
});

self.addEventListener("install", function(e) {
  console.log("[ServiceWorker] Install");
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log("[ServiceWorker] Caching app shell");
      return cache.addAll(PRE_CACHED_ASSETS);
    })
  );
}); /* */
