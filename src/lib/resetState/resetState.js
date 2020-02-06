import { masterMap } from "../createMaps";

export default function resetState(st) {
  st.Player.health = {
    hp: 20,
    maxHp: 20
  };
  st.Player.position = { currentMap: {}, currentPosition: 1 };
  st.Player.equipment = { armor: [], potion: [1, 0], weapon: [] };
  st.Player.damage = 1;
  st.Player.defense = 1;
  st.Player.inFight = false;
  st.Player.currentEnemy = {};

  st.Buttons.one = "Cave One";
  st.Buttons.two = "Cave Two";
  st.Buttons.three = "Cave Three";
  st.Buttons.type = "entrance";

  st.GameText.messages = [
    "You find yourself in front of THREE CAVES. You hear a low and ghastly growl from one of the caves. Frightened, you look around for a something to defend yourself. This sturdy STICK will have to do for now.",
    "Welcome to the Cave Game!"
  ];
  st.MainScreen.view = "Image";
  st.MainScreen.image =
    "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/map/cave-entrance.png";
  resetBosses();
}

function resetBosses() {
  masterMap.caves["1"][3].enemy.spawnRate = 1.1;
  masterMap.caves["2"][3].enemy.spawnRate = 1.1;
  masterMap.caves["3"][1].enemy.spawnRate = 1.1;
  masterMap.caves["3"][2].enemy.spawnRate = 1.1;
}
