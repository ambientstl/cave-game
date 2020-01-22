import { atBackOfCave } from "../atBackOfCave";

export default function checkForEnemy(state) {
  let random = Math.random();
  console.log(
    "checkForEnemy: spawnRate",
    state.Player.position.currentMap.enemy.spawnRate
  );
  console.log("checkForEnemy: atBackOfCave", atBackOfCave(state));
  console.log("random", random);
  console.log(
    "checkForEnemy: 1st if",
    state.Player.position.currentMap.enemy.spawnRate > random
  );
  console.log(
    "checkForEnemy: 2nd if",
    state.Player.position.currentMap.enemy.spawnRate > 1 && atBackOfCave(state)
  );

  if (state.Player.position.currentMap.enemy.spawnRate > random) {
    if (
      state.Player.position.currentMap.enemy.spawnRate > 1 &&
      atBackOfCave(state)
    ) {
      return true;
    }
    return true;
  }
  return false;
}
