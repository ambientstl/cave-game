import { masterItemMap } from "../createItems";

function checkForItem(state) {
  let cave = state.Player.position.currentMap.cave;
  let item =
    masterItemMap.caves[cave][state.Player.position.currentMap.id][
      state.Player.position.currentPosition - 1
    ];
  if (item) {
    return item;
  }
  return false;
}

export default function updateButtonRow(state) {
  console.log("updateButtonRow: type", state.Buttons.type);
  if (state.Buttons.type === "dead") {
    console.log("type: dead");
    state.Buttons.one = "hidden";
    state.Buttons.two = "Restart";
    state.Buttons.three = "hidden";
    return true;
  }
  if (
    state.MainScreen.view === "ItemMenu" ||
    state.MainScreen.view === "EquipmentList"
  ) {
    state.Buttons.type = "Menu";
    state.Buttons.one = "hidden";
    state.Buttons.two = "Back";
    state.Buttons.three = "hidden";
    return true;
  }
  if (state.Buttons.type === "attack") {
    state.Buttons.one = "Run";
    state.Buttons.two = "Items";
    state.Buttons.three = "Fight";
    return true;
  }
  if (state.Buttons.type === "hiddenDoor") {
    state.Buttons.three = "Examine wall";
    return true;
  }
  if (state.Player.position.currentMap.id === "caveEntrance") {
    state.Buttons.type = "entrance";
    state.Buttons.one = "Cave One";
    state.Buttons.two = "Cave Two";
    state.Buttons.three = "Cave Three";
    return true;
  }
  let item = checkForItem(state);
  if (item) {
    state.Buttons.type = "item";
    state.Buttons.one = "Examine";
    state.Buttons.two = "Items";
    state.Buttons.three = `Take ${item.name}`;
    return true;
  }
  state.Buttons.type = "no-item";
  state.Buttons.one = "Examine";
  state.Buttons.two = "Items";
  state.Buttons.three = "Hidden";
}
