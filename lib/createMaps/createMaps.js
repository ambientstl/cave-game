import { GameMap, HiddenMap } from "../maps";

// ENTRANCE
const caveEntrance = new GameMap(
  "caveEntrance",
  "Cave Entrance",
  "You stand before the entrances to THREE CAVES.",
  1,
  null,
  null
);

// CAVE ONE
const caveOneFrontCorridor = new GameMap(
  "caveOneFrontCorridor",
  "Cave One Front Corridor",
  "A long corridor with BATS",
  5,
  "bat",
  1
);
const caveOneFrontRoom = new GameMap(
  "caveOneFrontRoom",
  "Cave One Front Room",
  "A cavernous room with a CAULDRON",
  3,
  null,
  1
);

const caveOneBackCorridor = new GameMap(
  "caveOneBackCorridor",
  "Cave One Back Corridor",
  "A long corridor with BATS",
  5,
  "bat",
  1
);
const caveOneBackRoom = new GameMap(
  "caveOneBackRoom",
  "Cave One Back Room",
  "A cavernous room with a sleeping BEAR",
  3,
  null,
  1
);

// CAVE TWO
const caveTwoFrontCorridor = new GameMap(
  "caveTwoFrontCorridor",
  "Cave Two Front Corridor",
  "A long corridor with GOBLINS",
  5,
  "goblin",
  2
);
const caveTwoFrontRoom = new GameMap(
  "caveTwoFrontRoom",
  "Cave Two Front Room",
  "An empty cavernous room",
  3,
  null,
  2
);

const caveTwoBackCorridor = new GameMap(
  "caveTwoBackCorridor",
  "Cave Two Back Corridor",
  "A long corridor with GOBLINS",
  5,
  "goblin",
  2
);
const caveTwoBackRoom = new GameMap(
  "caveTwoBackRoom",
  "Cave Two Back Room",
  "A cavernous room with a CAULDRON",
  3,
  null,
  2
);

// CAVE THREE
const caveThreeFrontCorridor = new GameMap(
  "caveThreeFrontCorridor",
  "Cave Three Front Corridor",
  "A long empty corridor",
  5,
  null,
  3
);
const caveThreeFrontRoom = new GameMap(
  "caveThreeFrontRoom",
  "Cave Three Front Room",
  "An empty cavernous room",
  3,
  "skeleton",
  3
);
const caveThreeBackRoom = new GameMap(
  "caveThreeBackRoom",
  "Cave Three Back Room",
  "A cavernous room with a CAULDRON",
  3,
  null,
  3
);

// HIDDEN PASSAGES
const hiddenPassage = new HiddenMap(
  "hiddenPassage",
  "Hidden Passage",
  "A dark and spooky passage",
  5,
  "ghost",
  "hidden",
  caveTwoBackRoom,
  caveOneFrontRoom
);

const smokyPassage = new HiddenMap(
  "smokyPassage",
  "Smoky Passage",
  "A tight and smoky passage",
  9,
  null,
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
    3: [caveThreeFrontCorridor, caveThreeFrontRoom, caveThreeBackRoom]
  },
  hidden: [hiddenPassage, smokyPassage]
};
