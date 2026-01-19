import { Actor, Bounds } from "./Actor.js";

export class BouncingBall implements Actor {
  private vx = 180;
  private vy = 110;

  constructor(
    private bounds: Bounds,
    private x: number = 120,
    private y: number = 140,
    private radius: number = 18,
    private color: string = "#ff6f00",
  ) {}

  update(deltaTime: number): void {
    // Bewegung in Pixel pro Sekunde.
    this.x += this.vx * deltaTime;
    this.y += this.vy * deltaTime;

    // Links/rechts abprallen.
    if (this.x - this.radius < 0) {
      this.x = this.radius;
      this.vx *= -1;
    } else if (this.x + this.radius > this.bounds.width) {
      this.x = this.bounds.width - this.radius;
      this.vx *= -1;
    }

    // Oben/unten abprallen.
    if (this.y - this.radius < 0) {
      this.y = this.radius;
      this.vy *= -1;
    } else if (this.y + this.radius > this.bounds.height) {
      this.y = this.bounds.height - this.radius;
      this.vy *= -1;
    }
  }

  render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}
