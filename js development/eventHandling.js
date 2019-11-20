// map function constructor
function Map(name, description, length) {
  this.name = name;
  this.description = description;
  this.length = length;
}

// testing map function constructor
// new map object
const caveEntrance = new Map("Caves Entrance", "Three cave entrances.", 1);
console.log(caveEntrance);

// const caveEntrance = {
//   name: "Caves Entrance",
//   description: "You stand before three cave entrances.",
//   length: 1,
//   nextMap: null
// };

// old example map objects
// dimensions simplified to length
const caveOneCorridorFront = {
  name: "Cave One: Front Corridor",
  description:
    "A corridor. BATS flutter and squeak above you; there is half-eaten FRUIT on the ground.",
  length: 5,
  enemy: "BAT",
  cave: 1
};
const caveOneCavernFront = {
  name: "Cave One: Front Cavern",
  length: 3,
  cave: 1
};

// attempt at checking for next map
// & attempt to check player position

// let currentMap = caveEntrance;

// function checkForNextMap(direction) {
//   if (direction === "forward") {
//     if (currentMap.nextMap) {
//       return currentMap.nextMap; // ?
//     } else {
//       return "A cave wall prevents you from moving forward.";
//     }
//   } else if (direction === "back") {
//     if (currentMap.previousMap) {
//       return currentMap.previousMap; // ?
//     } else {
//       return "A dense forest prevents you form moving back.";
//     }
//   }
// }

// function checkPlayerPosition(direction) {
//   if (direction === "forward") {
//     if (player.position === player.map.length) {
//       checkForNextMap(direction);
//     }
//   }
// }


// attempt at move function
function movePlayer(direction) {
  // check direction (forward)
  if (direction === "forward") {
    // if player position is at end of map
    if (player.position === player.map.length) {
      // check for next map
      if (player.map.nextMap) {
        // move to next map
        console.log(`Moving to next map: ${player.map.nextMap.name}`);
        // update text area in html with message
        document.querySelector(
          ".text-area"
        ).innerHTML = `Moving to next map: ${player.map.nextMap.name}`;
        // set current map for player
        player.map = player.map.nextMap;
        // reset player position to start of map
        player.position = 1;
      } else {
        // if there is no nextMap
        console.log("A cave wall prevents you from moving forward.");
        // update text area in html with message
        document.querySelector(".text-area").innerHTML =
          "A cave wall prevents you from moving forward.";
      }
    } else {
      // else (if player within map) increase player position
      player.position += 1;
    }
    //check direction (back)
  } else if (direction === "back") {
    // check for previous map
    console.log(player.map.previousMap);
    if (player.map.previousMap) {
      // if player at beginning of map
      if (player.position === 1) {
        // move to previous map
        console.log(`Moving to previous map: ${player.map.previousMap.name}`);
        // update text area of html with message
        document.querySelector(
          ".text-area"
        ).innerHTML = `Moving to previous map: ${player.map.previousMap.name}`;
        // update player's current map
        player.map = player.map.previousMap;
        // reset player position to end of map
        player.position = player.map.length;
      } else {
        // if there is no previousMap
        console.log("A dense forest prevents you from moving back.");
        // update text area in html
        document.querySelector(".text-area").innerHTML =
          "A dense forest prevents you from moving back.";
      }
    } else {
      // else (player is within map) decrease player position
      player.position -= 1;
    }
  }
}

// player object with current map as property
// position simplified to single number
const player = {
  name: "player1",
  position: 1,
  map: caveEntrance
};

console.log(player);

// attempt at a map object as 'map of maps' for map connections,
// hidden maps, and current map
const mapObject = {
  start: caveEntrance,
  caves: {
    1: [
      caveOneCorridorFront,
      caveOneCavernFront,
      caveOneCorridorBack,
      // Bear Den
      caveOneCavernBack
    ],
    2: [
      caveTwoCorridorFront,
      caveTwoCavernFront,
      caveTwoCorridorBack,
      // Witch Den
      caveTwoCavernBack
    ],
    3: [
      caveThreeCorridorFront,
      caveThreeCavernFront,
      caveThreeCorridorBack,
      // Dragon Den
      caveThreeCavernBack
    ]
  },
  hidden: [hiddenPassage1, hiddenPassage2],
  current: caveEntrance
};

