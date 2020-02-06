import { imageMap } from "../imageMap";

export default function updateImage(state) {
  let image = getImage(state);
  if (!image) {
    state.MainScreen.image = "Hidden";
    return true;
  }
  state.MainScreen.view = "Image";
  state.MainScreen.image = image;
  return true;
}

function getImage(state) {
  let cave = state.Player.position.currentMap.cave;
  if (!cave) {
    return imageMap.entrance;
  }
  let image =
    imageMap.caves[cave][state.Player.position.currentMap.id][
      state.Player.position.currentPosition - 1
    ];
  if (image) {
    let imageId = image.slice(image.lastIndexOf("/") + 1, -4);
    if (
      state.Player.equipment.weapon.map(piece => piece.id).includes(imageId) ||
      state.Player.equipment.armor.map(piece => piece.id).includes(imageId)
    ) {
      return false;
    }
  }
  return image;
}
