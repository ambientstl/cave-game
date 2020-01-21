// necessary to import masterMap here?
import { masterMap } from "../createMaps";
import { updateGameText } from "../updateGameText";
import { moveIntoCave } from "../moveIntoCave";
import { atBackOfCave } from "../atBackOfCave";

function inCave(state) {
  if (state.Player.position.currentMap.cave) {
    return true;
  }
  return false;
}

function atStartOfMap(state) {
  if (state.Player.position.currentMap === masterMap.entrance) {
    return true;
  }
  return false;
}

function checkForBoundary(state, back = false) {
  // moving forward
  if (!back) {
    // if in cave AND at last map in cave,
    if (
      inCave(state) &&
      (atBackOfCave(state) ||
        (state.Player.position.currentMap.id === "caveThreeFrontRoom" &&
          state.Player.position.currentPosition === 3))
    ) {
      // return true, boundary found
      return true;
    }
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
    if (
      state.Player.position.currentPosition >=
      state.Player.position.currentMap.length
    ) {
      return true;
    }
    return false;
  }
  if (state.Player.position.currentPosition === 1) {
    return true;
  }
  return false;
}

function updatePosition(state, back = false) {
  if (!back) {
    state.Player.position.currentPosition += 1;
    return true;
  }
  state.Player.position.currentPosition -= 1;
  return true;
}

function changeMapAndUpdatePosition(state, back = false) {
  let cave = state.Player.position.currentMap.cave;
  if (!cave) {
    moveIntoCave(state, 1);
    return true;
  }
  if (cave === "hidden") {
    if (!back) {
      state.Player.position.currentMap =
        state.Player.position.currentMap.endingMap;
      state.Player.position.currentPosition = 2;
      return true;
    }
    state.Player.position.currentMap =
      state.Player.position.currentMap.startingMap;
    state.Player.position.currentPosition =
      state.Player.position.currentMap.length;
    return true;
  }
  let mapIndex = masterMap.caves[cave].indexOf(
    state.Player.position.currentMap
  );
  if (!back) {
    state.Player.position.currentMap = masterMap.caves[cave][mapIndex + 1];
    state.Player.position.currentPosition = 1;
    return true;
  }
  if (!mapIndex) {
    state.Player.position.currentMap = masterMap.entrance;
    state.Player.position.currentPosition = 1;
    return true;
  }
  state.Player.position.currentMap = masterMap.caves[cave][mapIndex - 1];
  state.Player.position.currentPosition =
    state.Player.position.currentMap.length;
  return true;
}

export default function move(state, back = false) {
  console.log("move", state);
  if (!(state.Player.position.currentMap.cave === "hidden")) {
    if (checkForBoundary(state, back)) {
      updateGameText(
        state,
        `A boundary prevents you from moving ${back ? "back" : "forward"}`
      );
      return false;
    }
  }
  if (checkChangeMap(state, back)) {
    changeMapAndUpdatePosition(state, back);
    return true;
  }
  updatePosition(state, back);
  return true;
}
