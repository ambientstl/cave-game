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

export default function move(state, back = false) {
  if (updatePositionAndCheckChangeMap(state, back)) {
    if (checkForBoundaryAndUpdateCurrentMap(state, back)) {
      // reached boundary
      return false;
    }
    return true;
  }
  return true;
}
