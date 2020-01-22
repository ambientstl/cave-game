export default function calcDamage(st, damage, toPlayer = false) {
  if (toPlayer) {
    let dam = damage - st.Player.defense / 2;
    if (
      st.Player.currentEnemy.id === "bear" &&
      st.Player.equipment.armor.map(item => item.id).includes("helmet")
    ) {
      dam = dam / 2;
    }
    if (
      st.Player.currentEnemy.id === "skeleton" &&
      st.Player.equipment.weapon.map(item => item.id).includes("wand")
    ) {
      dam = dam / 2;
    }
    dam = Math.ceil(dam);
    return dam < 0 ? 0 : dam;
  }
  if (
    st.Player.currentEnemy.id === "bear" &&
    st.Player.equipment.weapon.map(item => item.id).includes("sword")
  ) {
    dam = dam * 2;
  }
  if (
    st.Player.currentEnemy.id === "skeleton" &&
    st.Player.equipment.weapon.map(item => item.id).includes("wand")
  ) {
    dam = dam * 2;
  }
  let dam = damage - Math.floor(st.Player.defense / 2);
  return dam < 0 ? 0 : dam;
}
