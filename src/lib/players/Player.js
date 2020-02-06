export default class Player {
  constructor(name) {
    this.name = name;
    this.hp = 10;
    this.maxHp = 15;
    this.damage = 1;
    this.defense = 0;
    this.items = {
      potion: [],
      armor: {},
      weapon: ["stick"]
    };
  }
}
