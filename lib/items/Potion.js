import { default as Item } from "./Item";

export default class Potion extends Item {
  constructor(id, name, hpBonus) {
    super(id, name);
    this.hp = hpBonus;
    this.type = "potion";
  }
}
