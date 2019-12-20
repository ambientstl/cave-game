function getButtonRow() {
  return document.querySelector(".button-row");
}

function clearButtonRow() {
  getButtonRow().innerHTML = "";
  return true;
}

function updateButtonRow(mainAction) {
  clearButtonRow();
  if (mainAction === "moving") {
    getButtonRow().innerHTML = `
    <button type="button" class="btn-1">Examine</button>
    <button type="button" class="btn-2">Items</button>
    <button type="button" class="btn-3"></button>`;
    // TODO:
    // if item at current position, add item text to button 3 and add event listener
    // if no item, disable/hide button 3
    return true;
  } else if (mainAction == "fighting") {
    getButtonRow().innerHTML = `
    <button type="button" class="btn-1">Run</button>
    <button type="button" class="btn-2">Items</button>
    <button type="button" class="btn-3">Attack</button>`;
    return true;
  } else {
    return false;
  }
}

function updatePlayerHp(player, hpChange, maxHp = false) {
  if (maxHp && maxHp != "hp") {
    player.hp += hpChange;
    player.maxHp += hpChange;
    limitHp(player);
    return true;
  }
  player.hp += hpChange;
  limitHp(player);
  return true;
}

function limitHpAndCheckDeath(player) {
  if (player.hp > player.maxHp) {
    player.hp = player.maxHp;
    return true;
  } else if (player.hp <= 0) {
    player.hp = 0;
    return false;
  } else {
    return true;
  }
}

function checkForBoundaryAndUpdateCurrentMap(state, back = false) {
  // something like...
  if (!back) {
    let cave = state.currentMap.cave;
    let mapIndex = mapStructure[cave].indexOf(state.currentMap);
    // if in cave and at last map
    if (
      state.currentMap.cave > 0 &&
      mapIndex === mapStructure[cave].length - 1
    ) {
      return true;
    }
    state.currentMap = mapStructure[cave][mapIndex + 1];
    return false;
  }

  // if back = true,
  // state.currentPosition = state.currentMap.length
  // true if at entrance
  //  false if ...[mapIndex - 1]
}

function updatePositionAndCheckChangeMap(state, back = false) {
  if (!back) {
    if (state.currentPosition >= state.currentMap.length) {
      state.currentPosition = 1;
      return true;
    }
    state.currentPosition += 1;
    return false;
  }
  if (state.currentPosition <= 1) {
    return true;
  }
  state.currentPosition -= 1;
  return false;
}

function move(state, back = false) {
  if (updatePositionAndCheckChangeMap(state, back)) {
    if (checkForBoundaryAndUpdateCurrentMap(state, back)) {
      // reached boundary
      return false;
    }
    return true;
  }
  return true;
}
