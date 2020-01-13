import { Potion, Weapon, Armor } from "../items";

const potion = new Potion("potion", "Potion", 5);
const largePotion = new Potion("largePotion", "Large Potion", 15);

const stick = new Weapon("stick", "Stick", 1);
const wand = new Weapon("wand", "Wand", 10);
const sword = new Weapon("sword", "Sword", 8);

const helmet = new Armor("helmet", "Helmet", 2);
const amulet = new Armor("amulet", "Amulet", 1);
const shield = new Armor("shield", "Shield", 4);

export default {
  entrance: [stick],
  caves: {
    1: {
      caveOneFrontCorridor: [null, null, null, helmet, null],
      caveOneFrontRoom: [null, wand, null],
      caveOneBackCorridor: [null, null, potion, null, null],
      caveOneBackRoom: [null, null, null]
    },
    2: {
      caveTwoFrontCorridor: [null, potion, null, null, null],
      caveTwoFrontRoom: [null, null, sword],
      caveTwoBackCorridor: [largePotion, null, null, null, null],
      caveTwoBackRoom: [null, null, null]
    },
    3: {
      caveThreeFrontCorridor: [null, null, null, null, shield],
      caveThreeFrontRoom: [null, null, null],
      caveThreeBackRoom: [null, null, null, null, null]
    },
    hidden: {
      hiddenPassage: [null, null, amulet, null, null],
      smokyPassage: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        largePotion
      ]
    }
  }
};
