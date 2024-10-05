function setup() {
    createCanvas(400, 200);
    background("black");
    noStroke();

    fill("gold")
    rect(0, 0, 135, 130)

    fill("green")
    rect(135, 0, 135, 130)

    fill("red")
    rect(270, 0, 140, 130)
}

function mouseClicked() {
    let message: string

    if (mouseX < width / 3) {
        message = "Yellow"
    } else if (mouseX < width / 3 * 2) {
        message = "Green"
    } else {
        message = "Red"
    }

    fill("black")
    rect(0, 130, 400, 200)

    fill("white")
    textSize(30)
    text(message, 150, height - 25)
}

