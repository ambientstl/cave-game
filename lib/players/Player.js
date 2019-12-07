export default class Player {
  constructor(name) {
    this.name = name;
    this.HP = 10;
    this.maxHP = 30;
    this.currentPosition = 1;
    // TODO: set currentMap object on game startup (after loading map objects)
    this.currentMap = "threeEntrances";
    this.items = {
      potions: { potionCount: 2, largePotionCount: 4 },
      armor: {
        helmet: false,
        amulet: false
      },
      weapons: []
    };
  }
}
