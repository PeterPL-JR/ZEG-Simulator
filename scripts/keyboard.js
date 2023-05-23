const keys = [];

const DIR_LEFT = 1;
const DIR_RIGHT = 0;

const DIR_UP = 3;
const DIR_DOWN = 2;

function initKeyboard() {
    document.body.onkeydown = function(event) {
        keyDown(event);
    }
    document.body.onkeyup = function(event) {
        keyUp(event);
    }
}

function keyDown(event) {
    keys[event.key.toUpperCase()] = true;
}
function keyUp(event) {
    keys[event.key.toUpperCase()] = false;
}