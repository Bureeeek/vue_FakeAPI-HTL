export { Game, GameFramework };
class Game {
}
class GameFramework {
    constructor(game, width = 800, height = 600, canvasId = "gameCanvas") {
        this.game = game;
        this.width = width;
        this.height = height;
        this.lastFrameTime = 0;
        this.running = false;
        const existingCanvas = document.getElementById(canvasId);
        this.canvas = existingCanvas ?? document.createElement("canvas");
        this.canvas.id = canvasId;
        this.canvas.width = width;
        this.canvas.height = height;
        if (!existingCanvas)
            document.body.appendChild(this.canvas);
        const context = this.canvas.getContext("2d");
        if (!context)
            throw new Error("No 2D context");
        this.ctx = context;
    }
    clear(color = "#ffffff") {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0, 0, this.width, this.height);
    }
    start() {
        if (this.running)
            return;
        this.running = true;
        this.game.init();
        requestAnimationFrame((t) => this.loop(t));
    }
    loop(time) {
        const deltaTime = (time - this.lastFrameTime) / 1000;
        this.lastFrameTime = time;
        this.game.update(deltaTime);
        this.clear();
        this.game.render(this.ctx);
        if (this.running)
            requestAnimationFrame((t) => this.loop(t));
    }
}
