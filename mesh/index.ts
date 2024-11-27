const SIZE = 400;  // Canvas size (square)
const MARGIN = 50; // Margin between the edges and the rays.
                   // This is also the distance between the rays.

// Use the HSB color scheme for this exercise. Draw the first rays
// (from left-upper corner) with hue 0 (=red), the next rays with
// hue 60 (yellow), the next with 120 (green), etc. Use the following
// constant for incrementing the hue value from point to point.
const color1 = 60;

function setup() {
  createCanvas(SIZE, SIZE);
  background("black");

  strokeWeight(1);
  colorMode(HSB);

  let i = MARGIN;
  let color = 0;
  while (i <= 350) {
    stroke(color, 100, 100);
    let s = MARGIN;
    while (s <= 350) {
      line(MARGIN, i, width - MARGIN, s);
      s += MARGIN;
    }

    i += MARGIN;
    color = color + color1;
  }
}

