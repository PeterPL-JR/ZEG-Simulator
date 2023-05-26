function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function center(containerSize, elemSize) {
    return containerSize / 2 - elemSize / 2;
}

function getX(x) {
    return x - player.x + center(WIDTH, Player.PLAYER_SIZE);
}
function getY(y) {
    return y - player.y + center(HEIGHT, Player.PLAYER_SIZE);
}