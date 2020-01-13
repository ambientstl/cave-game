import * as enemies from "../enemies";
import { enemyAttack } from "../enemyAttack";

const bossAreas = [
  "caveOneBackRoom",
  "caveTwoBackRoom",
  "caveThreeFrontRoom",
  "caveThreeBackRoom"
];

export default function checkForEnemy(state) {
  let random = Math.random();
  if (enemies.bat.location.includes(state.Player.position.currentMap.id)) {
    if (enemies.bat.attackRate >= random) {
      enemyAttack(state, enemies.bat);
      return true;
    }
    return false;
  }
  if (enemies.goblin.location.includes(state.Player.position.currentMap.id)) {
    if (enemies.goblin.attackRate >= random) {
      enemyAttack(state, enemies.goblin);
      return true;
    }
    return false;
  }
  if (enemies.ghost.location.includes(state.Player.position.currentMap.id)) {
    if (enemies.ghost.attackRate >= random) {
      enemyAttack(state, enemies.ghost);
      return true;
    }
    return false;
  }
  if (bossAreas.includes(state.Player.position.currentMap.id)) {
    if (
      enemies.bear.location[state.Player.position.currentMap.id] ===
      state.Player.position.currentPosition
    ) {
      enemyAttack(state, enemies.bear);
      return true;
    }
    if (
      enemies.witch.location[state.Player.position.currentMap.id] ===
      state.Player.position.currentPosition
    ) {
      enemyAttack(state, enemies.witch);
      return true;
    }
    if (
      enemies.skeleton.location[state.Player.position.currentMap.id] ===
      state.Player.position.currentPosition
    ) {
      enemyAttack(state, enemies.skeleton);
      return true;
    }
    if (
      enemies.dragon.location[state.Player.position.currentMap.id] ===
      state.Player.position.currentPosition
    ) {
      enemyAttack(state, enemies.dragon);
      return true;
    }
    return false;
  }
  return false;
}
