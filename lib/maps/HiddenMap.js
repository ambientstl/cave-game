import GameMap from "./GameMap";

export default class HiddenMap extends GameMap {
  constructor(id, name, description, length, enemy, cave, start, end) {
    super(id, name, description, length, enemy, cave);
    this.startingMap = start;
    this.endingMap = end;
  }
}
