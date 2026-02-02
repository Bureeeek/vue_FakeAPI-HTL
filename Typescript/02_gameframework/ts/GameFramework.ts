export { Game, GameFramework };
export type { GameObject };

interface GameObject {
  x: number;
  y: number;
  width: number;
  height: number;
  update?: (deltaTime: number) => void;
  render?: (ctx: CanvasRenderingContext2D) => void;
}

abstract class Game {
  abstract init(): void;
  abstract update(deltaTime: number): void;
  abstract render (ctx: CanvasRenderingContext2D): void;
}

class GameFramework {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private lastFrameTime = 0;
  private running = false;

  constructor(
    private game: Game,
    private width: number = 800,
    private height: number = 600,
    canvasId: string = "gameCanvas"
  ) {
    const existingCanvas = document.getElementById(canvasId) as HTMLCanvasElement | null;
    this.canvas = existingCanvas ?? document.createElement("canvas");
    this.canvas.id = canvasId;
    this.canvas.width = width;
    this.canvas.height = height;
    if (!existingCanvas) document.body.appendChild(this.canvas);

    const context = this.canvas.getContext("2d");
    if (!context) throw new Error("No 2D context");
    this.ctx = context;
  }

  clear(color: string = "#ffffff"): void {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  start(): void {
    if (this.running) return;
    this.running = true;
    this.game.init();
    requestAnimationFrame((t) => this.loop(t));
  }

  private loop(time: number): void {
    const deltaTime = (time - this.lastFrameTime) / 1000;
    this.lastFrameTime = time;
    this.game.update(deltaTime);
    this.clear();
    this.game.render(this.ctx);
    if (this.running) requestAnimationFrame((t) => this.loop(t));
  }
}

