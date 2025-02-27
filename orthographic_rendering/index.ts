const RAILROAD_WIDTH = 225;
const RAILROAD_HEIGHT = 160;

const WAGON_WIDTH = 160;
const WAGON_HEIGHT = 113;

let railroad: p5.Image;
let wagon: p5.Image;

const BASE_URL = "https://cddataexchange.blob.core.windows.net/images/trains";

function preload() {

}
function setup() {
    createCanvas(800, 550);
    railroad = loadImage(`${BASE_URL}/railroad-straight.png`);
    wagon = loadImage(`${BASE_URL}/train-carriage-wood.png`)
    // <<< Load the image of a train wagon (train-carriage-wood.png)
}

function draw() {
    background("#f0f0f0");

    scale(0.5, 0.5);

    // Move the origin to the right, upper corner. This makes sense
    // because we must draw the images from right to left so that
    // objects that are further left are "on top" of objects on
    // the right.
    translate(850, -100);


    // Draw five railroad segments
    for (let i = 0; i < 5; i++) {
        drawRailroad(i);
    }

    for (let i = 0; i < 6; i++) {
        drawWagon(i)
    }
    for (let i = 0; i < 5; i++) {
        drawRailroad2(i);
    }

    for (let i = 0; i < 6; i++) {
        drawWagon2(i)
    }

        for (let i = 0; i < 5; i++) {
        drawRailroad3(i);
    }

    for (let i = 0; i < 6; i++) {
        drawWagon3(i)
    }
    // <<< Add code to draw six train wagons
}

/** Draw a railroad segment */
function drawRailroad(ix: number) {
    image(railroad, -RAILROAD_WIDTH * ix, RAILROAD_HEIGHT * ix, railroad.width, railroad.height);

}

function drawWagon(ix: number) {
    image(wagon, -WAGON_WIDTH * ix, WAGON_HEIGHT * ix, wagon.width, wagon.height);

}
function drawRailroad2(ix: number) {
    image(railroad, -RAILROAD_WIDTH * ix + 100, RAILROAD_HEIGHT * ix + 100 , railroad.width, railroad.height);

}

function drawWagon2(ix: number) {
    image(wagon, -WAGON_WIDTH * ix + 100, WAGON_HEIGHT * ix + 100 , wagon.width, wagon.height);

}

function drawRailroad3(ix: number) {
    image(railroad, -RAILROAD_WIDTH * ix - 100, RAILROAD_HEIGHT * ix - 100 , railroad.width, railroad.height);

}

function drawWagon3(ix: number) {
    image(wagon, -WAGON_WIDTH * ix - 100, WAGON_HEIGHT * ix - 100 , wagon.width, wagon.height);

}