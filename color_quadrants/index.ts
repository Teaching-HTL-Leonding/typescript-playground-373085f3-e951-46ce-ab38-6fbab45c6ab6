function setup() {
    createCanvas(400, 200);
    background("black");
    noStroke();

    fill("gold")
    rect(0, 0, 200, 100)

    fill("blue")
    rect(0, 100, 200, 100)

    fill("green")
    rect(200, 0, 200, 100)

    fill("red")
    rect(200, 100, 200, 100)

    fill("black")
    rect(100, 75, 200, 50)
}

function mouseClicked() {
    
    fill("black")
    rect(100, 75, 200, 50)

     let message: string

    if (mouseX < width / 2  && mouseX < height / 2 * 3) {
        message = "Yellow"
    } else if (mouseX < width * 2  && mouseX < height / 1 * 2) {
        message = "Green"
    } else if(mouseX < width * 3  && mouseX < height / 1 * 2) {
        message = "Red"
    } else {
        message = "blue"
    }

    fill("white")
    textSize(30)
    text(message, 160, height - 90)
}
