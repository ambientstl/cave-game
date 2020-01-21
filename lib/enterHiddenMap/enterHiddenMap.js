import { masterMap } from "../createMaps";

export default function enterHiddenMap(st) {
  console.log("enterHiddenMap");
  st.Player.position.currentMap = masterMap.hidden[0];
  st.Player.position.currentPosition = 1;
  st.Buttons.type = "";
}
