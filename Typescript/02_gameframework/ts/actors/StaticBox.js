export class StaticBox {
    constructor(x, y, width, height, color = "#f4d03f") {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    update(_deltaTime) {
        // Statisches Objekt, keine Bewegung.
    }
    render(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.strokeStyle = "#000000";
        ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
}
