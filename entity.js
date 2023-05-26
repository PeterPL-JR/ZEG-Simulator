class Entity {
    constructor(x, y, texture) {
        this.x = x;
        this.y = y;
        this.texture = texture;
    }
    update() {
    }
    render() {
        let renderX = getX(this.x);
        let renderY = getY(this.y);
        this.texture.draw(ctx, renderX, renderY);
    }
}