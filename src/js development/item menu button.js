const player1 = {
  items: {
    potionCount: 2,
    bigPotionCount: 4
  },
  HP: 10,
  maxHP: 30,
  name: "PlayerOne"
};

const thisCurrentMap = {
  name: "Cave Three: Back Cavern"
};

// set map name
document.querySelector(".map-name").innerHTML = thisCurrentMap.name;
// set items button text
document.querySelector(".btn-2").innerHTML = "ITEMS";

// set player info
// get player info area
const playerInfoArea = document.querySelector(".player-info");
// clear player info html
playerInfoArea.innerHTML = "";
// create player name element and add to player info area
const playerNameElement = document.createElement("p");
playerInfoArea.appendChild(playerNameElement);
// add class to player name
playerNameElement.className = "player-info-name";

// set player name
document.querySelector(
  ".player-info-name"
).innerHTML = `<strong>${player1.name}</strong>`;

// create player HP element and add to player info area
const playerHPElement = document.createElement("p");
playerInfoArea.appendChild(playerHPElement);
// add class to player HP
playerHPElement.className = "player-info-HP";

// set player HP
document.querySelector(
  ".player-info-HP"
).innerHTML = `HP: ${player1.HP} / ${player1.maxHP}`;

// checks player's potion count
// returns array of potion counts
function checkPotionCounts(player) {
  let potionCountArray = [];
  potionCountArray.push(player.items.potionCount);
  potionCountArray.push(player.items.bigPotionCount);
  return potionCountArray;
}

function drawItemMenu(player) {
  // set potion array
  let potionCountArray = checkPotionCounts(player);
  // set 'map' name to items
  document.querySelector(".map-name").innerHTML = "ITEMS";
  // get main screen
  let screen = document.querySelector(".main-screen");
  // add item-menu class to screen
  screen.classList.add("item-menu");
  // clear inner html of main screen
  screen.innerHTML = "";
  // if potion count > 0
  if (potionCountArray[0]) {
    // create new button element
    const newButton = document.createElement("button");
    // append button to main screen
    screen.appendChild(newButton);
    // add button classes to button element
    newButton.className = "btn btn-dark btn-lg potion-btn";
    // set button's inner html
    newButton.innerHTML = `Potion: ${potionCountArray[0]}`;
    // add potion button event listener
    addPotionEventListener("Potion");
  }
  // if big potion count > 0,
  if (potionCountArray[1]) {
    // create new button element
    const newButton = document.createElement("button");
    // add button classes to button element
    newButton.className = "btn btn-dark btn-lg lg-potion-btn";
    // set button's inner html
    newButton.innerHTML = `Large Potion: ${potionCountArray[1]}`;
    // append button to main screen
    screen.appendChild(newButton);
    // add potion button event listener
    addPotionEventListener("Large Potion");
  }
}

// using items from the item menu
const potion = {
  name: "potion",
  heal: 5,
  message: "Used Potion. Healed 5 HP."
};

const largePotion = {
  name: "Large Potion",
  heal: 15,
  message: "Used Large Potion. Healed 15 HP."
};

// the potion button event listeners need to be added after the item menu is drawn
// asynchronous functions? or just add function to drawItemMenu?

// potion argument should be "Potion" or "Large Potion"
function addPotionEventListener(potionType) {
  // if potionType is potion
  if (potionType === "Potion") {
    document
      .querySelector(".potion-btn")
      .addEventListener("click", function usePotion() {
        // decrease potion count in player object and item menu
        player1.items.potionCount -= 1;
        // apply potion's effects
        player1.HP += potion.heal;
        // check for maximum HP, reset player HP to maxHP if > maxHP
        if (player1.HP > player1.maxHP) {
          player1.HP = player1.maxHP;
        }
        // update player HP
        document.querySelector(
          ".player-info-HP"
        ).innerHTML = `HP: ${player1.HP}  / ${player1.maxHP}`;
        // display 'used potion' message in text area
        document.querySelector(".text-area").innerHTML = potion.message;
        // check potion count
        // if potionCount is 0, remove button, and short-circuit exit function
        if (!checkPotionCounts(player1)[0]) {
          document.querySelector(".potion-btn").remove();
          return;
        }
        // if potionCount > 0, update potion button
        document.querySelector(
          ".potion-btn"
        ).innerHTML = `Potion: ${player1.items.potionCount}`;
      });
  } else if (potionType === "Large Potion") {
    document
      .querySelector(".lg-potion-btn")
      .addEventListener("click", function usePotion() {
        // decrease potion count in player object and item menu
        player1.items.bigPotionCount -= 1;
        // apply potion's effects
        player1.HP += largePotion.heal;
        // check for maximum HP, reset player HP to maxHP if > maxHP
        if (player1.HP > player1.maxHP) {
          player1.HP = player1.maxHP;
        }
        // update player HP
        document.querySelector(
          ".player-info-HP"
        ).innerHTML = `HP: ${player1.HP} / ${player1.maxHP}`;
        // display 'used potion' message in text area
        document.querySelector(".text-area").innerHTML = largePotion.message;
        // check potion count
        // if potionCount is 0, remove button, and short-circuit exit function
        if (!checkPotionCounts(player1)[1]) {
          document.querySelector(".lg-potion-btn").remove();
          return;
        }
        // if potionCount > 0, update potion button
        document.querySelector(
          ".lg-potion-btn"
        ).innerHTML = `Large Potion: ${player1.items.bigPotionCount}`;
      });
  }
}

function resetMainScreen() {
  // reset map name
  document.querySelector(".map-name").innerHTML = `${thisCurrentMap.name}`;
  // get main screen
  let screen = document.querySelector(".main-screen");
  screen.innerHTML = "MAIN SCREEN";
}

function toggleItemMenu(player) {
  // get main screen
  let screen = document.querySelector(".main-screen");
  // toggle item-menu class and update main screen
  // if item-menu toggled on,
  if (screen.classList.toggle("item-menu")) {
    // draw item menu
    drawItemMenu(player);
  } else {
    // reset main screen
    resetMainScreen();
    // OR create separate item-menu div & vary z-index to show and hide??
  }
}

document.querySelector(".btn-2").addEventListener("click", function itemMenu() {
  toggleItemMenu(player1);
});
