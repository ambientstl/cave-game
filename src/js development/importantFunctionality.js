// refactored from eventHandling.js

// BOUNDARIES: CHECKED
// check movement, map, and position for boundary/dead end
// arguments: "back"/"forward", player.currentPosition, player.currentMap
// returns false if player cannot proceed, true if player can proceed
function checkForBoundary(direction, position, map) {
  // if moving back
  if (direction === "back") {
    // if located at 'start' of map, return false
    if (map.id === "threeEntrances" && position === 1) {
      return false;
    }
    // all other locations can move backwards, return true
    return true;
    // if moving forward
  } else if (direction === "forward") {
    if (
      // if located at back map (and back of map) of cave 1 or 2
      // return false, dead end
      (map.id === "caveOneFrontCavern" || map.id === "caveTwoFrontCorridor") &&
      position === map.length
    ) {
      return false;
    }
    // all other positions can move forward, return true
    return true;
  }
}

// POSITION AND MAP: CHECKED
// ((use after checking for boundaries))
// arguments: "back"/"forward", player.currentPosition, player.currentMap
// returns array of post-move, current map object and position
function updateMapAndPosition(direction, position, map) {
  if (
    // BACK TO ENTRANCE
    // if returning to cave entrance from beginning of cave's front corridor
    direction === "back" &&
    position === 1 &&
    map.id === ("caveOneFrontCorridor" || "caveTwoFrontCorridor")
  ) {
    // return array to update map and position
    console.log([threeEntrances, 1]);
    return [threeEntrances, 1];
  } else if (
    // BACK TO NEW MAP IN CAVES
    // if returning to a previous map within a cave (any map except front corridor)
    direction === "back" &&
    position === 1 &&
    map.id !== ("caveOneCorridorFront" || "caveTwoCorridorFront")
  ) {
    // get current cave number
    let caveNum = map.cave;
    // lookup current map index to get previous index
    let nextIndex = mapMap.caves[caveNum].indexOf(map) - 1;
    // set new current map
    let newMap = mapMap.caves[caveNum][nextIndex];
    // return array of updated position and map
    console.log([newMap, newMap.length]);
    return [newMap, newMap.length];
  } else if (direction === "forward" && position === map.length) {
    // FORWARD TO NEXT MAP INSIDE CAVE
    // if continuing to the next map from inside a cave
    if (!(map.id === "threeEntrances")) {
      // get current cave number
      let caveNum = map.cave;
      // lookup current map index to get next map index
      let nextIndex = mapMap.caves[caveNum].indexOf(map) + 1;
      // set new current map
      let newMap = mapMap.caves[caveNum][nextIndex];
      // return array of updated position and map
      console.log([newMap, 1]);
      return [newMap, 1];
    } else if (map.id === "threeEntrances") {
      // FORWARD TO NEXT MAP FROM ENTRANCE
      // else (if moving forward from threeEntrances),
      // move to cave one by default
      console.log([caveOneFrontCorridor, 1]);
      return [caveOneFrontCorridor, 1];
    }
  } else {
    //  else (within map, not at beginning or end)
    // if advancing, add to current position
    if (direction === "forward") {
      // FORWARD WITHIN MAP
      console.log([map, player.currentPosition + 1]);
      return [map, player.currentPosition + 1];
      // if retreating, subtract from current position
    } else if (direction === "back") {
      // BACK WITHIN MAP
      console.log([map, player.currentPosition - 1]);
      return [map, player.currentPosition - 1];
    }
  }
}

// (TRY TO) MOVE FORWARD: CHECKED
// move forward function to link to forward button in html
// uses boundary check and update map and position functions
// returns true if move successful, false if unsuccessful
function moveForward(position, map) {
  // if player can move forward (no dead ends),
  if (checkForBoundary("forward", position, map)) {
    // get next map and position
    let mapAndPosition = updateMapAndPosition("forward", position, map);
    // set current map
    player.currentMap = mapAndPosition[0];
    // set current position
    player.currentPosition = mapAndPosition[1];
    // player moved forward, return true
    return true;
  }
  // else (player cannot move forward), return false
  return false;
}

