import { Actor } from "./Actor.js";

export class StaticBox implements Actor {
  constructor(
    private x: number,
    private y: number,
    private width: number,
    private height: number,
    private color: string = "#f4d03f",
  ) {}

  update(_deltaTime: number): void {
    // Statisches Objekt, keine Bewegung.
  }

  render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.strokeStyle = "#000000";
    ctx.strokeRect(this.x, this.y, this.width, this.height);
  }
}
