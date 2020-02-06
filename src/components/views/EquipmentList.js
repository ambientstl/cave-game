function createEquipmentList(st, weapons = false) {
  if (!weapons) {
    return st.Player.equipment.armor.reduce(
      (html, curr) => (html += `<li>${curr.name}</li>`),
      ``
    );
  }
  return st.Player.equipment.weapon.reduce(
    (html, curr) => (html += `<li>${curr.name}</li>`),
    ``
  );
}

export default st =>
  `<div class="equipment-list">
    <h4>Armor</h4>
    <ul>
      ${createEquipmentList(st)}
    </ul>
    <h4>Weapons</h4>
    <ul>
      ${createEquipmentList(st, true)}
    </ul>
  </div>`;
