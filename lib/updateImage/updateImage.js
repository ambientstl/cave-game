export default function updateImage(state, imgId = false) {
  if (!imgId) {
    state.Image.display = "hidden";
    return false;
  }
  state.Image.alt = imgId;
  state.Image.display = "display";
  // path to image doesn't work yet
  // images folder needs restructuring
  let imgPath = `../../images/${imgId}`;
  state.Image.path = imgPath;
  return true;
}
