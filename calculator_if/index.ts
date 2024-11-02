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
    line(0, 240, 300, 240)
    line(0, 360, 300, 360)
    line(0, 480, 300, 480)
    line(100, 120, 100, 480)
    line(200, 120, 200, 600)

    fill("white")
    strokeWeight(2)
    rect(10, 10, 280, 100)

    textSize(60)
    fill(0)
    strokeWeight(0)
    text("0", 100, 550)
    text("1", 50, 430)
    text("2", 150, 430)
    text("3", 250, 430)
    text("4", 50, 310)
    text("5", 150, 310)
    text("6", 250, 310)
    text("7", 50, 190)
    text("8", 150, 190)
    text("9", 250, 190)
    text("C", 250, 550)

  textAlign(RIGHT, CENTER);
    text(num, width - MARGIN_NUM * 2, lineHeight / 2);

    textAlign(CENTER, CENTER);

}

function mouseClicked() {
    if (mouseY > lineHeight && mouseY <= height && mouseX >= 0 && mouseX <= width) {
        let clickY = Math.floor((mouseY - lineHeight) / lineHeight)
        let clickX = Math.floor(mouseX / cellWidth)

        let digit: number = -1
        if (clickY === 0) {
            if (clickX === 0) { digit = 7 }
            else if (clickX === 1) { digit = 8 }
            else if (clickX === 2) { digit = 9 }
        } else if (clickY === 1) {
            if (clickX === 0) { digit = 4 }
            else if (clickX === 1) { digit = 5 }
            else if (clickX === 2) { digit = 6 }
        } else if (clickY === 2) {
            if (clickX === 0) { digit = 1 }
            else if (clickX === 1) { digit = 2 }
            else if (clickX === 2) { digit = 3 }
        } else if (clickX !== 2) { digit = 0 }

        if (digit === -1) { num = 0 } else {
            const currentnum = num
            num = num * 10 + digit
            if (num >= 100000000) {
                num = currentnum
            }
        }
    }
}