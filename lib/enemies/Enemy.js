export default class Enemy {
  constructor(id, name, attackRate, hp, damage, location, imageLink) {
    this.id = id;
    this.name = name;
    this.attackRate = attackRate;
    this.hp = hp;
    this.damage = damage;
    this.location = location;
    this.image = imageLink;
  }
}
