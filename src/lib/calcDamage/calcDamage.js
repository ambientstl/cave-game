export default function calcDamage(st, damage, toPlayer = false) {
  if (toPlayer) {
    let dam = damage - st.Player.defense / 2;
    if (
      st.Player.equipment.armor.map(piece => piece.id).includes("amulet") ||
      (st.Player.equipment.weapon.map(piece => piece.id).includes("wand") &&
        st.Player.currentEnemy.id === "ghost")
    ) {
      dam = dam / 2;
    }
    if (
      st.Player.equipment.armor
        .map(piece => piece.id)
        .includes("enchantedAmulet") &&
      st.Player.currentEnemy.id === "ghost"
    ) {
      dam = 0;
    }
    dam = Math.ceil(dam);
    return dam < 0 ? 0 : dam;
  }
  let dam = damage - Math.floor(st.Player.defense / 2);
  return dam < 0 ? 0 : dam;
}
