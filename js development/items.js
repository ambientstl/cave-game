// example player object with equip slots and take()
let player = {
  name: "Player1",
  HP: 10,
  items: [],
  equip: {
    weapon: null,
    armor: {
      helmet: null,
      shield: null,
      armor: null,
      amulet: null
    }
  },
  currentPosition: { X: 1, Y: 1 },
  take: function() {
    checkForItem();
  }
};

// check for item
function checkForItem() {
  // if player position matches item position
  if (
    player.currentPosition.X === currentMap.item.position[0] &&
    player.currentPosition.Y === currentMap.item.position[1]
  ) {
    // check item type and add to player object
    checkAndAddItem(currentMap.item.item);
  } else {
    // if no item at player position
    console.log(`There's nothing to take here.`);
  }
}

// check item type and add to player object
function checkAndAddItem(item) {
  console.log(`${player.name} takes the ${item.name}.`);
  // check if item is a weapon, add to player's weapon list
  if (allWeapons.includes(item)) {
    player.equip.weapon.push(item);
  } else if (allArmor.includes(item)) {
    // check if item is armor, add to player's armor
    player.equip.armor[item.name] = item;
    player.HP += item.bonus;
  } else {
    // else, add to player's items
    player.items.push(item);
  }
}

// ITEM
// example item object
const helmet = {
  name: "helmet",
  bonus: 5
};

// example weapons, and armor lists
const allWeapons = [];
const allArmor = [helmet];

// FROM MOVEMENT.JS ( TO 166 )
// MAPS
// example map object
// with item property
const caveOneCorridorFront = {
  name: "Cave One: Front Corridor",
  description:
    "A corridor. BATS flutter and squeak above you; there is half-eaten FRUIT on the ground.",
  dimensions: { X: 5, Y: 1 },
  enemy: "BAT",
  item: {
    position: [4, 1],
    item: helmet
  },
  connectedTo: { back: null },
  doors: { front: [1, 1], back: [5, 1] }
};

const caveOneCavernFront = {
  name: "Cave One: Front Cavern",
  description:
    "A cavernous room. A CAULDRON bubbles to the right; squeaking from bats echoes all around.",
  dimensions: { X: 3, Y: 1 },
  connectedTo: { front: null, back: null },
  doors: { front: [1, 1], back: [3, 1] }
};

const caveOneCorridorBack = {
  name: "Cave One: Back Corridor",
  description:
    "A short corridor. BATS flutter and squeak above you; there is half-eaten FRUIT on the ground.",
  dimensions: { X: 2, Y: 1 },
  enemy: "BAT",
  connectedTo: { front: null, back: null },
  doors: { front: [1, 1], back: [2, 1] }
};

const caveOneCavernBack = {
  name: "Cave One: Back Cavern",
  description:
    "A cavernous room. A BEAR sleeps against the wall across from you; squeaking from bats echoes all around.",
  dimensions: { X: 2, Y: 1 },
  enemy: "BEAR",
  connectedTo: { front: null },
  doors: { front: [1, 1] }
};

// MAP CONNECTIONS
function connectMap() {
  caveOneCorridorFront.connectedTo.back = caveOneCavernFront;

  caveOneCavernFront.connectedTo.front = caveOneCorridorFront;
  caveOneCavernFront.connectedTo.back = caveOneCorridorBack;

  caveOneCorridorBack.connectedTo.front = caveOneCavernFront;
  caveOneCorridorBack.connectedTo.back = caveOneCavernBack;

  caveOneCavernBack.connectedTo.front = caveOneCorridorBack;
}
connectMap();

// MOVEMENTS
function enterNextMap(map) {
  currentMap = map.connectedTo.back;
  console.log(`Entered ${currentMap.name}.`);
  player.currentPosition = { X: 1, Y: 1 };
  console.log(currentMap.description);
}

function backToMap(map) {
  currentMap = map.connectedTo.front;
  console.log(`Entered ${currentMap.name}.`);
  player.currentPosition = {
    X: currentMap.doors.back[0],
    Y: currentMap.doors.back[1]
  };
  console.log(currentMap.description);
}

function forward(map) {
  if (player.currentPosition.X < map.dimensions.X) {
    player.currentPosition.X += 1;
  } else if (
    player.currentPosition.X >= map.dimensions.X &&
    player.currentPosition.Y === map.doors.back[1]
  ) {
    enterNextMap(map);
  } else {
    console.log("A cave wall prevents you from moving forward.");
  }
}

function back(map) {
  if (player.currentPosition.X > 1) {
    player.currentPosition.X -= 1;
  } else if (
    player.currentPosition.X <= 1 &&
    player.currentPosition.Y === map.doors.front[1]
  ) {
    backToMap(map);
  } else {
    console.log("A cave wall prevents you from moving backward.");
  }
}
// end from movement.js

// set current map
let currentMap = caveOneCorridorFront;
// log player with no item
console.log(player);
forward(currentMap);
// attempt to take item, with no item
player.take();
forward(currentMap);
forward(currentMap);
forward(currentMap);
back(currentMap);
// take item, with item
player.take();
// log player with item equipped
console.log(player);
