import { updatePlayerHp } from "../updatePlayerHp";
import { updateGameText } from "../updateGameText";

export default function usePotion(st, large = false) {
  if (checkForPotion(st, large)) {
    if (large) {
      updatePlayerHp(st, 15);
      removePotion(st, true);
      updateGameText(st, "Used LARGE POTION");
      return true;
    }
    updatePlayerHp(st, 5);
    removePotion(st);
    updateGameText(st, "Used POTION");
    return true;
  }
  updateGameText(st, "No potion to use!");
  return false;
}

function removePotion(st, large = false) {
  if (large) {
    st.Player.equipment.potion[1] -= 1;
    return true;
  }
  st.Player.equipment.potion[0] -= 1;
  return true;
}

function checkForPotion(st, large = false) {
  if (large) {
    if (st.Player.equipment.potion[1]) {
      return true;
    }
    return false;
  }
  if (st.Player.equipment.potion[0]) {
    return true;
  }
  return false;
}
