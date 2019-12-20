import { Player } from "./lib/players";
import { GameMap, HiddenMap } from "./lib/maps";
import { Potion, Weapon, Armor } from "./lib/items";
import {
  PlayerInfo,
  MainScreen,
  Logo,
  MovementButtons,
  ButtonRow
} from "./components";
import * as st from "./store";

const player = new Player("New Player");

function render(st) {
  document.querySelector("#root").innerHTML = `
  ${PlayerInfo(st)}
  ${MainScreen(st)}
  ${Logo()}
  ${MovementButtons()}
  ${ButtonRow(st)}
`;
}

render();
