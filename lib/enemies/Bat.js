import { default as Enemy } from "./Enemy";

export const bat = new Enemy(
  "bat",
  "Bat",
  0.65,
  1,
  1,
  ["caveOneFrontCorridor", "caveOneBackCorridor"],
  "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/enemies/bat.png"
);
