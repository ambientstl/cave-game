import { updateImage } from "../updateImage";

export default function exitMenu(st) {
  st.Buttons.equipment = "";
  if (st.Player.inFight) {
    st.MainScreen.view = "Image";
    st.MainScreen.image = st.Player.currentEnemy.image;
    st.Buttons.type = "attack";
    st.Buttons.equipment = "visible";
    return true;
  }
  st.MainScreen.view = "Image";
  updateImage(st);
  return true;
}
