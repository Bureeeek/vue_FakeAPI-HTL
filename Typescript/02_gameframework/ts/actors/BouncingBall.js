export class BouncingBall {
    constructor(bounds, x = 80, y = 60, r = 18, color = "#4ea3ff") {
        this.bounds = bounds;
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
        this.vx = 160;
        this.vy = 110;
    }
    update(deltaTime) {
        this.x += this.vx * deltaTime;
        this.y += this.vy * deltaTime;
        if (this.x - this.r < 0) {
            this.x = this.r;
            this.vx *= -1;
        }
        else if (this.x + this.r > this.bounds.width) {
            this.x = this.bounds.width - this.r;
            this.vx *= -1;
        }
        if (this.y - this.r < 0) {
            this.y = this.r;
            this.vy *= -1;
        }
        else if (this.y + this.r > this.bounds.height) {
            this.y = this.bounds.height - this.r;
            this.vy *= -1;
        }
    }
    render(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
    }
}
