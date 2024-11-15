const SIZE = 400;  // Canvas size (square)
const MARGIN = 25; // Margin between the edges and the rays.
// This is also the distance between the rays.

function setup() {
  createCanvas(SIZE, SIZE);
  background("black");
}

function mouseMoved() {
  background("black");
  strokeWeight(2);

  for (let xy = MARGIN; xy <= 375; xy += MARGIN) {
    stroke("yellow")
    line(MARGIN, xy, mouseX, mouseY)

    stroke("yellow")
    line(375, xy, mouseX, mouseY)

    stroke("lightgreen")
    line(xy, 375, mouseX, mouseY)

    stroke("lightgreen")
    line(xy, MARGIN, mouseX, mouseY)
  }
}