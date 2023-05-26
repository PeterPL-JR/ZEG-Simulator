const TEX_DEFAULT = 0;

const TEX_MOVE_1 = 1;
const TEX_MOVE_2 = 2;

class Human extends Mob {
    static HUMAN_TEX_SIZE = 16;
    static HUMAN_SIZE = Human.HUMAN_TEX_SIZE * GLOBAL_IMG_SCALE;

    static SPEED = 4;

    constructor(name, index, x, y) {
        super(x, y, PATH_HUMAN + `player${index}.png`, Human.HUMAN_TEX_SIZE);

        this.name = name;
        this.index = index;

        this.speed = Human.SPEED;
    }

    update() {
        super.update();
    }

    updateMove() {
        
    }

    startBehaviour() {
        let DO_BEHAVIOUR = 3;

        let behaviour = getRandom(0, DO_BEHAVIOUR);
        if(!behaviour) {
            this.startBehaviour();
            return;
        }   
        
        const MIN_INTERVAL_TIME = 500;
        const MAX_INTERVAL_TIME = 3000;

        let randomTime = getRandom(MIN_INTERVAL_TIME, MAX_INTERVAL_TIME);
        setTimeout(this.#randBehaviour.bind(this), randomTime);
    }
    #randBehaviour() {
        console.log(this.x, this.y);
    }
}