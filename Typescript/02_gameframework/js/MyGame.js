class MyGame extends Game {
  init() {}
  update(_deltaTime) {}
  render(_ctx) {}
}
const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();