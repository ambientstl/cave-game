export default function updateGameText(state, text) {
  if (state.GameText.messages.length > 4) {
    state.GameText.messages.pop();
    state.GameText.messages.unshift(text);
    return true;
  }
  state.GameText.messages.unshift(text);
  return true;
}
