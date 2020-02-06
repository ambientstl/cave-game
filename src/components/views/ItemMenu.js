export default st => `
<button type="button" class="potion flex">
  Potion: ${st.Player.equipment.potion[0]}
</button>
<button type="button" class="large-potion flex">
  Large Potion: ${st.Player.equipment.potion[1]}
</button>
`;
