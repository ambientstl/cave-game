import { doDamage } from "../doDamage";

export default function beginAttack(state) {
  state.Player.inFight = true;
  let enemy = state.Player.position.currentMap.enemy.spawn();
  state.Player.currentEnemy = enemy;
  state.MainScreen.image = enemy.image;
  state.Buttons.type = "attack";
  doDamage(state, true);
}
