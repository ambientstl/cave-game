import { masterMap } from "../createMaps";

export default function enterHiddenMap(st) {
  if (st.Player.position.currentMap.id === "caveTwoBackRoom") {
    st.Player.position.currentMap = masterMap.caves.hidden[0];
    st.Player.position.currentPosition = 1;
    st.Buttons.type = "";
    return true;
  }
  st.Player.position.currentMap = masterMap.caves.hidden[1];
  st.Player.position.currentPosition = 1;
  st.Buttons.type = "";
  return true;
}
