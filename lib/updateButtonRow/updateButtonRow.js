function getButtonRow() {
  return document.querySelector(".button-row");
}

function clearButtonRow() {
  getButtonRow().innerHTML = "";
  return true;
}

// ? drop mainAction (fighting or not) to focus on movement and collecting/using items

export default function updateButtonRow(mainAction) {
  clearButtonRow();
  if (mainAction === "moving") {
    getButtonRow().innerHTML = `
    <button type="button" class="btn-1">Examine</button>
    <button type="button" class="btn-2">Items</button>
    <button type="button" class="btn-3"></button>`;
    // TODO:
    // if item at current position, add item text to button 3 and add event listener
    // if no item, disable/hide button 3
    return true;
  } else if (mainAction == "fighting") {
    getButtonRow().innerHTML = `
    <button type="button" class="btn-1">Run</button>
    <button type="button" class="btn-2">Items</button>
    <button type="button" class="btn-3">Attack</button>`;
    return true;
  } else {
    return false;
  }
}
