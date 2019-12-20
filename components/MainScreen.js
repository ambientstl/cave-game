export default st => `
<div class="main-screen">
  <div class="map-name">
      ${st.Position.currentMap}
  </div>
  <div class="main-screen">
    <img class= "${st.Image.display}" src= "${st.Image.path}" alt="${
  st.Image.alt
}">

  </div>
  <div class="main-text">
    ${st.GameText.messages.reduce(
      (html, curr) => (html += `<p>${curr}</p>`),
      ``
    )};
  </div>
</div>`;
