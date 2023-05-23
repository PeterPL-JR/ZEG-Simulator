function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function center(containerSize, elemSize) {
    return containerSize / 2 - elemSize / 2;
}