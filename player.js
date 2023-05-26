class Player extends Human {
    static PLAYER_SIZE = Human.HUMAN_SIZE;
    
    constructor(x, y) {
        super("Peter", 1, x, y);
    }
    updateMove() {
        if(keys["W"]) this.move(0, -1);
        if(keys["S"]) this.move(0, 1);
        if(keys["A"]) this.move(-1, 0);
        if(keys["D"]) this.move(1, 0);
    }
}