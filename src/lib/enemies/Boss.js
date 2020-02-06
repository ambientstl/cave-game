import { default as Enemy } from "./Enemy";

export default class Boss extends Enemy {
  constructor(id, name, hp, damage, escapeRate, imageLink, bonus) {
    super(id, name, hp, damage, escapeRate, imageLink);
    this.bonus = bonus;
    this.boss = true;
  }
}
