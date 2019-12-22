// necessary to import masterMap here?
import { default as masterMap } from "../createMaps";
import { default as updateGameText } from "../updateGameText";

function inCave(state) {
  if (state.Position.currentMap.cave) {
    return true;
  }
  return false;
}

function atBackOfCave(state) {
  let cave = state.Position.currentMap.cave;
  let mapIndex = masterMap[cave].indexOf(state.Position.currentMap);
  if (mapIndex + 1 === masterMap[cave].length) {
    return true;
  }
  return false;
}

function atStartOfMap(state) {
  if (state.Position.currentMap === masterMap.entrance) {
    return true;
  }
  return false;
}

function checkForBoundary(state, back = false) {
  // moving forward
  if (!back) {
    // if in cave AND at last map in cave,
    if (inCave(state) && atBackOfCave(state)) {
      // return true, boundary found
      return true;
    }
  } else {
    // false, no boundary found
    return false;
  }
  // moving back
  // if at start of masterMap
  if (atStartOfMap(state)) {
    // return true, boundary found
    return true;
  }
  // return false, no boundary found
  return false;
}

function checkChangeMap(state, back = false) {
  if (!back) {
    if (state.Position.currentPosition >= state.Position.currentMap.length) {
      return true;
    }
    return false;
  }
  if (state.Position.currentPosition === 1) {
    return true;
  }
  return false;
}

function updatePosition(state, back = false) {
  if (!back) {
    state.Position.currentPosition += 1;
    return true;
  }
  state.Position.currentPosition -= 1;
  return true;
}

function changeMapAndUpdatePosition(state, back = false) {
  let cave = state.Position.currentMap.cave;
  let mapIndex = masterMap.caves[cave].indexOf(state.currentMap);
  if (!back) {
    state.Position.currentMap = masterMap[cave][mapIndex + 1];
    state.Position.currentPosition = 1;
    return true;
  }
  if (!mapIndex) {
    state.Position.currentMap = masterMap.entrance;
    state.Position.currentPosition = 1;
    return true;
  }
  state.Position.currentMap = masterMap.caves[cave][mapIndex - 1];
  state.Position.currentPosition = 1;
  return true;
}

export default function move(state, back = false) {
  if (checkForBoundary(state, back)) {
    updateGameText(
      state,
      `A boundary prevents you from moving ${back ? "back" : "forward"}`
    );
    return false;
  }
  if (checkChangeMap(state, back)) {
    changeMapAndUpdatePosition(state, back);
    return true;
  }
  updatePosition(state, back);
  return true;
}
