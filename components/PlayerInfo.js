export default st => `
<div class="player-info">
  <div class="player-name">player name</div>
  <div class="player-health">${st.Health.hp}/${st.Health.maxHp}</div>
  <div class="player-position">${st.Position.currentPosition}</div>
  <button type="button" class="equipment-button">Equipment</button>
</div>`;

// TODO: player name? Need to be in state since it should never change? Or loaded from some other variable (i.e. log-in)?
