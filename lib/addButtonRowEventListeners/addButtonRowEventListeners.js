import { default as examineMap } from "../examineMap";
import { default as equip } from "../equip";
import { default as moveIntoCave } from "../moveIntoCave";

export default function addButtonRowEventListeners(state) {
  // maybe add "type" property (values: "equipping", "starting", "moving") to Buttons or Buttons.<num> to clean this up?
  if (state.Buttons.one === "examine") {
    document
      .querySelector(".btn-1")
      .addEventListener("click", () => examineMap());
  }
  if (state.Buttons.three === "equip") {
    document.querySelector(".btn-3").addEventListener("click", () => equip());
  }
  if (
    state.Buttons.one === "Cave One" &&
    state.Buttons.two === "Cave Two" &&
    state.Buttons.three === "Cave Three"
  ) {
    document
      .querySelector(".btn-1")
      .addEventListener("click", () => moveIntoCave(state, 1));
    document
      .querySelector(".btn-2")
      .addEventListener("click", () => moveIntoCave(state, 2));
    document
      .querySelector(".btn-3")
      .addEventListener("click", () => moveIntoCave(state, 3));
  }
}
