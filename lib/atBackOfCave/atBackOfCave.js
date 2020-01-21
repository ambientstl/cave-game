import { masterMap } from "../createMaps";

export default function atBackOfCave(state) {
  let cave = state.Player.position.currentMap.cave;
  let mapIndex = masterMap.caves[cave].indexOf(
    state.Player.position.currentMap
  );
  if (
    mapIndex + 1 === masterMap.caves[cave].length &&
    state.Player.position.currentPosition ===
      state.Player.position.currentMap.length
  ) {
    return true;
  }
  return false;
}
