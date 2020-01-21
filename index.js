import { masterMap } from "./lib/createMaps";
import { move } from "./lib/move";
import { moveIntoCave } from "./lib/moveIntoCave";
import { examineMap } from "./lib/examineMap";
import { updateButtonRow } from "./lib/updateButtonRow";
import { masterItemMap } from "./lib/createItems";
import { equip } from "./lib/equip";
import { exitMenu } from "./lib/exitMenu";
import { usePotion } from "./lib/usePotion";
import { updateImage } from "./lib/updateImage";
import { updateGameText } from "./lib/updateGameText";
import { checkForEnemy } from "./lib/checkForEnemy";
import { beginAttack } from "./lib/beginAttack";
import { doDamage } from "./lib/doDamage";
import checkForHiddenMap from "./lib/checkForHiddenMap/checkForHiddenMap";
import revealHiddenDoor from "./lib/revealHiddenDoor/revealHiddenDoor";
import enterHiddenMap from "./lib/enterHiddenMap/enterHiddenMap";
import {
  PlayerInfo,
  CenterSection,
  RightSection,
  Frame,
  ButtonRow
} from "./components";
import * as state from "./store";
import { run } from "./lib/run";

state.Player.position.currentMap = masterMap.entrance;
state.Player.equipment.weapon.push(masterItemMap.entrance[0]);

function renderFrame() {
  document.querySelector("#root").innerHTML = `${Frame()}`;
}

function render(st) {
  document.querySelector(".top-section").innerHTML = `
  ${PlayerInfo(st)}
  ${CenterSection(st)}
  ${RightSection(st)}`;

  document.querySelector(".button-row").innerHTML = `
  ${ButtonRow(st)}`;

  addMoveButtonsEventListeners(st);
  addEquipButtonEventListener(st);
  addButtonRowEventListeners(st);
  addItemMenuEventListeners(st);
}

function addMoveButtonsEventListeners(st) {
  if (!(state.Buttons.type === "attack")) {
    document.querySelector(".forward-btn").addEventListener("click", () => {
      move(st);
      updateImage(st);
      if (checkForEnemy(st)) {
        beginAttack(st);
      }
      if (checkForHiddenMap(st)) {
        revealHiddenDoor(st);
      }
      updateButtonRow(st);
      render(st);
    });
    document.querySelector(".back-btn").addEventListener("click", () => {
      move(st, true);
      updateImage(st);
      if (checkForEnemy(st)) {
        beginAttack(st);
      }
      updateButtonRow(st);
      render(st);
    });
    return true;
  }
  document.querySelector(".forward-btn").addEventListener("click", () => {
    updateGameText(st, "Cannot move");
    render(st);
  });
  document.querySelector(".back-btn").addEventListener("click", () => {
    updateGameText(st, "Cannot move");
    render(st);
  });
  return false;
}

function addEquipButtonEventListener(st) {
  document.querySelector(".equipment-button").addEventListener("click", () => {
    st.MainScreen.view = "EquipmentList";
    st.MainScreen.image = "Hidden";
    st.Buttons.type = "Menu";
    updateButtonRow(st);
    render(st);
  });
}

function checkItemMenu(st) {
  if (st.MainScreen.view === "ItemMenu") {
    return true;
  }
  return false;
}

function addItemMenuEventListeners(st) {
  if (checkItemMenu(st)) {
    document.querySelector(".potion").addEventListener("click", () => {
      usePotion(st);
      render(st);
    });
    document.querySelector(".large-potion").addEventListener("click", () => {
      usePotion(st, true);
      render(st);
    });
  }
}

function addButtonRowEventListeners(st) {
  if (st.Buttons.type === "entrance") {
    document.querySelector(".btn-1").addEventListener("click", () => {
      moveIntoCave(st, 1);
      updateButtonRow(st);
      render(st);
    });
    document.querySelector(".btn-2").addEventListener("click", () => {
      moveIntoCave(st, 2);
      updateButtonRow(st);
      render(st);
    });
    document.querySelector(".btn-3").addEventListener("click", () => {
      moveIntoCave(st, 3);
      updateButtonRow(st);
      render(st);
    });
    return true;
  }
  if (st.Buttons.type === "attack") {
    document.querySelector(".btn-1").addEventListener("click", () => {
      run(st);
      render(st);
    });
    document.querySelector(".btn-2").addEventListener("click", () => {
      st.MainScreen.view = "ItemMenu";
      st.MainScreen.image = "Hidden";
      st.Buttons.type = "ItemMenu";
      updateButtonRow(st);
      render(st);
    });
    document.querySelector(".btn-3").addEventListener("click", () => {
      console.log("Attack Button 3");
      if (!doDamage(st)) {
        doDamage(st, true);
        console.log("fight continues, render");
        render(st);
        return true;
      }
      console.log("fight over, render", st);
      render(st);
    });
  }
  if (st.Buttons.type === "no-item") {
    document.querySelector(".btn-1").addEventListener("click", () => {
      examineMap(st);
      updateButtonRow(st);
      render(st);
    });
    document.querySelector(".btn-2").addEventListener("click", () => {
      st.MainScreen.view = "ItemMenu";
      st.MainScreen.image = "Hidden";
      st.Buttons.type = "ItemMenu";
      updateButtonRow(st);
      render(st);
    });
    document.querySelector(".btn-3").classList.add("hidden-btn");
    return true;
  }
  if (st.Buttons.type === "item") {
    document.querySelector(".btn-1").addEventListener("click", () => {
      examineMap(st);
      updateButtonRow(st);
      render(st);
    });
    document.querySelector(".btn-2").addEventListener("click", () => {
      st.MainScreen.view = "ItemMenu";
      st.MainScreen.image = "Hidden";
      st.Buttons.type = "Menu";
      updateButtonRow(st);
      render(st);
    });
    document.querySelector(".btn-3").addEventListener("click", () => {
      equip(st);
      updateButtonRow(st);
      render(st);
    });
    return true;
  }
  if (st.Buttons.type === "Menu") {
    document.querySelector(".btn-1").classList.add("hidden-btn");
    document.querySelector(".btn-2").addEventListener("click", () => {
      exitMenu(st);
      updateButtonRow(st);
      render(st);
    });
    document.querySelector(".btn-3").classList.add("hidden-btn");
    return true;
  }
  if (st.Buttons.type === "hiddenDoor") {
    document.querySelector(".btn-1").addEventListener("click", () => {
      examineMap(st);
      updateButtonRow(st);
      render(st);
    });
    document.querySelector(".btn-2").addEventListener("click", () => {
      st.MainScreen.view = "ItemMenu";
      st.MainScreen.image = "Hidden";
      st.Buttons.type = "ItemMenu";
      updateButtonRow(st);
      render(st);
    });
    document.querySelector(".btn-3").addEventListener("click", () => {
      enterHiddenMap(st);
      updateButtonRow(st);
      render(st);
    });
    return true;
  }
}

renderFrame();
render(state);
