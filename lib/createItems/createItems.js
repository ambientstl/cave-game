import { Potion, Weapon, Armor } from "../items";

const potion = new Potion("potion", "Potion", 5);
const largePotion = new Potion("largePotion", "Large Potion", 15);

const stick = new Weapon("stick", "Stick", 1);
const wand = new Weapon("wand", "Wand", 9);
const sword = new Weapon("sword", "Sword", 12);
const axe = new Weapon("axe", "Axe", 7);
const mace = new Weapon("mace", "Mace", 4);

const helmet = new Armor("helmet", "Helmet", 4);
const amulet = new Armor("amulet", "Amulet", 2);
const shield = new Armor("shield", "Shield", 10);
const breastplate = new Armor("breastplate", "Breastplate", 20);
const legs = new Armor("legs", "Legs", 8);
const gloves = new Armor("gloves", "Gloves", 2);
const enchantedAmulet = new Armor("enchantedAmulet", "Enchanted Amulet", 4);

export default {
  entrance: [stick],
  caves: {
    1: {
      caveOneFrontCorridor: [null, null, null, helmet, null],
      caveOneFrontRoom: [null, wand, null],
      caveOneBackCorridor: [null, null, potion, null, null],
      caveOneBackRoom: [gloves, null, null]
    },
    2: {
      caveTwoFrontCorridor: [null, potion, null, null, null],
      caveTwoFrontRoom: [null, null, legs],
      caveTwoBackCorridor: [largePotion, null, null, mace, null],
      caveTwoBackRoom: [null, enchantedAmulet, null]
    },
    3: {
      caveThreeFrontCorridor: [null, null, null, null, null],
      caveThreeFrontRoom: [null, null, shield],
      caveThreeBackRoom: [sword, null, null, breastplate, null]
    },
    hidden: {
      hiddenPassage: [null, null, amulet, null, null],
      smokyPassage: [null, null, axe, null, null, null, null, null, largePotion]
    }
  }
};
