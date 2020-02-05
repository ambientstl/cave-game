var cacheName = "shell-content";
var filesToCache = [
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
  "/images/enemies/bat.png",
  "/images/enemies/bear-head.png",
  "/images/enemies/grim-reaper.png",
  "/images/enemies/haunting.png",
  "/images/enemies/imp-laugh.png",
  "/images/enemies/spectre.png",
  "/images/enemies/spiked-dragon-head.png",
  "/images/enemies/witch-face.png",
  "/images/equip/amulet.png",
  "/images/equip/axe.png",
  "/images/equip/breastplate.png",
  "/images/equip/gem-pendant.png",
  "/images/equip/gloves.png",
  "/images/equip/helmet.png",
  "/images/equip/legs.png",
  "/images/equip/mace.png",
  "/images/equip/orb-wand.png",
  "/images/equip/shield.png",
  "/images/equip/sword.png",
  "/images/equip/wood-stick.png",
  "/images/gui/back.png",
  "/images/gui/forward.png",
  "/images/gui/health-normal.png",
  "/images/gui/speaker-off.png",
  "/images/gui/speaker.png",
  "/images/gui/trophy-cup.png",
  "/images/items/potion-ball.png",
  "/images/items/shiny-apple.png",
  "/images/items/square-bottle.png",
  "/images/items/white-book.png",
  "/images/map/cauldron.png",
  "/images/map/cave-entrance.png",
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

self.addEventListener("install", function(e) {
  console.log("[ServiceWorker] Install");
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log("[ServiceWorker] Caching app shell");
      return cache.addAll(filesToCache);
    })
  );
});
