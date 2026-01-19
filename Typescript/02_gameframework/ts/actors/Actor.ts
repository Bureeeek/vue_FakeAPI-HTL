export interface Actor {
  update(deltaTime: number): void;
  render(ctx: CanvasRenderingContext2D): void;
}

export type Bounds = {
  width: number;
  height: number;
};
