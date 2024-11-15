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

  for (let y = MARGIN; y <= 375; y += MARGIN) {
    stroke("yellow")
    line(MARGIN, y, mouseX, mouseY)
  }

  for (let y = MARGIN; y <= 375; y += MARGIN) {
    stroke("yellow")
    line(375, y, mouseX, mouseY)
  }

  for (let x = MARGIN; x <= 375; x += MARGIN) {
    stroke("lightgreen")
    line(x, 375, mouseX, mouseY)
  }

  for (let x = MARGIN; x <= 375; x += MARGIN) {
    stroke("lightgreen")
    line(x, MARGIN, mouseX, mouseY)
  }
}