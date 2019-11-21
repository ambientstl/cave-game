// for 'examine' button in button row (btn-1)
// takes in current map
function examineSurroundings(map) {
  // gets current map description
  let description = map.description;
  // prints description to the screen
  document.querySelector(".text-area").innerHTML = description;
  // returns description
  return description;
}

const currentMap = {
  description: "Map description, map description."
};

document.querySelector(".btn-1").addEventListener("click", function examine() {
  examineSurroundings(currentMap);
});
