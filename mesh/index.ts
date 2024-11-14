const SIZE = 400;  // Canvas size (square)
const MARGIN = 50; // Margin between the edges and the rays.
                  // This is also the distance between the rays.

function setup() {
  createCanvas(SIZE, SIZE);
  background("black");

  strokeWeight(1);
  stroke("lime");

let xy = MARGIN
while(xy <= 350){
  fill("lime")
  line(MARGIN, xy, 350, MARGIN)

  xy += MARGIN
}
}
