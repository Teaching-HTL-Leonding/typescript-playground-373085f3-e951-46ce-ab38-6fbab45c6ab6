const RAILROAD_WIDTH = 225;
const RAILROAD_HEIGHT = 160;

const WAGON_WIDTH = 160;
const WAGON_HEIGHT = 113;

let railroad: p5.Image;

let trainCars: p5.Image[] = []
/** Array of wagons for train (for base requirements) */
let train: p5.Image[] = [];

/** Array of trains on tracks (for ADVANCED requirements)
  * 
  * This is an array of arrays. The outer array contains the trains on the tracks.
  * Each inner array contains the train wagons of a single train.
  */
let trains: p5.Image[][] = [];

/** Input text for base requirements */
const TRAIN = "TLB,TCCG,TCTL,TCW,TCL,TCCR"

/** Input text for ADVANCED requirements */
const TRACKS = "TLB,TCCG,TCTL,TCW,TCL,TCCR;TEDA,TEDB,TEDB,TEDC,TEDB;TDA,TCF,TCC,TCC,TCB,TCD"

function preload() {
    railroad = loadImage(`${BASE_URL}/railroad-straight.png`)
    for (let i = 0; i < imageUrls.length; i++) {
       const image = loadImage(`${BASE_URL}/${imageUrls[i]}`)
        trainCars.push(image)
    }

    // <<< Add code to load all images (see imageUrls in wagons.ts).
    //     Add the images to the train array. After loading all image,
    //     the length of the train array must be equal to the length of imageUrls.
}

function setup() {
    createCanvas(800, 550);

    //     train array (base requirements) or the trains array (ADVANCED requirements).
}

function draw() {
    background("#f0f0f0");

    scale(0.5, 0.5);

    translate(850, -100);

    // <<< Change this code accordingly for ADVANCED requirements

    for (let i = 0; i < 5; i++) {
        drawRailroad(i);
    }

    for (let ix = 0; ix < train.length; ix++) {
        drawTrainWagon(train[ix], ix);
    }
}

function parseTrain(trainString: string): p5.Image[] {
    const result: p5.Image[] = [];

    let wagon = "";
    for (let i = 0; i < trainString.length; i++) {
        if (trainString[i] === ",") {
            result.push(trainCars[getWagonIndex(wagon)]);
            wagon = "";
        } else {
            wagon += trainString[i];
        }
    }

    result.push(trainCars[getWagonIndex(wagon)]);
    return result.reverse();
}

function getWagonIndex(wagonAbbreviation: string): number {
    for (let i = 0; i < abbreviations.length; i++) {
        if (wagonAbbreviation === abbreviations[i]) {
            return i;
        }
    }
}

/** Draw a railroad segment */
function drawRailroad(ix: number) {
    image(railroad, -RAILROAD_WIDTH * ix, RAILROAD_HEIGHT * ix, railroad.width, railroad.height);

}

/** Draw a train wagon */
function drawTrainWagon(wagon: p5.Image, ix: number) {
    image(wagon, -WAGON_WIDTH * ix, WAGON_HEIGHT * ix, wagon.width, wagon.height);
}