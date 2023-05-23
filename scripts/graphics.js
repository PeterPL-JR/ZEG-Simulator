const GLOBAL_IMG_SIZE = 16;
const GLOBAL_TEX_PATH = "textures/";

const PATH_HUMAN = GLOBAL_TEX_PATH + "players/";

class ImageAsset {
    constructor(source, width, height, sx, sy, swidth, sheight) {
        this.source = source;

        this.width = width;
        this.height = height;

        this.sx = sx;
        this.sy = sy;

        this.swidth = swidth;
        this.sheight = sheight;

        this.init();
    }
    init() {
        if((typeof this.source) == "string") {
            this.image = document.createElement("img");
            this.image.onload = this.ready.bind(this);
            this.image.src = this.source;
        }
        if((typeof this.source) == "object") {
            this.image = this.source;
            this.image.onload = this.ready.bind(this);
        }
    }
    ready() {
        if(this.sx == undefined || this.sy == undefined || !this.swidth || !this.sheight) {
            this.sx = 0;
            this.sy = 0;

            this.swidth = this.image.width;
            this.sheight = this.image.height;
        }
    }
    draw(ctx, x, y) {
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(this.image, this.sx, this.sy, this.swidth, this.sheight, x, y, this.width, this.height);
    }
    drawRotated(ctx, x, y, angle) {
        let translateX = x + this.width / 2;
        let translateY = y + this.height / 2;

        ctx.translate(translateX, translateY);
        ctx.rotate(angle);
        ctx.drawImage(this.image, this.sx, this.sy, this.swidth, this.sheight, -this.width / 2, -this.height / 2, this.width, this.height);

        ctx.rotate(-angle);
        ctx.translate(-translateX, -translateY);
    }
}

function loadImage(path) {
    let image = document.createElement("img");
    image.src = path;
    return image;
}