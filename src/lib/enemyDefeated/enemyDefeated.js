import { updateGameText } from "../updateGameText";
import { updateButtonRow } from "../updateButtonRow";
import { updateImage } from "../updateImage";
import { Boss } from "../enemies";
import { winScreen } from "../winScreen";

export default function enemyDefeated(st) {
  updateGameText(st, `${st.Player.currentEnemy.name.toUpperCase()} defeated!`);
  st.Player.inFight = false;
  if (st.Player.currentEnemy.id === "dragon") {
    winScreen(st);
    return true;
  }
  if (st.Player.currentEnemy instanceof Boss) {
    st.Player.position.currentMap.enemy.spawnRate = 0;
  }
  st.Player.currentEnemy = {};
  st.Buttons.type = "";
  updateImage(st);
  updateButtonRow(st);
}
