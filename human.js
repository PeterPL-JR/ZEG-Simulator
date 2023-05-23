const TEX_DEFAULT = 0;

const TEX_MOVE_1 = 1;
const TEX_MOVE_2 = 2;

class Human {
    static HUMAN_SIZE = 96;
    static SPEED = 4;

    static TEXTURE_FRAMES = 4;
    static TEXTURE_FRAME_SPEED = 10;

    constructor(name, index, x, y) {
        this.name = name;
        this.index = index;

        this.x = x;
        this.y = y;

        this.direction = DIR_LEFT;
        this.texVariant = TEX_DEFAULT;

        this.moving = false;
        this.movingTime = 0;
        this.anim = new Anim(Human.TEXTURE_FRAMES, Human.TEXTURE_FRAME_SPEED, [TEX_MOVE_1, TEX_DEFAULT, TEX_MOVE_2, TEX_DEFAULT]);

        this.image = loadImage(PATH_HUMAN + `player${this.index}.png`);
        this.textures = [];

        this.init();
    }

    init() {
        const DIRS = 4;
        const MOVE_VARIANTS = 3;

        for(let dir = 0; dir < DIRS; dir++) {
            this.textures[dir] = [];
            for(let i = 0; i < MOVE_VARIANTS; i++) {
                let xOffset = dir * GLOBAL_IMG_SIZE;
                let yOffset = i * GLOBAL_IMG_SIZE;
                this.textures[dir][i] = new ImageAsset(this.image, Human.HUMAN_SIZE, Human.HUMAN_SIZE, xOffset, yOffset, GLOBAL_IMG_SIZE, GLOBAL_IMG_SIZE);
            }
        }
    }
    
    update() {
        this.moving = false;
        this.updateMove();
        this.updateTexture();

        if(this.moving) {
            this.movingTime++;
        } else {
            this.movingTime = 0;
        }
    }

    updateMove() {
    }
    updateTexture() {
        if(!this.moving) {
            this.texVariant = TEX_DEFAULT;
            return;
        }
        this.texVariant = this.anim.getStage(this.movingTime);
    }

    render() {
        let texture = this.textures[this.direction][this.texVariant];
        texture.draw(ctx, this.x, this.y);
    }

    move(x, y) {
        this.x += x * Human.SPEED;
        this.y += y * Human.SPEED;
        this.moving = true;
    }
}