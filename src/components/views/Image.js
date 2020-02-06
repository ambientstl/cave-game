export default st => {
  if (st.MainScreen.image === "Hidden") {
    return `<img src="${st.MainScreen.image}" alt="main-screen-image" class="flex hidden-btn"/>`;
  }
  return `<img src="${st.MainScreen.image}" alt="main-screen-image" class="flex"/>`;
};
