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
  return imageMap.caves[cave][state.Player.position.currentMap.id][
    state.Player.position.currentPosition - 1
  ];
}
