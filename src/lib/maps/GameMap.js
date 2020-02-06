export default class GameMap {
  constructor(id, name, description, length, enemy, cave) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.length = length;
    this.enemy = enemy;
    this.cave = cave;
  }
}
