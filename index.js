import { Player } from "./lib/players";
import { HiddenMap } from "./lib/maps";

import { Main } from "./components";

console.log(new Player("Heelo Wrold"));

const hm = new HiddenMap(
  "hiddenMap1",
  "Ghost Corridor",
  "A haunted corridor.",
  5,
  "Ghost",
  null,
  // TODO: (future) make start and end = map objects instead of strings
  "witchDen",
  "caveOneFrontCavern"
);

console.log(hm);

function render() {
  document.querySelector("#root").innerHTML = `
  ${Main()};
`;
}

render();
