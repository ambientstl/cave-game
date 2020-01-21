export default function checkForHiddenMap(st) {
  return st.Player.position.currentMap.id === "caveTwoBackRoom" &&
    st.Player.position.currentPosition === 3
    ? true
    : false;
}
