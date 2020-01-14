export default function checkForEnemy(state) {
  return state.Player.position.currentMap.enemy.spawnRate > Math.random()
    ? true
    : false;
}
