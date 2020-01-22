import { updateImage } from "../updateImage";

export default function exitMenu(st) {
  if (st.Player.inFight) {
    st.MainScreen.view = "Image";
    st.MainScreen.image = st.Player.currentEnemy.image;
    st.Buttons.type = "attack";
    return true;
  }
  st.MainScreen.view = "Image";
  updateImage(st);
  return true;
}
