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

let y = MARGIN
while(y <= 375){
  stroke("yellow")
 line(MARGIN, y, mouseX, mouseY)
 y += MARGIN
}
y = MARGIN
while(y <= 375){
  stroke("yellow")
 line(375, y, mouseX, mouseY)
 y += MARGIN
}
let x = MARGIN
while(x <= 375){
  stroke("lightgreen")
 line(x, 375, mouseX, mouseY)
 x += MARGIN
}
x = MARGIN
while(x <= 375){
  stroke("lightgreen")
 line(x, MARGIN, mouseX, mouseY)
 x += MARGIN
}
}
