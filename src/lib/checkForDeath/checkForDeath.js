export default function checkForDeath(state, player = false) {
  return player
    ? state.Player.health.hp <= 0
      ? true
      : false
    : state.Player.currentEnemy.hp <= 0
    ? true
    : false;
}