// check movement, map, and position for boundary/dead end
// returns false if player cannot proceed, true if player can proceed
function checkForBoundary(direction, position, map) {
  // if moving back
  if (direction === "back") {
    // if located at 'start' of map, return false
    if (map === caveEntrance && position === 1) {
      return false;
    }
    // all other locations can move backwards, return true
    return true;
    // if moving forward
  } else if (direction === "forward") {
    if (
      // if located at back map (and back of map) of cave 1 or 2
      // return false, dead end
      (map === "caveOneCavernBack" || map === "caveTwoCavernBack") &&
      position === map.length
    ) {
      return false;
    }
    // all other positions can move forward, return true
    return true;
  }
}

// update current map and player position
// ((use after checking for boundaries))
// returns array of current(post-move) map object and position
function updateMapAndPosition(direction, position, map) {
  if (
    // if returning to cave entrance from beginning of cave's front corridor
    direction === "back" &&
    position === 1 &&
    map ===
      (caveOneCorridorFront || caveTwoCorridorFront || caveThreeCorridorFront)
  ) {
    // return array to update map and position
    return [caveEntrance, 1];
  } else if (
    // if returning to a previous map within a cave (any map except front corridor)
    direction === "back" &&
    position === 1 &&
    map !==
      (caveOneCorridorFront || caveTwoCorridorFront || caveThreeCorridorFront)
  ) {
    // get current cave number
    let caveNum = map.cave;
    // lookup current map index to get previous index
    let nextIndex = mapObject.caves[caveNum].indexOf(map) - 1;
    // set new current map
    let newMap = mapObject.caves[caveNum][nextIndex];
    // return array of updated position and map
    return [newMap, newMap.length];
  } else if (direction === "forward" && position === map.length) {
    // if continuing to the next map
    // TODO: handle caveEntrance exception (send to cave 1)
    // get current cave number
    let caveNum = map.cave;
    // lookup current map index to get next map index
    let nextIndex = mapObject.caves[caveNum].indexOf(map) + 1;
    // set new current map
    let newMap = mapObject.caves[caveNum][nextIndex];
    // return array of updated position and map
    return [newMap, newMap.length];
    //  else (within map, not at beginning or end)
  } else {
    // if advancing, add to current position
    if (direction === "forward") {
      return [map, player.position + 1];
      // if retreating, subtract from current position
    } else if (direction === "back") {
      return [map, player.position - 1];
    }
  }
}

// move forward function to link to forward button in html
// uses boundary check and update map and position functions
// returns true if move successful, false if unsuccessful
function moveForward(position, map) {
  // if player can move forward (no dead ends),
  if (checkForBoundary("forward", position, map)) {
    // get next map and position
    let mapAndPosition = updateMapAndPosition("forward", position, map);
    // set current map
    mapObject.current = mapAndPosition[0];
    // set current position
    player.position = mapAndPosition[1];
    // player moved forward, return true
    return true;
  }
  // else (player cannot move forward), return false
  return false;
}

// move back function, link to back button in html
// uses boundary check and update map and position functions
// returns true if move successful, false if unsuccessful
function moveBack(position, map) {
  // if player can move back (no dead end)
  if (checkForBoundary("back", position, map)) {
    // get next map and position
    let mapAndPosition = updateMapAndPosition("back", position, map);
    // set current map
    mapObject.current = mapAndPosition[0];
    // set current position
    player.position = mapAndPosition[1];
    // player moved back, return true
    return true;
  }
  // else (player cannot move back), return false
  return false;
}

// pseudo-code for enemy check (post move, pre button update)
// returns true if enemy attacks, false if no attack
function checkForEnemy(enemy) {
  // if random number < enemy.attackRate
  if () {
    // true (enemy attacks)
    return ;
  }
  // else, false (no attack)
  return ;
}

