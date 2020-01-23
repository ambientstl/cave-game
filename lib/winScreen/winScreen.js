import { updateGameText } from "../updateGameText";
import { updateButtonRow } from "../updateButtonRow";

export default function winScreen(st) {
  st.MainScreen.image =
    "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/gui/trophy-cup.png";
  updateGameText(st, `GAME OVER`);
  updateGameText(st, `You slayed the dragon!`);
  updateGameText(st, `You win!`);
  st.Buttons.type = "dead";
  updateButtonRow(st);
}
