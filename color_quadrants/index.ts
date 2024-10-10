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
    const canvasheight: number = 200
    const canvaswidth: number = 400

    fill("black")
    rect(100, 75, 200, 50)

    let message: string

    if (mouseX < canvaswidth / 2 && mouseY < canvasheight / 2) {
        message = "Yellow"
    } else if (mouseX >= canvaswidth / 2 && mouseY < canvasheight / 2) {
        message = "Green"
    } else if (mouseX > canvaswidth / 2 && mouseY > canvasheight / 2) {
        message = "Red"
    } else {
        message = "blue"
    }

    fill("white")
    textSize(30)
    text(message, 160, height - 90)
}
