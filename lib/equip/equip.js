import { masterItemMap } from "../createItems";
import { updateGameText } from "../updateGameText";
import { imageMap } from "../imageMap";
import { updatePlayerHp } from "../updatePlayerHp";

function getItem(state, remove = false) {
  let cave = state.Player.position.currentMap.cave;
  if (remove) {
    removeItemImage(
      state,
      masterItemMap.caves[cave][state.Player.position.currentMap.id][
        state.Player.position.currentPosition - 1
      ]
    );
    masterItemMap.caves[cave][state.Player.position.currentMap.id][
      state.Player.position.currentPosition - 1
    ] = null;
    return true;
  }
  return masterItemMap.caves[cave][state.Player.position.currentMap.id][
    state.Player.position.currentPosition - 1
  ];
}

export default function equip(state) {
  let item = getItem(state);
  if (item.id === "wand") {
    updateGameText(
      state,
      `You dip your weapon into the bubbling cauldron, and you emerge with a ${item.name.toUpperCase()}`
    );
    state.Player.equipment.weapon.unshift(item);
    getItem(state, true);
    return true;
  }
  updateGameText(state, `Took ${item.name.toUpperCase()}`);
  if (item.type === "potion") {
    if (item.id === "potion") {
      state.Player.equipment[item.type][0] += 1;
      getItem(state, true);
      return true;
    }
    state.Player.equipment[item.type][1] += 1;
    getItem(state, true);
    return true;
  }
  state.Player.equipment[item.type].unshift(item);
  addItemBonus(state, item);
  getItem(state, true);
  return true;
}

function removeItemImage(state, item) {
  if (item.id === "wand") {
    return false;
  }
  let cave = state.Player.position.currentMap.cave;
  imageMap.caves[cave][state.Player.position.currentMap.id][
    state.Player.position.currentPosition - 1
  ] = null;
}

function addItemBonus(state, item) {
  if (item.type === "weapon") {
    state.Player.damage += item.damage;
    return true;
  }
  updatePlayerHp(state, item.defense, true);
  return true;
}
