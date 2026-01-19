import { Actor, Bounds } from "./Actor.js";

export class MovingBox implements Actor {
  constructor(
    private bounds: Bounds,
    private x: number = 0,
    private y: number = 360,
    private width: number = 90,
    private height: number = 28,
    private speed: number = 120,
    private color: string = "#2e7d32",
  ) {}

  update(deltaTime: number): void {
    this.x += this.speed * deltaTime;
    if (this.x > this.bounds.width) {
      this.x = -this.width;
    }
  }

  render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
