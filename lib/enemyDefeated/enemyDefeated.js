import { updateGameText } from "../updateGameText";
import { updateButtonRow } from "../updateButtonRow";
import { updateImage } from "../updateImage";

export default function enemyDefeated(st) {
  updateGameText(st, `${st.Player.currentEnemy.name.toUpperCase()} defeated!`);
  st.Player.inFight = false;
  st.Player.currentEnemy = {};
  st.Buttons.type = "";
  updateImage(st);
  updateButtonRow(st);
}
