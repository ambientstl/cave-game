import { checkForDeath } from "../checkForDeath";
import { deathScreen } from "../deathScreen";
import { enemyDefeated } from "../enemyDefeated";
import { updateGameText } from "../updateGameText";
import { calcDamage } from "../calcDamage";

export default function doDamage(state, toPlayer = false) {
  if (toPlayer) {
    let damage = calcDamage(state, state.Player.currentEnemy.damage, true);
    updateGameText(
      state,
      `${state.Player.currentEnemy.name.toUpperCase()} attacks! -${damage} HP`
    );
    state.Player.health.hp -= damage;
    if (checkForDeath(state, true)) {
      state.Player.health.hp = 0;
      deathScreen(state);
      return true;
    }
    return false;
  }
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
