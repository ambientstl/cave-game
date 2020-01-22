import { GameMap, HiddenMap } from "../maps";
import { Enemy } from "../enemies";
import { Boss } from "../enemies";

// ENTRANCE
const caveEntrance = new GameMap(
  "caveEntrance",
  "Cave Entrance",
  "You stand before the entrances to THREE CAVES.",
  1,
  {
    spawnRate: 0,
    spawn: () => false
  },
  null
);

// CAVE ONE
const caveOneFrontCorridor = new GameMap(
  "caveOneFrontCorridor",
  "Cave One Front Corridor",
  "A long corridor with BATS",
  5,
  {
    spawnRate: 0.65,
    spawn: () =>
      new Enemy(
        "bat",
        "Bat",
        1,
        1,
        0.33,
        "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/enemies/bat.png"
      )
  },
  1
);
const caveOneFrontRoom = new GameMap(
  "caveOneFrontRoom",
  "Cave One Front Room",
  "A cavernous room with a CAULDRON",
  3,
  {
    spawnRate: 0,
    spawn: () => false
  },
  1
);

const caveOneBackCorridor = new GameMap(
  "caveOneBackCorridor",
  "Cave One Back Corridor",
  "A long corridor with BATS",
  5,
  {
    spawnRate: 0.65,
    spawn: () =>
      new Enemy(
        "bat",
        "Bat",
        1,
        1,
        0.33,
        "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/enemies/bat.png"
      )
  },
  1
);
const caveOneBackRoom = new GameMap(
  "caveOneBackRoom",
  "Cave One Back Room",
  "A cavernous room with a sleeping BEAR",
  3,
  {
    spawnRate: 1.1,
    spawn: () =>
      new Boss(
        "bear",
        "Bear",
        40,
        20,
        1.1,
        "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/enemies/bear-head.png",
        10
      )
  },
  1
);

// CAVE TWO
const caveTwoFrontCorridor = new GameMap(
  "caveTwoFrontCorridor",
  "Cave Two Front Corridor",
  "A long corridor with GOBLINS",
  5,
  {
    spawnRate: 0.65,
    spawn: () =>
      new Enemy(
        "goblin",
        "Goblin",
        5,
        3,
        0.5,
        "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/enemies/imp-laugh.png"
      )
  },
  2
);
const caveTwoFrontRoom = new GameMap(
  "caveTwoFrontRoom",
  "Cave Two Front Room",
  "An empty cavernous room",
  3,
  {
    spawnRate: 0,
    spawn: () => false
  },
  2
);

const caveTwoBackCorridor = new GameMap(
  "caveTwoBackCorridor",
  "Cave Two Back Corridor",
  "A long corridor with GOBLINS",
  5,
  {
    spawnRate: 0.65,
    spawn: () =>
      new Enemy(
        "goblin",
        "Goblin",
        5,
        3,
        0.5,
        "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/enemies/imp-laugh.png"
      )
  },
  2
);
const caveTwoBackRoom = new GameMap(
  "caveTwoBackRoom",
  "Cave Two Back Room",
  "A cavernous room with a CAULDRON",
  3,
  {
    spawnRate: 1.1,
    spawn: () =>
      new Boss(
        "witch",
        "Witch",
        20,
        10,
        1.1,
        "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/enemies/witch-face.png",
        10
      )
  },
  2
);

// CAVE THREE
const caveThreeFrontCorridor = new GameMap(
  "caveThreeFrontCorridor",
  "Cave Three Front Corridor",
  "A long empty corridor",
  5,
  {
    spawnRate: 0,
    spawn: () => false
  },
  3
);
const caveThreeFrontRoom = new GameMap(
  "caveThreeFrontRoom",
  "Cave Three Front Room",
  "An empty cavernous room",
  3,
  {
    spawnRate: 1.1,
    spawn: () =>
      new Boss(
        "skeleton",
        "Skeleton",
        50,
        25,
        1.1,
        "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/enemies/haunting.png",
        15
      )
  },
  3
);
const caveThreeBackRoom = new GameMap(
  "caveThreeBackRoom",
  "Cave Three Back Room",
  "A cavernous room with a CAULDRON",
  3,
  {
    spawnRate: 0,
    spawn: () =>
      new Boss(
        "dragon",
        "Dragon",
        200,
        100,
        1.1,
        "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/enemies/spiked-dragon-head.png",
        30
      )
  },
  3
);

// HIDDEN PASSAGES
const hiddenPassage = new HiddenMap(
  "hiddenPassage",
  "Hidden Passage",
  "A dark and spooky passage",
  5,
  {
    spawnRate: 0.65,
    spawn: () =>
      new Enemy(
        "ghost",
        "Ghost",
        15,
        10,
        0.8,
        "https://raw.githubusercontent.com/ambientstl/cave-game/master/images/enemies/spectre.png"
      )
  },
  "hidden",
  caveTwoBackRoom,
  caveOneFrontRoom
);

const smokyPassage = new HiddenMap(
  "smokyPassage",
  "Smoky Passage",
  "A tight and smoky passage",
  9,
  {
    spawnRate: 0,
    spawn: () => false
  },
  "hidden",
  caveOneBackRoom,
  caveThreeBackRoom
);

export default {
  entrance: caveEntrance,
  caves: {
    1: [
      caveOneFrontCorridor,
      caveOneFrontRoom,
      caveOneBackCorridor,
      caveOneBackRoom
    ],
    2: [
      caveTwoFrontCorridor,
      caveTwoFrontRoom,
      caveTwoBackCorridor,
      caveTwoBackRoom
    ],
    3: [caveThreeFrontCorridor, caveThreeFrontRoom, caveThreeBackRoom],
    hidden: [hiddenPassage, smokyPassage]
  }
};
