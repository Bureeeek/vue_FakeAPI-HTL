import { Actor, Bounds } from "./Actor.js";

export class BouncingBall implements Actor {
  private vx = 160;
  private vy = 110;

  constructor(
    private bounds: Bounds,
    private x: number = 80,
    private y: number = 60,
    private r: number = 18,
    private color: string = "#4ea3ff"
  ) {}

  update(deltaTime: number): void {
    this.x += this.vx * deltaTime;
    this.y += this.vy * deltaTime;

    if (this.x - this.r < 0) {
      this.x = this.r;
      this.vx *= -1;
    } else if (this.x + this.r > this.bounds.width) {
      this.x = this.bounds.width - this.r;
      this.vx *= -1;
    }

    if (this.y - this.r < 0) {
      this.y = this.r;
      this.vy *= -1;
    } else if (this.y + this.r > this.bounds.height) {
      this.y = this.bounds.height - this.r;
      this.vy *= -1;
    }
  }

  render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();
  }
}
