function setup() {
  createCanvas(400, 400);
  background("lightblue");
}

function mouseClicked() {
   stroke("black")
    fill("white")
    circle(mouseX, mouseY, 50)

    noStroke()
    fill("lightblue")
    rect(0, height - 30, 100, 25)
    fill("black")
    text(`X: ${mouseX} Y: ${mouseY}`, 0, height - 390)
    if mouseClicked: text

}
