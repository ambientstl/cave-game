import { default as Boss } from "./Boss";

export const skeleton = new Boss(
  "skeleton",
  "Skeleton",
  0.5,
  50,
  25,
  { caveThreeFrontRoom: 3 },
  "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/enemies/haunting.png",
  15
);
