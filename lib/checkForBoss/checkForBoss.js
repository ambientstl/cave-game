import { atBackOfCave } from "../atBackOfCave";
import { beginAttack } from "../beginAttack";

export default function checkForBoss(st) {
  console.log("checkForBoss", atBackOfCave(st));
  if (atBackOfCave(st) && st.Player.position.currentMap.enemy.spawnRate === 1) {
    st.Player.position.currentMap.enemy.spawnRate === 0;
    beginAttack(st);
  }
}
