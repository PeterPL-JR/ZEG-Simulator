const TEX_DEFAULT = 0;

const TEX_MOVE_1 = 1;
const TEX_MOVE_2 = 2;

class Human extends Mob {
    static HUMAN_SIZE = 96;
    static HUMAN_TEX_SIZE = 16;

    static SPEED = 4;

    constructor(name, index, x, y) {
        super(x, y, PATH_HUMAN + `player${index}.png`, Human.HUMAN_TEX_SIZE);

        this.name = name;
        this.index = index;

        this.speed = Human.SPEED;
    }
}