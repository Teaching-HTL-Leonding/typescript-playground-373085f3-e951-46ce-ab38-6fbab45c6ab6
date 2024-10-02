function setup() {

    createCanvas(500,500)
    background("lightblue")
}

function mouseMoved() {
    stroke("black")
    fill("white")
    circle(mouseX, mouseY, 50)

    noStroke()
    fill("lightblue")
    rect(0, height - 30, 100, 25)
    fill("black")
    text(`X: ${mouseX} Y: ${mouseY}`, 0, height - 10)
}
