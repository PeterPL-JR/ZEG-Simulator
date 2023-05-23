class Player extends Human {    
    constructor(x, y) {
        super("Peter", 1, x, y);
    }
    updateMove() {
        if(keys["W"]) {
            this.move(0, -1);
            this.direction = DIR_UP;
        }
        if(keys["S"]) {
            this.move(0, 1);
            this.direction = DIR_DOWN;
        }
        if(keys["A"]) {
            this.move(-1, 0);
            this.direction = DIR_LEFT;
        }
        if(keys["D"]) {
            this.move(1, 0);
            this.direction = DIR_RIGHT;
        }
    }
}