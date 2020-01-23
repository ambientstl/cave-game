export default function calcDamage(st, damage, toPlayer = false) {
  if (toPlayer) {
    let dam = damage - st.Player.defense / 2;
    dam = Math.ceil(dam);
    return dam < 0 ? 0 : dam;
  }
  let dam = damage - Math.floor(st.Player.defense / 2);
  return dam < 0 ? 0 : dam;
}
