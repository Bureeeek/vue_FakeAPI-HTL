export class BouncingBall {
    constructor(bounds, x = 120, y = 140, radius = 18, color = "#ff6f00") {
        this.bounds = bounds;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.vx = 180;
        this.vy = 110;
    }
    update(deltaTime) {
        // Bewegung in Pixel pro Sekunde.
        this.x += this.vx * deltaTime;
        this.y += this.vy * deltaTime;
        // Links/rechts abprallen.
        if (this.x - this.radius < 0) {
            this.x = this.radius;
            this.vx *= -1;
        }
        else if (this.x + this.radius > this.bounds.width) {
            this.x = this.bounds.width - this.radius;
            this.vx *= -1;
        }
        // Oben/unten abprallen.
        if (this.y - this.radius < 0) {
            this.y = this.radius;
            this.vy *= -1;
        }
        else if (this.y + this.radius > this.bounds.height) {
            this.y = this.bounds.height - this.radius;
            this.vy *= -1;
        }
    }
    render(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
}
