// We declare constants to avoid repeating "magic numbers". 
// These numbers are used for positioning text and icons on the canvas.
// Note that we use all-caps for constants that represent 
// configuration values to make them easy to recognize.
const TEXT_LEFT = 30;
const STONE_LEFT = 50;
const PAPER_LEFT = 175;
const SCISSORS_LEFT = 300;
const ICON_WIDTH = 100;
const ICON_TOP = 75;
const ICON_HEIGHT = 100;

function setup() {
    createCanvas(500, 490);
    background("black");

    fill("yellow");
    textSize(30);
    text("Human:", TEXT_LEFT, 50);

    fill("yellow");
    textSize(30);
    text("Computer:", TEXT_LEFT, 300);

    // Display the icons for "stone", "paper", and "scissors".
    textSize(75);

    text("🪨", STONE_LEFT, height - 315);
    text("📃", PAPER_LEFT, height - 315);
    text("✂️", SCISSORS_LEFT, height - 315);
}

function mouseMoved() {
    if (mouseX === 50 || mouseY === 75) {
        noFill()
        strokeWeight(3)
        stroke("yellow")
        rect(50, 100, 100, 100)
    } else if (mouseX === 150 || mouseY === 175) {
        noFill()
        strokeWeight(3)
        stroke(0)
        rect(50, 100, 100, 100)
    } else if (mouseX === 175 || mouseY === 75) {
        noFill()
        strokeWeight(3)
        stroke("yellow")
        rect(175, 100, 100, 100)
    } else if (mouseX === 275 || mouseY === 175) {
        noFill()
        strokeWeight(3)
        stroke(0)
        rect(175, 100, 100, 100)
    } else if (mouseX === 300 || mouseY === 75) {
        noFill()
        strokeWeight(3)
        stroke("yellow")
        rect(300, 100, 100, 100)
    } else if (mouseX === 400 || mouseY === 175) {
        noFill()
        strokeWeight(3)
        stroke(0)
        rect(300, 100, 100, 100)
    }
}