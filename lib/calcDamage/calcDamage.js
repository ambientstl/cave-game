export default function calcDamage(st, damage) {
  let dam = damage - Math.floor(st.Player.defense / 2);
  return dam < 0 ? 0 : dam;
}
