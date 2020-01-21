import { updateImage } from "../updateImage";

export default function exitMenu(st) {
  console.log("exitMenu: button type", st.Buttons.type);
  if (st.Player.inFight) {
    st.MainScreen.view = "Image";
    st.MainScreen.image = st.Player.currentEnemy.image;
    st.Buttons.type = "attack";
    console.log("exitMenu: in fight: button type", st.Buttons.type);
    return true;
  }
  st.MainScreen.view = "Image";
  updateImage(st);
  return true;
}
