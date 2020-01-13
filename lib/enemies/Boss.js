import { default as Enemy } from "./Enemy";

export default class Boss extends Enemy {
  constructor(id, name, attackRate, hp, damage, location, imageLink, bonus) {
    super(id, name, attackRate, hp, damage, location, imageLink);
    this.bonus = bonus;
    this.boss = true;
  }
}
