import { Actor } from "./Actor.js";

export class StaticBox implements Actor {
  constructor(
    _x: number,
    _y: number,
    _width: number,
    _height: number,
    _color: string = "#f4d03f"
  ) {}

  update(_deltaTime: number): void {}
  render(_ctx: CanvasRenderingContext2D): void {}
}