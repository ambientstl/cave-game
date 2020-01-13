import { updateGameText } from "../updateGameText";

export default function enemyAttack(state, enemy) {
  state.MainScreen.image = enemy.image;
  state.Buttons.type = "attack";
  updateGameText(state, `${enemy.name.toUpperCase()} attacked!`);
}
