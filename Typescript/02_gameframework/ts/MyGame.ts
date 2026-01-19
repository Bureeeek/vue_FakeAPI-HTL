// MyGame - Example implementation of Game interface
import { Actor, Bounds } from "./actors/Actor.js";
import { BouncingBall } from "./actors/BouncingBall.js";
import { MovingBox } from "./actors/MovingBox.js";
import { StaticBox } from "./actors/StaticBox.js";
import { Game, GameFramework } from "./GameFramework.js";

class MyGame extends Game {
  private actors: Actor[] = [];

  constructor(private readonly bounds: Bounds) {
    super();
  }

  init(): void {
    // Drei einfache Objekte: Ball, fahrende Box, statische Box.
    this.actors = [
      new BouncingBall(this.bounds),
      new MovingBox(this.bounds),
      new StaticBox(560, 300, 70, 40),
    ];
  }

  update(deltaTime: number): void {
    // deltaTime in Sekunden -> gleiche Geschwindigkeit bei unterschiedlichen FPS.
    for (const actor of this.actors) {
      actor.update(deltaTime);
    }
  }

  render(ctx: CanvasRenderingContext2D): void {
    // Bodenlinie fuer Orientierung.
    const groundY = this.bounds.height * 0.75;
    ctx.strokeStyle = "#9e9e9e";
    ctx.beginPath();
    ctx.moveTo(0, groundY);
    ctx.lineTo(this.bounds.width, groundY);
    ctx.stroke();

    for (const actor of this.actors) {
      actor.render(ctx);
    }
  }
}

// Canvas-Groesse in Pixeln.
const WORLD: Bounds = { width: 800, height: 600 };
const game = new MyGame(WORLD);
const framework = new GameFramework(game, WORLD.width, WORLD.height);
framework.start();
