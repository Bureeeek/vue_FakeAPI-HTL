export class MovingBox {
    constructor(bounds, x = 0, y = 360, width = 90, height = 28, speed = 120, color = "#2e7d32") {
        this.bounds = bounds;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.color = color;
    }
    update(deltaTime) {
        this.x += this.speed * deltaTime;
        if (this.x > this.bounds.width) {
            this.x = -this.width;
        }
    }
    render(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
