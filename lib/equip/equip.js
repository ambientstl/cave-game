import { masterItemMap } from "../createItems";
import { updateGameText } from "../updateGameText";
import { imageMap } from "../imageMap";
import { updatePlayerHp } from "../updatePlayerHp";
import { Potion } from "../items";

function spawnPotion(cave, mapID, position, large = false) {
  if (large) {
    let potion = new Potion("largePotion", "Large Potion", 15);
    masterItemMap.caves[cave][mapID][position - 1] = potion;
    imageMap.caves[cave][mapID][position - 1] = potion.image;
    return true;
  }
  let potion = new Potion("potion", "Potion", 5);
  masterItemMap.caves[cave][mapID][position - 1] = potion;
  imageMap.caves[cave][mapID][position - 1] = potion.image;
  return true;
}

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
    state.MainScreen.image = "Hidden";
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
    addItemBonus(state, item);
    return true;
  }
  updateGameText(state, `Took ${item.name.toUpperCase()}`);
  if (item.type === "potion") {
    let cave = state.Player.position.currentMap.cave;
    let gameMap = state.Player.position.currentMap.id;
    let position = state.Player.position.currentPosition;

    if (item.id === "potion") {
      state.Player.equipment[item.type][0] += 1;
      getItem(state, true);
      setTimeout(spawnPotion, 5000, cave, gameMap, position);
      return true;
    }
    state.Player.equipment[item.type][1] += 1;
    getItem(state, true);
    setTimeout(spawnPotion, 5000, cave, gameMap, position, true);
    return true;
  }
  state.Player.equipment[item.type].unshift(item);
  addItemBonus(state, item);
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
  state.Player.defense += item.defense;
  return true;
}
