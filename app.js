const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const WIDTH = 1224;
const HEIGHT = 565;

let people = [];
let time = 0;

function init() {
    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    player = new Player(center(WIDTH, Human.HUMAN_SIZE), center(HEIGHT, Human.HUMAN_SIZE));

    initKeyboard();
    initMouse();

    update();
}

function update() {
    requestAnimationFrame(update);
    time++;
    
    for(let human of people) {
        human.update();
    }
    player.update();
    render();
}
function render() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    
    for(let human of people) {
        human.render();
    }
    player.render();
}
