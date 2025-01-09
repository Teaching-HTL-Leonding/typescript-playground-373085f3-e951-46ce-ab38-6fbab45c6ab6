// Configuration for the number of lines, and the range of colors The format is:
// <number of lines>;<min hue>-<max hue>
//
// "number of lines" is the number of lines to draw, can be between 1 and 30
// "min hue" is the minimum hue (HSB color space), can be between 0 and 360
// "max hue" is the maximum hue (HSB color space), can be between 0 and 360
const CONFIGURATION = "5;0-360";

let lineStartX: number[] = [];     // Start coordinates of line
let lineStartY: number[] = [];
let lineEndX: number[] = [];       // End coordinates of line
let lineEndY: number[] = [];
let lineColor: number[] = [];

let lineStartDx: number[] = [];    // Movement of start point per frame in X and Y direction
let lineStartDy: number[] = [];
let lineEndDx: number[] = [];      // Movement of end point per frame in X and Y direction
let lineEndDy: number[] = [];

let minColor = 0;               // Lower bound of random hue value
let maxColor = 360;             // Upper bound of random hue value

const numoflines: number[] = []

function setup() {
    createCanvas(500, 500);
    colorMode(HSB);

    for (let i = 0; i < 9; i++) {
        // Set random start and end position
        lineStartX.push(random(50, 450));
        lineStartY.push(random(50, 450));
        lineEndX.push(random(50, 450));
        lineEndY.push(random(50, 450));

        // Set random movement
        lineStartDx.push(random(0, 5));
        lineStartDy.push(random(0, 5));
        lineEndDx.push(random(0, 5));
        lineEndDy.push(random(0, 5));

        // Set random color
        lineColor.push(random(minColor, maxColor));

    }
}

function draw() {
    background("black");
    fill("white")
    noStroke()
    rect(0, 0, 80, 80)
    rect(80, 0, 80, 80)
    strokeWeight(10)
    stroke("blue")
    line(95, 40, 145, 40)
    line(40, 15, 40, 65)
    line(15, 40, 65, 40)

    for (let x = 0; x <= 99; x++) {
        push();
        // Draw current line
        stroke(lineColor[x], 100, 100);
        strokeWeight(2);
        line(lineStartX[x], lineStartY[x], lineEndX[x], lineEndY[x]);

        // Move start and end point
        lineStartX[x] += lineStartDx[x];
        lineStartY[x] += lineStartDy[x];
        lineEndX[x] += lineEndDx[x];
        lineEndY[x] += lineEndDy[x];

        // Reverse direction when edge has been reached
        if (lineStartX[x] < 0 || lineStartX[x] > width) {
            lineStartDx[x] = -lineStartDx[x];
        }
        if (lineStartY[x] < 0 || lineStartY[x] > height) {
            lineStartDy[x] = -lineStartDy[x];
        }

        if (lineEndX[x] < 0 || lineEndX[x] > width) {
            lineEndDx[x] = -lineEndDx[x];
        }
        if (lineEndY[x] < 0 || lineEndY[x] > height) {
            lineEndDy[x] = -lineEndDy[x];
        }

        pop();

    }
}

function mouseClicked() {
    if (mouseX && mouseY >= 0 && mouseX && mouseY <= 80) {
        lineStartX.push(random(50, 450));
        lineStartY.push(random(50, 450));
        lineEndX.push(random(50, 450));
        lineEndY.push(random(50, 450));
        lineStartDx.push(random(0, 5));
        lineStartDy.push(random(0, 5));
        lineEndDx.push(random(0, 5));
        lineEndDy.push(random(0, 5));
        lineColor.push(random(minColor, maxColor));
    } else if(mouseX >= 80 && mouseY >= 0 && mouseX <= 160 && mouseY <= 80){
        lineStartX.splice(random(50, 450));
        lineStartY.splice(random(50, 450));
        lineEndX.splice(random(50, 450));
        lineEndY.splice(random(50, 450));
        lineStartDx.splice(random(0, 5));
        lineStartDy.splice(random(0, 5));
        lineEndDx.splice(random(0, 5));
        lineEndDy.splice(random(0, 5));
        lineColor.splice(random(minColor, maxColor));
    }
}