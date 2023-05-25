class Mob extends Entity {
    static TEXTURE_FRAMES = 4;
    static TEXTURE_FRAME_SPEED = 10;

    constructor(x, y, path, size) {
        super(x, y, null);

        this.x = x;
        this.y = y;
        this.image = loadImage(path);
        this.size = size;
        this.speed = 1;

        this.moving = false;
        this.movingTime = 0;

        this.direction = DIR_LEFT;
        this.texVariant = TEX_DEFAULT;

        this.anim = new Anim(Mob.TEXTURE_FRAMES, Mob.TEXTURE_FRAME_SPEED, [TEX_MOVE_1, TEX_DEFAULT, TEX_MOVE_2, TEX_DEFAULT]);
        this.textures = [];

        this.init();
    }
    init() {
        const DIRS = 4;
        const MOVE_VARIANTS = 3;

        for(let dir = 0; dir < DIRS; dir++) {
            this.textures[dir] = [];
            for(let i = 0; i < MOVE_VARIANTS; i++) {
                let xOffset = dir * this.size;
                let yOffset = i * this.size;
                let renderSize = this.size * GLOBAL_IMG_SCALE;

                this.textures[dir][i] = new ImageTexture(this.image, renderSize, renderSize, xOffset, yOffset, this.size, this.size);
            }
        }
        this.texture = this.getTexture();
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
        this.texture = this.getTexture();

        if(!this.moving) {
            this.texVariant = TEX_DEFAULT;
            return;
        }
        this.texVariant = this.anim.getStage(this.movingTime);
    }
    getTexture() {
        return this.textures[this.direction][this.texVariant];
    }

    move(x, y) {
        this.x += x * this.speed;
        this.y += y * this.speed;
        this.moving = true;

        if(y < 0) this.direction = DIR_UP;
        if(y > 0) this.direction = DIR_DOWN;
        if(x < 0) this.direction = DIR_LEFT;
        if(x > 0) this.direction = DIR_RIGHT;
    }
}