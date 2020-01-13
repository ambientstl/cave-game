import { updateImage } from "../updateImage";

export default function exitMenu(st) {
  st.MainScreen.view = "Image";
  updateImage(st);
}
