import { updateGameText } from "../updateGameText";

export default function examineMap(state) {
  updateGameText(state, state.Player.position.currentMap.description);
  return true;
}
