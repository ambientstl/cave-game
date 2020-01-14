import { checkForDeath } from "../checkForDeath";
import { deathScreen } from "../deathScreen";
import { enemyDefeated } from "../enemyDefeated";
import { updateGameText } from "../updateGameText";

export default function doDamage(state, toPlayer = false) {
  if (toPlayer) {
    console.log("doing damage to player");
    updateGameText(
      state,
      `${state.Player.currentEnemy.name.toUpperCase()} attacks! -${
        state.Player.currentEnemy.damage
      } HP`
    );
    state.Player.health.hp -= state.Player.currentEnemy.damage;
    if (checkForDeath(state, true)) {
      state.Player.health.hp = 0;
      deathScreen(state);
      return true;
    }
    return false;
  }
  console.log("doing damage to enemy");
  updateGameText(
    state,
    `Player attacks ${state.Player.currentEnemy.name.toUpperCase()}! -${
      state.Player.damage
    } HP`
  );
  state.Player.currentEnemy.hp -= state.Player.damage;
  if (checkForDeath(state)) {
    state.Player.currentEnemy.hp = 0;
    enemyDefeated(state);
    return true;
  }
  return false;
}
