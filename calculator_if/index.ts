const MARGIN_NUM = 10;

let num: number = 0;          // Current number entered by the user
let lineHeight: number = 0;   // Height of a line of the responsive layout
let cellWidth: number = 0;    // Width of a cell of the responsive layout

function setup() {
    createCanvas(300, 600);
    lineHeight = height / 5;
    cellWidth = width / 3;
}

function draw() {
    background("lightgray");
    fill(0)
    strokeWeight(2)
    line(0, 120, 300, 120)

    fill(0)
    strokeWeight(2)
    line(0, 240, 300, 240)

    fill(0)
    strokeWeight(2)
    line(0, 360, 300, 360)

    fill(0)
    strokeWeight(2)
    line(0, 480, 300, 480)

    fill(0)
    strokeWeight(2)
    line(100, 120, 100, 480)

    fill(0)
    strokeWeight(2)
    line(200, 120, 200, 600)

    fill("white")
    strokeWeight(2)
    rect(10, 10, 280, 100)

    textSize(80)
    fill(0)
    strokeWeight(0)
    text("0", 80, 560)

    textSize(80)
    fill(0)
    strokeWeight(0)
    text("1", 30, 450)

    textSize(80)
    fill(0)
    strokeWeight(0)
    text("2", 130, 450)

    textSize(80)
    fill(0)
    strokeWeight(0)
    text("3", 230, 450)

    textSize(80)
    fill(0)
    strokeWeight(0)
    text("4", 30, 330)

    textSize(80)
    fill(0)
    strokeWeight(0)
    text("5", 130, 330)

    textSize(80)
    fill(0)
    strokeWeight(0)
    text("6", 230, 330)

    textSize(80)
    fill(0)
    strokeWeight(0)
    text("7", 30, 210)

    textSize(80)
    fill(0)
    strokeWeight(0)
    text("8", 130, 210)

    textSize(80)
    fill(0)
    strokeWeight(0)
    text("9", 230, 210)

    textSize(80)
    fill(0)
    strokeWeight(0)
    text("C", 230, 560)

}


function mouseClicked() {
const num7 = 
noFill()
noStroke()
rect(0, 120, 100, 120)

const num8 = 
noFill()
noStroke()
rect(100, 120, 100, 120)

const num9 = 
noFill()
noStroke()
rect(200, 120, 100, 120)

const num4 = 
noFill()
noStroke()
rect(0, 240, 100, 120)

const num5 = 
noFill()
noStroke()
rect(100, 240, 100, 120)

const num6 = 
noFill()
noStroke()
rect(200, 240, 100, 120)

const num1 = 
noFill()
noStroke()
rect(0, 360, 100, 120)

const num2 = 
noFill()
noStroke()
rect(100, 360, 100, 120)

const num3 = 
noFill()
noStroke()
rect(200, 240, 100, 120)

const num0 = 
noFill()
noStroke()
rect(0, 480, 200, 120)
}