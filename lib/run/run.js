import { updateGameText } from "../updateGameText";
import { updateImage } from "../updateImage";
import { updateButtonRow } from "../updateButtonRow";
import { doDamage } from "../doDamage";

function checkForRunSuccess(st) {
  let random = Math.random();
  return random > st.Player.currentEnemy.escapeRate ? true : false;
}

function escapeBattle(st) {
  updateGameText(st, `Ran from ${st.Player.currentEnemy.name.toUpperCase()}`);
  st.Player.inFight = false;
  st.Player.currentEnemy = {};
  st.Buttons.type = "";
  updateImage(st);
  updateButtonRow(st);
  return true;
}

function runFailure(st) {
  doDamage(st, true);
  updateGameText(
    st,
    `Failed to escape from ${st.Player.currentEnemy.name.toUpperCase()}!`
  );
  return false;
}

export default function run(st) {
  return checkForRunSuccess(st) ? escapeBattle(st) : runFailure(st);
}
