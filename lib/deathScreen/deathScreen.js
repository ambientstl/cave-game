import { updateGameText } from "../updateGameText";
import { updateButtonRow } from "../updateButtonRow";

export default function deathScreen(st) {
  st.MainScreen.image =
    "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/enemies/grim-reaper.png";
  updateGameText(st, `GAME OVER`);
  updateGameText(st, `You died.`);
  st.Buttons.type = "dead";
  updateButtonRow(st);
}
