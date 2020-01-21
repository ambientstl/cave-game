export default class Enemy {
  constructor(id, name, hp, damage, escapeRate, imageLink) {
    this.id = id;
    this.name = name;
    this.hp = hp;
    this.damage = damage;
    this.escapeRate = escapeRate;
    this.image = imageLink;
  }
}
