import { atBackOfCave } from "../atBackOfCave";

export default function checkForEnemy(state) {
  console.log(
    "checkForEnemy: spawnRate",
    state.Player.position.currentMap.enemy.spawnRate
  );
  console.log("checkForEnemy: atBackOfCave", atBackOfCave(state));
  console.log(
    "checkForEnemy: 1st if",
    state.Player.position.currentMap.enemy.spawnRate > 1 && atBackOfCave(state)
  );

  return state.Player.position.currentMap.enemy.spawnRate > Math.random()
    ? state.Player.position.currentMap.enemy.spawnRate > 1 &&
      atBackOfCave(state)
      ? true
      : false
    : false;
}
