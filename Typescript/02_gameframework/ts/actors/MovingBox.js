export class MovingBox {
    constructor(bounds, x = 0, y = 360, w = 90, h = 28, speed = 120, color = "#2e7d32") {
        this.bounds = bounds;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.speed = speed;
        this.color = color;
    }
    update(deltaTime) {
        this.x += this.speed * deltaTime;
        if (this.x > this.bounds.width) {
            this.x = -this.w;
        }
    }
    render(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}
