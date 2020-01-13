export default function updatePlayerHp(state, hpChange, maxHp = false) {
  if (maxHp) {
    state.Player.health.hp += hpChange;
    state.Player.health.maxHp += hpChange;
    limitHpAndCheckDeath(state);
    return true;
  }
  state.Player.health.hp += hpChange;
  limitHpAndCheckDeath(state);
  return true;
}

function limitHpAndCheckDeath(state) {
  if (state.Player.health.hp > state.Player.health.maxHp) {
    state.Player.health.hp = state.Player.health.maxHp;
    return true;
  } else if (state.Player.health.hp <= 0) {
    state.Player.health.hp = 0;
    return false;
  } else {
    return true;
  }
}
