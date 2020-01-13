import * as views from "./views";

export default st => `<div class="center-section">
<div class="map-name flex">
  ${st.Player.position.currentMap.name}
</div>
<div class="main-screen">
  ${views[st.MainScreen.view](st)}
</div>
<div class="main-text">
  ${st.GameText.messages.reduce(
    (html, curr) =>
      (html += `
  <p>${curr}</p>
  `),
    ``
  )};
</div>
</div>`;
