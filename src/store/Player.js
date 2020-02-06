export default {
  name: "Player One",
  health: {
    hp: 20,
    maxHp: 20
  },
  position: {
    currentMap: {},
    currentPosition: 1
  },
  equipment: {
    armor: [],
    potion: [1, 0],
    weapon: []
  },
  damage: 1,
  defense: 1,
  inFight: false,
  currentEnemy: {}
};
