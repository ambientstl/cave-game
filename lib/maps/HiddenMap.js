export default class HiddenMap extends Map {
  constructor(id, name, description, length, enemy, cave, start, end) {
    super(id, name, description, length, enemy, cave);
    this.startingMap = start;
    this.endingMap = end;
  }
}
