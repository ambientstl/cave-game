// TODO: Refactor all of this into approrpiate 'lib' or whatever...something besides 'some-logic'!
// console.log("#################################");
// console.log("### Welcome to the Cave Game! ###");
// alert("#############################\n### Welcome to the Cave Game! ###\n#############################");

// let name = prompt("Enter your name: ", "Human");
// if (name.length > 1) {
//     break
// } else {
//     // console.log("Please enter a name.")
//     let name = prompt("Enter your name: ", "Human");
// }

// alert("#############################\nYou find yourself outside THREE CAVES.\nThere is a STICK propped next to the entrance of the first CAVE.")

function loop(stmt, ask) {
  alert(stmt);
  let response = prompt(ask);
  if (response.length < 1) {
    loop(stmt, ask);
  }
}

const title =
  "#############################\n### Welcome to the Cave Game! ###\n#############################";
let inputName = "Enter your name: ";

loop(title, inputName);

// let stmt = "#############################\nYou find yourself outside THREE CAVES.\nThere is a STICK propped next to the entrance of the first CAVE.";
// let ask =