// attempt item object to map locations of all items
// and provide text and function for html button 3
const itemObj = {
  // this map has a stick
  caveEntrance: {
    1: {
      item: stick,
      name: "stick",
      buttonText: "Pick up Stick",
      action: // some function that puts stick in inventory
    }
  },
  // each position in this map had fruit available
  caveOneCorridorFront: {
    1: {
      item: fruit,
      name: "fruit",
      buttonText: "Eat Fruit",
      action: // some function to heal/eat fruit
    },
    2: {
      item: fruit,
      name: "fruit",
      buttonText: "Eat Fruit",
      action: // some function to heal/eat fruit
    },
    3: {
      item: fruit,
      name: "fruit",
      buttonText: "Eat Fruit",
      action: // some function to heal/eat fruit
    },
    4: {
      item: fruit,
      name: "fruit",
      buttonText: "Eat Fruit",
      action: // some function to heal/eat fruit
    },
    // this is a hidden item to be exposed after eating the fruit at this position
    hidden4: {
      item: helmet,
      name: "helmet",
      buttonText: "Take Helmet",
      action: // some function to equip helmet
    },
    5: {
      item: fruit,
      name: "fruit",
      buttonText: "Eat Fruit",
      action: // some function to heal/eat fruit
    }
  }
}

// pseudo-code for updating button row in html
// after moving player and checking for enemy attack
function updateButtonRow(position, map) {
  // check item object/map for item at current position
  // checkForItem(pos, map)

  // if item, update button 3 with item info & action
  // return item(?)

  // else hide button(?)
  return ;
}

// pseudo-code for checking for item at current position
// for use in update button row
function checkForItem(position, map) {
  // if item map/object has current position
  // if (itemPositions[map][position])
  // set position's item
  // let item = itemPositions.map.position.item
  // return item
  return ;
}

// movement buttons:
//// - check if player can move that direction   (checkBoundaries())
//// - move player 1 space forward/back   (movePlayer(direction))
// - check for enemy(?)          (checkForEnemy(map))
//// - if player moves past current map, update current map     (updateMap(direction))
// - update button row: check for items/action           (updateButtonRow(map, position),

// checkForItems/Action(map, position))

// event listener for forward button
document.querySelector(".forward-btn").addEventListener("click", function() {
  // if player moves forward (can move forward),
  if (moveForward(player.position, mapObject.current)) {
    // check for enemy attack
      // if true, startFight(), else pass/continue
    // update button row
    // timeout event listener and style button as 'pressed'
    return; // ?
  }
  // if player cannot move forward
  // TODO: update text area with dead end message (in check boundary function?)

});

// event listener for back button
document.querySelector(".back-btn").addEventListener("click", function() {
  // if player moves back (can move back)
  if (moveBack(player.position, mapObject.current)) {
    // check for enemy attack
    // update button row
    // timeout event listener, style button as 'pressed'
    return; // ?
  }
  // if player cannot move back
  // TODO: update text area with dead end message (in check boundary function?)

});

// pseudo-code for button row possibilities
// button row:
// - button 1: EXAMINE
//    - print current map description   (describeMap(map))
// - button 1: RUN
//    - calc run success      (calcRunSuccess())
//    - if run successful, print successful run message & return to current map   (run(success), exitScreen(map, position))
//    - else, print unsuccessful run message & enemy attacks    (run(fail), enemyAttack(enemy))
// - button 2: ITEMS
//    - show item menu        (displayItems())
//    - button row: <EXAMINE>, <BACK>, <USE>
//        - EXAMINE: print item description     (describeItem(item))
//        - BACK: return to current map       (exitScreen(map, position))
//        - USE: decrease item count by 1, apply item effects     (useItem(item))
// - button 3: ACTION
//    - interact with map position      (action(position))
//    - update button row: add/remove action button     (updateButtonRow(map, position, used/item?))
//    - apply map position/action effects       (action(position))
// - button 3: ATTACK
//    - calc accuracy/damage      (calcAccuracy(), calcDamage())
//    - if accurate, calc enemy evasion       (calcEvasion(enemy))
//    - if enemy evades, print evasion message        (evade(enemy))
//    - else, print attack message, subtract damage from enemy, update button row       (playerAttack(enemy), damageEnemy(enemy), updateButtonRow(map, position, enemy?))

// event listeners for button row
document.querySelector(".btn-1").addEventListener("click", function() {
  alert("Button 1 was clicked.");
});

document.querySelector(".btn-2").addEventListener("click", function() {
  alert("Button 2 was clicked.");
});

document.querySelector(".btn-3").addEventListener("click", function() {
  alert("Button 3 was clicked.");
});
