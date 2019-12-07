import { Main } from "./components";

function render() {
  document.querySelector("#root").innerHTML = `
  ${Main()};
`;
}

render();
