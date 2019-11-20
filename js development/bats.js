// MAP
// exmaple map object with name, description (with and without item), map connection, available items
const entranceCaveOne = {
  name: "Entrance to Cave One",
  descriptionWithStick:
    "The ENTRANCE to CAVE ONE. High pitched squeaks can be heard from inside the cave. A STICK is on the ground.",
  descriptionWithoutStick:
    "The ENTRANCE to CAVE ONE. High pitched squeaks can be heard from inside the cave.",
  connectsWith: "corridorCaveOne",
  items: ["STICK"]
};

// PLAYER
// example player object with name, HP, attack(), XP, weapon, take(), items
let player = {
  name: "Player1",
  HP: 10,
  attack: function(enemy) {
    console.log(`${this.name} attacks ${enemy.name}.`);
    enemy.HP -= 1;
    checkEnemyDeath(enemy);
  },
  XP: null,
  weapon: ["stick"],
  take: function(item) {
    console.log(`${this.name} takes the ${item}.`);
    checkAndAddItem(item);
  },
  items: []
};

// ITEMS
// example weapon list
const allWeapons = ["STICK", "WAND", "SWORD"];

// example item checking: weapon or other
function checkAndAddItem(item) {
  if (item in allWeapons) {
    player.weapon.push(item);
  } else {
    player.items.push(item);
  }
}

// ENEMIES
// example enemy object with name, HP, attack, & XP
const BAT = {
  name: "Bat",
  HP: 1,
  attack: function() {
    console.log(`${this.name} attacks ${player.name}`);
    player.HP -= 1;
  },
  XP: 1
};

// check death with message
function checkEnemyDeath(enemy) {
  if (enemy.HP <= 0) {
    player.XP += enemy.XP;
    console.log(
      `${player.name} defeats ${enemy.name} and gains ${enemy.XP}XP!`
    );
  }
}

// test map
console.log(entranceCaveOne.descriptionWithStick);
// test items
player.take(entranceCaveOne.items[0]);
// test battle fucntionality
console.log(`${BAT.name} HP: ${BAT.HP} // ${player.name} HP: ${player.HP}`);
BAT.attack([player]);
console.log(`${BAT.name} HP: ${BAT.HP} // ${player.name} HP: ${player.HP}`);
player.attack(BAT);
console.log(`${BAT.name} HP: ${BAT.HP} // ${player.name} HP: ${player.HP}`);
BAT.attack([player]);
console.log(`${BAT.name} HP: ${BAT.HP} // ${player.name} HP: ${player.HP}`);
player.attack(BAT);
console.log(`${BAT.name} HP: ${BAT.HP} // ${player.name} HP: ${player.HP}`);
