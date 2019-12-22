export default function updatePlayerHp(state, hpChange, maxHp = false) {
  if (maxHp && maxHp != "hp") {
    state.Health.hp += hpChange;
    state.Health.maxHp += hpChange;
    limitHpAndCheckDeath(state);
    return true;
  }
  state.Health.hp += hpChange;
  limitHpAndCheckDeath(state);
  return true;
}

function limitHpAndCheckDeath(state) {
  if (state.Health.hp > state.Health.maxHp) {
    state.Health.hp = state.Health.maxHp;
    return true;
  } else if (state.Health.hp <= 0) {
    state.Health.hp = 0;
    return false;
  } else {
    return true;
  }
}
