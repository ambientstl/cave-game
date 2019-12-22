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

// HIDDEN PASSAGE
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

// TODO: make 'Cave 3' maps and add to masterMap

// is this the right way to export?
export const masterMap = {
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
    ]
  },
  hidden: hiddenPassage
};
