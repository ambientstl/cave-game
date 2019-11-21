const player1 = {
  items: {
    potionCount: 2,
    bigPotionCount: 4
  }
};

const thisCurrentMap = {
  name: "Cave Three: Back Cavern"
};

document.querySelector(".map-name").innerHTML = thisCurrentMap.name;
document.querySelector(".btn-2").innerHTML = "ITEMS";

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
  }
  // if big potion count > 0,
  if (potionCountArray[1]) {
    // create new button element
    const newButton = document.createElement("button");
    // add button classes to button element
    newButton.className = "btn btn-dark btn-lg potion-btn";
    // set button's inner html
    newButton.innerHTML = `Large Potion: ${potionCountArray[1]}`;
    // append button to main screen
    screen.appendChild(newButton);
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
