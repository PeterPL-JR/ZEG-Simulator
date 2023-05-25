class Entity {
    constructor(x, y, texture) {
        this.x = x;
        this.y = y;
        this.texture = texture;
    }
    update() {
    }
    render() {
        this.texture.draw(ctx, this.x, this.y);
    }
}