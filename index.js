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

const player = new Player("New Player");

function render() {
  document.querySelector("#root").innerHTML = `
  ${PlayerInfo()}
  ${MainScreen()}
  ${Logo()}
  ${MovementButtons()}
  ${ButtonRow()}
`;
}

render();
