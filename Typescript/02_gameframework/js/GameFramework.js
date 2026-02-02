class Game {}
class GameFramework {
  constructor(game, width = 800, height = 600, canvasId = "gameCanvas") {
    this.game = game;
    this.width = width;
    this.height = height;
    this.canvasId = canvasId;
  }
  addObject(_obj) {}
  removeObject(_obj) {}
  clearCanvas(_color = "#ffffff") {}
  start() {}
  stop() {}
  drawRect(_x, _y, _width, _height, _color = "#000000") {}
  drawCircle(_x, _y, _radius, _color = "#000000") {}
  drawText(_text, _x, _y, _color = "#000000", _fontSize = 16) {}
}