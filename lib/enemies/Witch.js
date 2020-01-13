import { default as Boss } from "./Boss";

export const witch = new Boss(
  "witch",
  "Witch",
  1,
  20,
  15,
  { caveTwoBackRoom: 2 },
  "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/enemies/witch-face.png",
  10
);
