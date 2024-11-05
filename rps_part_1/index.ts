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

    // Display the icons for "stone", "paper", and "scissors".
    textSize(75);

    text("🪨", STONE_LEFT, height - 340);
    text("📃", PAPER_LEFT, height - 340);
    text("✂️", SCISSORS_LEFT, height - 340);
}

function mouseMoved() {
    const rps = mouseY > ICON_TOP && mouseY <= ICON_TOP + ICON_HEIGHT
   if(rps && mouseX > STONE_LEFT && mouseX < STONE_LEFT + ICON_WIDTH) {
    noFill()
    rect(STONE_LEFT, ICON_TOP, ICON_WIDTH, ICON_HEIGHT)
   }
}
