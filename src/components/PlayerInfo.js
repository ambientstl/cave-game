export default st => `
<div class="player-info">
  <div class="player-name flex">${st.Player.name}</div>
  <div class="player-health flex">HP: ${st.Player.health.hp}/${st.Player.health.maxHp}</div>
  <div class="player-position flex">Position: ${st.Player.position.currentPosition}</div>
  <button type="button" class="equipment-button flex ${st.Buttons.equipment}">Equipment</button>
</div>`;
