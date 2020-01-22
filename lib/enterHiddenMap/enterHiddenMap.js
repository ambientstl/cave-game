import { masterMap } from "../createMaps";

export default function enterHiddenMap(st) {
  st.Player.position.currentMap = masterMap.caves.hidden[0];
  st.Player.position.currentPosition = 1;
  st.Buttons.type = "";
}
