import { atBackOfCave } from "../atBackOfCave";
import { beginAttack } from "../beginAttack";

export default function checkForBoss(st) {
  // console.log("checkForBoss", atBackOfCave(st));
  if (atBackOfCave(st) && st.Player.position.currentMap.enemy.spawnRate > 1) {
    st.Player.position.currentMap.enemy.spawnRate = 0;
    beginAttack(st);
  }
  // console.log(
  //   "checkForBoss: spawnRate",
  //   st.Player.position.currentMap.enemy.spawnRate > 1
  // );
  // console.log(
  //   "checkForBoss: map",
  //   st.Player.position.currentMap.id === "caveThreeFrontRoom"
  // );
  // console.log(
  //   "checkForBoss: position",
  //   st.Player.position.currentPosition === 2
  // );

  if (
    st.Player.position.currentMap.enemy.spawnRate > 1 &&
    st.Player.position.currentMap.id === "caveThreeFrontRoom" &&
    st.Player.position.currentPosition === 2
  ) {
    console.log("checkForBoss: skeleton?");
    st.Player.position.currentMap.enemy.spawnRate = 0;
    beginAttack(st);
  }
}
