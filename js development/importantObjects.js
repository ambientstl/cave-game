// TODO: PLAYER CLASS
// PLAYER
class Player {
  constructor(name) {
    this.name = name;
    this.HP = 10;
    this.maxHP = 30;
    this.currentPosition = 1;
    // this.currentMap ??
    // object or string?, string === mapObj.name? or === mapObj.mapID??
    // currentMap = mapID = "mapObj"
    this.currentMap = "threeEntrances";
    this.items = {
      potion: { potionCount: 2, largePotionCount: 4 },
      armor: {
        helmet: null,
        amulet: null
      },
      weapon: []
    };
  }
}

const newPlayer = new Player("New Player");

// TODO: MAP CLASS
// MAP
class Map {
  constructor(id, name, description, length, enemy, cave) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.length = length;
    this.enemy = enemy;
    this.cave = cave;
  }
}

// HIDDEN MAP
class HiddenMap extends Map {
  constructor(id, name, description, length, enemy, cave, start, end) {
    super(id, name, description, length, enemy, cave);
    this.startingMap = start;
    this.endingMap = end;
  }
}

const threeEntrances = new Map(
  "threeEntrances",
  "The Three Entrances",
  "The entrances to three caves.",
  1,
  null,
  null
);

const caveOneFrontCorridor = new Map(
  "caveOneFrontCorridor",
  "Cave 1: Front Corridor",
  "A long, dark corridor...",
  5,
  "Bat",
  1
);

const caveOneFrontCavern = new Map(
  "caveOneFrontCavern",
  "Cave 1: Front Cavern",
  "A spacious cavern. A cauldron bubbles in the middle of the room.",
  3,
  null,
  1
);

const caveTwoFrontCorridor = new Map(
  "caveTwoFrontCorridor",
  "Cave 2: Front Corridor",
  5,
  "Goblin",
  2
);

const hiddenPassage1 = new HiddenMap(
  "hiddenMap1",
  "Ghost Corridor",
  "A haunted corridor.",
  5,
  "Ghost",
  null,
  "witchDen",
  "caveOneFrontCavern"
);

const hiddenPassage2 = new HiddenMap(
  "hiddenMap2",
  "Rotten Corridor",
  "A long, dark corridor that smells like rotten eggs",
  8,
  null,
  null,
  "bearDen",
  "dragonDen"
);

// MAP OF MAPS
// adapted from eventHandlers.js
const mapMap = {
  start: threeEntrances,
  caves: {
    1: [
      caveOneFrontCorridor,
      caveOneFrontCavern
      // caveOneCorridorBack,
      // // Bear Den
      // caveOneCavernBack
    ],
    2: [caveTwoFrontCorridor]
  },
  hidden: [hiddenPassage1, hiddenPassage2]
};

// TODO: ITEM CLASS
// ITEM
class Item {
  constructor(id, name, message, buttonText) {
    this.id = id;
    this.name = name;
    this.message = message;
    this.buttonText = buttonText;
  }
}

// POTION
class Potion extends Item {
  constructor(id, name, message, buttonText, heal) {
    super(id, name, message, buttonText);
    this.type = "Potion";
    this.heal = heal;
  }
}

const potion = new Potion(
  "potion",
  "Potion",
  "Used Potion: healed 5 HP.",
  "Take Potion",
  5
);
const largePotion = new Potion(
  "largePotion",
  "Large Potion",
  "Used Large Potion: healed 15 HP.",
  "Take Large Potion",
  15
);

// ARMOR
class Armor extends Item {
  constructor(id, name, message, buttonText, hpBonus) {
    super(id, name, message, buttonText);
    this.type = "Armor";
    this.hpBonus = hpBonus;
  }
}

const helmet = new Armor(
  "helmet",
  "Helmet",
  "A sturdy metal helmet",
  "Equip Helmet",
  5
);
const amulet = new Armor(
  "amulet",
  "Amulet",
  "A jeweled amulet.",
  "Equip Amulet",
  2
);

// WEAPON
class Weapon extends Item {
  constructor(id, name, message, buttonText, damageBonus, itemInteractions) {
    super(id, name, message, buttonText);
    this.type = "Weapon";
    this.damageBonus = damageBonus;
    this.itemInteractions = itemInteractions;
  }
}

const stick = new Weapon(
  "stick",
  "Stick",
  "A wooden stick.",
  "Equip Stick",
  1,
  null
);
const wand = new Weapon("wand", "Wand", "A magic wand.", null, 5, {
  item: "amulet",
  damageBonus: 1.2
});

// ACTION ITEMS
class ActionItem extends Item {
  constructor(id, name, message, buttonText, effect) {
    super(id, name, message, buttonText);
    this.type = "Action";
    // object with key of 'heal', 'transform', 'reveal'
    this.effect = effect;
  }
}

const fruit = new ActionItem(
  "fruit",
  "Fruit",
  "+1 HP from eating Fruit.",
  "Eat Fruit",
  { heal: 1 }
);
const cauldron = new ActionItem(
  "cauldron",
  "Bubbling Cauldron",
  "A large cauldron with a glowing and bubbly blue liquid.",
  "Dip Stick.",
  { transform: ["stick", "wand"] }
);

// MAP OF ITEMS
const itemMap = {
  threeEntrances: [stick],
  caveOneFrontCorridor: [null, fruit, null, fruit, fruit],
  caveOneFrontCavern: [null, cauldron, null],
  caveTwoFrontCorridor: [null, null, potion, null, amulet],
  hiddenPassage1: [null, largePotion, null, null, null],
  hiddenPassage2: [fruit, null, null, null, null, null, null, null],
  hiddenItemPosition: {
    caveOneFrontCorridor: { 4: helmet }
  }
};
