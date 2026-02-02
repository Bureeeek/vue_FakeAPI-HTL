import { Game, GameFramework } from "./GameFramework.js";
import type { Actor, Bounds } from "./actors/Actor.js";
import { BouncingBall } from "./actors/BouncingBall.js";
import { MovingBox } from "./actors/MovingBox.js";

class MyGame extends Game {
  private bounds: Bounds = { width: 800, height: 600 };
  private actors: Actor[] = [];

  init(): void {
    this.actors = [
      new BouncingBall(this.bounds),
      new MovingBox(this.bounds),
    ];
  }

  update(deltaTime: number): void {
    for (const actor of this.actors) {
      actor.update(deltaTime);
    }
  }

  render(ctx: CanvasRenderingContext2D): void {
    for (const actor of this.actors) {
      actor.render(ctx);
    }
  }
}

const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
