// example player object with name, HP, items, & position
let player = {
  name: "Player1",
  HP: 10,
  items: [],
  currentPosition: { X: 1, Y: 1 }
};

// MAPS
// example map objects with name, description, dimensions, enemy, map connections, doors
const caveOneCorridorFront = {
  name: "Cave One: Front Corridor",
  description:
    "A corridor. BATS flutter and squeak above you; there is half-eaten FRUIT on the ground.",
  dimensions: { X: 5, Y: 1 },
  enemy: "BAT",
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
// must connect after declaration
caveOneCorridorFront.connectedTo.back = caveOneCavernFront;

caveOneCavernFront.connectedTo.front = caveOneCorridorFront;
caveOneCavernFront.connectedTo.back = caveOneCorridorBack;

caveOneCorridorBack.connectedTo.front = caveOneCavernFront;
caveOneCorridorBack.connectedTo.back = caveOneCavernBack;

caveOneCavernBack.connectedTo.front = caveOneCorridorBack;

// MOVEMENTS
// enter next map: map connected at back
// log message & description
// reset player position to front of map
function enterNextMap(map) {
  currentMap = map.connectedTo.back;
  console.log(`Entered ${currentMap.name}.`);
  console.log(currentMap.description);
  player.currentPosition = { X: 1, Y: 1 };
}

// back to map: map connected at front
// log message & description
// reset player position to back of map
function backToMap(map) {
  currentMap = map.connectedTo.front;
  console.log(`Entered ${currentMap.name}.`);
  console.log(currentMap.description);
  player.currentPosition = {
    X: currentMap.doors.back[0],
    Y: currentMap.doors.back[1]
  };
}

// move player forward
function forward(map) {
  // if room in map, move 1 space
  if (player.currentPosition.X < map.dimensions.X) {
    player.currentPosition.X += 1;
  } else if (
    // if player position matches door, enter next map
    player.currentPosition.X >= map.dimensions.X &&
    player.currentPosition.Y === map.doors.back[1]
  ) {
    enterNextMap(map);
  } else {
    // else, print dead end message
    console.log("A cave wall prevents you from moving forward.");
  }
}

// move player back
function back(map) {
  // if room in map, move back 1 space
  if (player.currentPosition.X > 1) {
    player.currentPosition.X -= 1;
  } else if (
    // if player position matches door, enter previous map
    player.currentPosition.X <= 1 &&
    player.currentPosition.Y === map.doors.front[1]
  ) {
    backToMap(map);
  } else {
    // else, print dead end message
    console.log("A cave wall prevents you from moving backward.");
  }
}

// TESTING
// set current map
let currentMap = caveOneCorridorFront;
// map object testing
console.log(currentMap.description);

// movement & map connection testing
console.log(player.currentPosition.X, player.currentPosition.Y);
forward(currentMap);
console.log(player.currentPosition.X, player.currentPosition.Y);
forward(currentMap);
console.log(player.currentPosition.X, player.currentPosition.Y);
forward(currentMap);
console.log(player.currentPosition.X, player.currentPosition.Y);
forward(currentMap);
console.log(player.currentPosition.X, player.currentPosition.Y);
forward(currentMap);
console.log(player.currentPosition.X, player.currentPosition.Y);
forward(currentMap);
console.log(player.currentPosition.X, player.currentPosition.Y);
forward(currentMap);
console.log(player.currentPosition.X, player.currentPosition.Y);
forward(currentMap);
console.log(player.currentPosition.X, player.currentPosition.Y);
forward(currentMap);
console.log(player.currentPosition.X, player.currentPosition.Y);
forward(currentMap);
console.log(player.currentPosition.X, player.currentPosition.Y);
back(currentMap);
console.log(player.currentPosition.X);
back(currentMap);
console.log(player.currentPosition.X);
back(currentMap);
console.log(player.currentPosition.X);
back(currentMap);
console.log(player.currentPosition.X);
back(currentMap);
console.log(player.currentPosition.X);
back(currentMap);
console.log(player.currentPosition.X);
back(currentMap);
console.log(player.currentPosition.X);
back(currentMap);
console.log(player.currentPosition.X);
back(currentMap);
console.log(player.currentPosition.X);
