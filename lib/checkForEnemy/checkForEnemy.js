import { atBackOfCave } from "../atBackOfCave";

export default function checkForEnemy(state) {
  if (
    state.Player.position.currentMap.enemy.spawnRate > Math.random() &&
    state.Player.position.currentMap.enemy.spawnRate < 1
  ) {
    return true;
  }
  return checkForBoss(state);
}

function checkForBoss(st) {
  if (st.Player.position.currentMap.enemy.spawnRate > 1 && atBackOfCave(st)) {
    st.Player.position.currentMap.enemy.spawnRate = 0;
    return true;
  }
  if (
    st.Player.position.currentMap.enemy.spawnRate > 1 &&
    st.Player.position.currentMap.id === "caveThreeFrontRoom" &&
    st.Player.position.currentPosition === 2
  ) {
    st.Player.position.currentMap.enemy.spawnRate = 0;
    return true;
  }
  return false;
}
