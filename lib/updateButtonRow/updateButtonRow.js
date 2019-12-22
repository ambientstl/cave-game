// TODO: update state.Buttons
// if item at current position,
//   get item at current position
//      if item.id = "wand",
//      different button text and game text
//      update state
//   text = `Take ${item.name}`
//   update state.Buttons.three
// if no item,
//   hide button 3
import { default as itemMap } from "./createItems";

function checkForItem(state) {
  let cave = state.Position.currentMap.cave;
  let item = itemMap.caves[cave][state.Position.currentPosition - 1];
  if (item) {
    return item;
  }
  return false;
}

export default function updateButtonRow(state) {
  let item = checkForItem(state);
  if (item) {
    if (item.id != "wand") {
      state.Buttons.three = `Take ${item.name}`;
      return true;
    }
    state.Buttons.three = `Dip stick`;
    return true;
  }
  state.Buttons.three = "Hidden";
  return true;
}
