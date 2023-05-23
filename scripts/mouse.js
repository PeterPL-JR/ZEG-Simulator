const LEFT_BUTTON = 0;
const CENTER_BUTTON = 1;
const RIGHT_BUTTON = 2;

function initMouse() {
    canvas.onmousedown = function(event) {
        mouseDown(event);
    }
    canvas.onmouseup = function(event) {
        mouseUp(event);
    }
}

function mouseDown(event) {
}
function mouseUp(event) {
}