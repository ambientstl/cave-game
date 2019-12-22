import { default as itemMap } from "../createItems";

function getItem(state) {
  let cave = state.Position.currentMap.cave;
  return itemMap.caves[cave][state.Position.currentPosition - 1];
}

export default function equip(state) {
  let item = getItem(state);
  if (item.type === "potion") {
    if (item.id === "potion") {
      state.Equip[item.type][0] += 1;
      return true;
    }
    state.Equip[item.type][1] += 1;
    return true;
  }
  state.Equip[item.type].unshift(item);
  return true;
}
