import { atBackOfCave } from "../atBackOfCave";

export default function checkForEnemy(state) {
  let random = Math.random();
  if (
    state.Player.position.currentMap.enemy.spawnRate > random &&
    state.Player.position.currentMap.enemy.spawnRate < 1
  ) {
    return true;
  }
  return checkForBoss(state);
}

function checkForBoss(st) {
  console.log("checkForBoss: atBackOfCave", atBackOfCave(st));
  console.log(
    "checkForBoss:",
    st.Player.position.currentMap.enemy.spawnRate > 1 && atBackOfCave(st)
  );
  return st.Player.position.currentMap.enemy.spawnRate > 1 && atBackOfCave(st)
    ? true
    : false;
}
