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

    text("🪨", STONE_LEFT, height - 340);
    text("📃", PAPER_LEFT, height - 340);
    text("✂️", SCISSORS_LEFT, height - 340);
}

function mouseMoved() {
    if (selected === "") {
        const rps = mouseY >= ICON_TOP && mouseY < ICON_TOP + ICON_HEIGHT

        if (rps && mouseX >= STONE_LEFT && mouseX < STONE_LEFT + ICON_WIDTH) {
            strokeWeight(3)
            stroke("yellow")
        } else {
            strokeWeight(3)
            stroke(0)
        }
        noFill()
        rect(STONE_LEFT, ICON_TOP, ICON_WIDTH, ICON_HEIGHT);
        if (rps && mouseX >= PAPER_LEFT && mouseX < PAPER_LEFT + ICON_WIDTH) {
            strokeWeight(3)
            stroke("yellow")
        } else {
            strokeWeight(3)
            stroke(0)
        }
        noFill()
        rect(PAPER_LEFT, ICON_TOP, ICON_WIDTH, ICON_HEIGHT);

        if (rps && mouseX >= SCISSORS_LEFT && mouseX < SCISSORS_LEFT + ICON_WIDTH) {
            strokeWeight(3)
            stroke("yellow")
        } else {
            strokeWeight(3)
            stroke(0)
        }
        noFill()
        rect(SCISSORS_LEFT, ICON_TOP, ICON_WIDTH, ICON_HEIGHT);
    }
}

let selected: string = "";
let computer: string = "";

function mouseClicked() {
    if (computer === "") {
        const rps = mouseY >= ICON_TOP && mouseY < ICON_TOP + ICON_HEIGHT
        if (rps && mouseX >= STONE_LEFT && mouseX < STONE_LEFT + ICON_WIDTH) {
            selected = "🪨"
        }

        if (rps && mouseX >= PAPER_LEFT && mouseX < PAPER_LEFT + ICON_WIDTH) {
            selected = "📃"
        }

        if (rps && mouseX >= SCISSORS_LEFT && mouseX < SCISSORS_LEFT + ICON_WIDTH) {
            selected = "✂️"
        }


        let winner: string = ""


        const symbolC = Math.floor(random(1, 3))
        if (symbolC === 0) {
            computer = "🪨"
        }
        if (symbolC === 1) {
            computer = "📃"
        }
        if (symbolC === 2) {
            computer = "✂️"
        }
        if (selected === computer) {
            winner = "It's a tie"
        }
        if (selected === "🪨" && computer === "✂️") {
            winner = "You win"
        }
        if (selected === "📃" && computer === "🪨") {
            winner = "You win"
        }
        if (selected === "✂️" && computer === "📃") {
            winner = "You win"
        }
        if (selected === "✂️" && computer === "🪨") {
            winner = "You lose"
        }
        if (selected === "🪨" && computer === "📃") {
            winner = "You lose"
        }
        if (selected === "📃" && computer === "✂️") {
            winner = "You lose"
        }
        if (winner === "You win") {
            fill("yellow")
            noStroke()
            text("You win", TEXT_LEFT, 450)
        }
        if (winner === "You lose") {
            fill("yellow")
            noStroke()
            text("You lose", TEXT_LEFT, 450)
        }
        if (winner === "It's a tie") {
            fill("yellow")
            noStroke()
            text("It's a tie", TEXT_LEFT, 450)
        }
    }
}