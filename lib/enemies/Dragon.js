import { default as Boss } from "./Boss";

export const dragon = new Boss(
  "dragon",
  "Dragon",
  1,
  200,
  100,
  { caveThreeBackRoom: 1 },
  "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/enemies/spiked-dragon-head.png",
  30
);
