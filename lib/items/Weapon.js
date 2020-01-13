import { default as Item } from "./Item";

export default class Weapon extends Item {
  constructor(id, name, damageBonus) {
    super(id, name);
    this.damage = damageBonus;
    this.type = "weapon";
  }
}