// (TRY TO) MOVE BACK: CHECKED
// move back function, link to back button in html
// uses boundary check and update map and position functions
// returns true if move successful, false if unsuccessful
function moveBack(position, map) {
  // if player can move back (no dead end)
  if (checkForBoundary("back", position, map)) {
    // get next map and position
    let mapAndPosition = updateMapAndPosition("back", position, map);
    // set current map
    player.currentMap = mapAndPosition[0];
    // set current position
    player.currentPosition = mapAndPosition[1];
    // player moved back, return true
    return true;
  }
  // else (player cannot move back), return false
  return false;
}

// CHECK FOR ITEM at now-current position
// for use in update button row
// return item object or false
function checkForItem(position, map) {
  // if item map/object has current position
  if (itemMap[map.id][position - 1]) {
    // set position's item
    let positionItem = itemMap[map.id][position - 1];
    // return item
    return positionItem;
  }
  // if no item at current position, hide btn-3
  document.querySelector(".btn-3").classList.add(".hidden-btn");
  return false;
}

const itemInteraction = function itemInteraction(item) {
  item.action();
  document.querySelector(".text-area").innerHTML = item.message;
  // remove/timeout item
  item.removeItem();
  document
    .querySelector(".btn-3")
    // remove event listener
    .removeEventListener("click", itemInteraction);
};

// FORWARD BUTTON
// event listener for forward button
document.querySelector(".forward-btn").addEventListener("click", function() {
  // if player can move forward, it does
  if (moveForward(player.currentPosition, player.currentMap)) {
    // TODO: check for enemy attack
    // if true, startFight(), else pass/continue
    // check for item
    let item = checkForItem(player.currentPosition, player.currentMap);
    console.log(item);
    // if check for item returns item
    if (item) {
      // if item, reveal button 3
      // ?? construct new button 3
      // ?? - remove old button & add new "clean" button, instead of hide/reveal
      document.querySelector(".btn-3").classList.toggle("hidden-btn", false);
      // update button text
      document.querySelector(".btn-3").innerHTML = item.buttonText;
      // add event listener
      document.querySelector(".btn-3").addEventListener("click", function() {
        console.log(document.querySelector(".btn-3"));
        // perform item action
        item.action();
        // print item message
        document.querySelector(".text-area").innerHTML = item.message;
        // remove/timeout item
        item.removeItem();
      });
    } else {
      // if no items, hide button 3
      document.querySelector(".btn-3").classList.toggle("hidden-btn", true);
    }
    // if no enemy & no item, continue
    // timeout event listener and style button as 'pressed'
    return;
  }
  // if player cannot move forward, print message
  document.querySelector(".text-area").innerHTML =
    "A cave wall prevents you from moving forward.";
});

// BACK BUTTON
// event listener for back button
document.querySelector(".back-btn").addEventListener("click", function() {
  // if player can move back, it does
  if (moveBack(player.currentPosition, player.currentMap)) {
    // TODO: check for enemy attack
    // if true, startFight(), else pass/continue

    // check for item
    let item = checkForItem(player.currentPosition, player.currentMap);
    // if check for item returns item,
    if (item) {
      // if item, reveal button 3
      document.querySelector(".btn-3").classList.toggle("hidden-btn", false);
      // update button text
      document.querySelector(".btn-3").innerHTML = item.buttonText;
      // add event listener
      document.querySelector(".btn-3").addEventListener("click", function() {
        // perform item action
        item.action();
        // print item message
        document.querySelector(".text-area").innerHTML = item.message;
        // remove/timeout item
        item.removeItem();
      });
    } else {
      // if no items, hide button 3
      document.querySelector(".btn-3").classList.toggle("hidden-btn");
    }
    // if no enemy & no item, continue

    // timeout event listener and style button as 'pressed'
    return;
  }
  // if player cannot move back, print message
  document.querySelector(".text-area").innerHTML =
    "A steep cliff prevents you from moving back.";
});
