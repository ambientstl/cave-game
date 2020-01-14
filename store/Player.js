export default {
  name: "Player One",
  health: {
    hp: 10,
    maxHp: 15
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
  defense: 0,
  inFight: false,
  currentEnemy: {}
};
