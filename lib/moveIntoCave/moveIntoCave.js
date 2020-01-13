import { masterMap } from "../createMaps";

export default function moveIntoCave(state, cave) {
  state.Player.position.currentMap = masterMap.caves[cave][0];
}
