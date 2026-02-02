import { Game, GameFramework } from "./GameFramework.js";
import { BouncingBall } from "./actors/BouncingBall.js";
import { MovingBox } from "./actors/MovingBox.js";
class MyGame extends Game {
    constructor() {
        super(...arguments);
        this.bounds = { width: 800, height: 600 };
        this.actors = [];
    }
    init() {
        this.actors = [
            new BouncingBall(this.bounds),
            new MovingBox(this.bounds),
        ];
    }
    update(deltaTime) {
        for (const actor of this.actors) {
            actor.update(deltaTime);
        }
    }
    render(ctx) {
        for (const actor of this.actors) {
            actor.render(ctx);
        }
    }
}
const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
