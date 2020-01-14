import { doDamage } from "../doDamage";

export default function beginAttack(state) {
  state.Player.inFight = true;
  let enemy = state.Player.position.currentMap.enemy.spawn();
  state.Player.currentEnemy = enemy;
  state.MainScreen.image = enemy.image;
  doDamage(state, true);
  state.Buttons.type = "attack";
}
