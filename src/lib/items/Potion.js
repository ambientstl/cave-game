import { default as Item } from "./Item";

export default class Potion extends Item {
  constructor(id, name, hpBonus) {
    super(id, name);
    this.hp = hpBonus;
    this.type = "potion";
    this.image =
      this.id === "potion"
        ? "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/items/square-bottle.png"
        : "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/items/potion-ball.png";
  }
}
