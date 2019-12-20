export default function updatePlayerHp(player, hpChange, maxHp = false) {
  if (maxHp && maxHp != "hp") {
    player.hp += hpChange;
    player.maxHp += hpChange;
    limitHpAndCheckDeath(player);
    return true;
  }
  player.hp += hpChange;
  limitHpAndCheckDeath(player);
  return true;
}

function limitHpAndCheckDeath(player) {
  if (player.hp > player.maxHp) {
    player.hp = player.maxHp;
    return true;
  } else if (player.hp <= 0) {
    player.hp = 0;
    return false;
  } else {
    return true;
  }
}
