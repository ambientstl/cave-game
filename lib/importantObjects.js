// TODO: Move Classes to individual exports

// TODO: PLAYER CLASS
// PLAYER
class Player {
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

const player = new Player("New Player");

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
  // TODO: (future) make start and end = map objects instead of strings
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
  // TODO: (future) make start and end =  map objects instead of strings
  "bearDen",
  "dragonDen"
);

// MAP OF MAPS
// adapted from eventHandlers.js
// ?? rename to 'globalMap' or ?
const mapMap = {
  start: threeEntrances,
  caves: {
    1: [caveOneFrontCorridor, caveOneFrontCavern],
    2: [caveTwoFrontCorridor]
  },
  hidden: [hiddenPassage1, hiddenPassage2]
};

// TODO: ITEM CLASS
// ITEM
class Item {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

// POTION
class Potion extends Item {
  constructor(id, name, heal) {
    super(id, name);
    this.type = "Potion";
    this.heal = heal;
    this.message = `Used ${name}: healed ${heal} HP.`;
    this.buttonText = `Take ${name}`;
    this.action = function takePotion() {
      // add potion to correct potion count
      player.items.potions[id + "Count"] += 1;
      // TODO: timeout takePotion function for X seconds OR remove from item map for X seconds then replace?
    };
  }
}

const potion = new Potion("potion", "Potion", 5);
const largePotion = new Potion("largePotion", "Large Potion", 15);

// ARMOR
class Armor extends Item {
  constructor(id, name, hpBonus, removeItem) {
    super(id, name);
    this.type = "Armor";
    this.hpBonus = hpBonus;
    this.message = `Equipped ${name}.`;
    this.buttonText = `Equip ${name}`;
    this.action = function equipArmor() {
      // equip armor
      player.items.armor[id] = true;
      player.HP += hpBonus;
    };
    this.removeItem = removeItem;
  }
}

const helmet = new Armor("helmet", "Helmet", 5, function removeItem() {
  itemMap.hiddenItemPosition.caveOneFrontCorridor = null;
});
const amulet = new Armor("amulet", "Amulet", 2, function removeItem() {
  itemMap.caveTwoFrontCorridor[4] = null;
});

// WEAPON
class Weapon extends Item {
  constructor(id, name, damageBonus, itemInteractions, removeItem) {
    super(id, name);
    this.type = "Weapon";
    this.damageBonus = damageBonus;
    this.itemInteractions = itemInteractions;
    this.message = `Equipped ${name}`;
    this.buttonText = `Equip ${name}`;
    this.action = function equipWeapon() {
      // equip weapon
      player.items.weapons.push(this);
    };
    this.removeItem = removeItem;
  }
}

const stick = new Weapon("stick", "Stick", 1, null, function removeItem() {
  itemMap.threeEntrances[0] = null;
});
const wand = new Weapon(
  "wand",
  "Wand",
  5,
  {
    item: "amulet",
    damageBonus: 1.2
  },
  null
);

// ACTION ITEMS
class ActionItem extends Item {
  constructor(id, name, message, buttonText, action, removeItem) {
    super(id, name);
    this.type = "Action";
    this.message = message;
    this.buttonText = buttonText;
    this.action = action;
    this.removeItem = removeItem;
  }
}

const fruit = new ActionItem(
  "fruit",
  "Fruit",
  "Ate Fruit: gained 1 HP.",
  "Eat Fruit",
  function eatFruit() {
    player.HP += 1;
  },
  function removeItem() {
    // TODO: timeout function for X seconds OR remove from item map for X seconds then replace?
  }
);
const cauldron = new ActionItem(
  "cauldron",
  "Bubbling Cauldron",
  "Stick transformed into magic Wand.",
  "Dip Stick.",
  function useCaldron() {
    let stickIndex = player.items.weapons.indexOf(stick);
    player.items.weapons[stickIndex] = wand;
  },
  function removeItem() {
    // remove from itemMap OR reset this.action to new function
    itemMap.caveOneFrontCavern[1] = null;
  }
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
