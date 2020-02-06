import { default as Item } from "./Item";

export default class Armor extends Item {
  constructor(id, name, defenseBonus) {
    super(id, name);
    this.defense = defenseBonus;
    this.type = "armor";
  }
}
