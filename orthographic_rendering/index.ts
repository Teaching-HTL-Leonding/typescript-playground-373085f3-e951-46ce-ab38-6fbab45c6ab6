const RAILROAD_WIDTH = 225;
const RAILROAD_HEIGHT = 160;

const WAGON_WIDTH = 160;
const WAGON_HEIGHT = 113;

let railroad: p5.Image;
let wagon: p5.Image;

const BASE_URL = "https://cddataexchange.blob.core.windows.net/images/trains";

function setup() {
    createCanvas(800, 550);
    railroad = loadImage(`${BASE_URL}/railroad-straight.png`);
    wagon = loadImage(`${BASE_URL}/train-carrige-wood.png`)
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

    // <<< For task 2, add another loop here

    // Draw five railroad segments
    for (let i = 0; i < 5; i++) {
        drawRailroad(i);
    }

    // <<< Add code to draw six train wagons
}

/** Draw a railroad segment */
function drawRailroad(ix: number) {
    image(railroad, -RAILROAD_WIDTH * ix, RAILROAD_HEIGHT * ix, railroad.width, railroad.height);

}

function drawWagon(ix: number) {
    image(railroad, -WAGON_WIDTH * ix, WAGON_HEIGHT * ix, wagon.width, wagon.height);

}
