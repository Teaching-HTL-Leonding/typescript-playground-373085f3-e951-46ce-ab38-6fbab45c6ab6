const TOP_MARGIN = 80;
const SPHERE_DIAMETER = 30;
const INITIAL_TRIANGLE_BASE_WIDTH = 100;
const SIZE_INCREASE_BY_LAYER = 0.5;
const HEIGHT_TO_WIDTH_RATIO = 0.5;
const NUMBER_OF_LAYERS = 4;
const TRUNK_WIDTH = 50;
const TRUNK_HEIGHT = 50;

function setup() {
  createCanvas(500, 500);
  background("black");
  fill("green");
  noStroke();

  const TOP_MARGIN = 80;
  const SPHERE_DIAMETER = 30;
  const INITIAL_TRIANGLE_BASE_WIDTH = 100;
  const SIZE_INCREASE_BY_LAYER = 0.5;
  const HEIGHT_TO_WIDTH_RATIO = 0.5;
  const NUMBER_OF_LAYERS = 4;
  const TRUNK_WIDTH = 50;
  const TRUNK_HEIGHT = 50;

  fill("brown")
  rect(width / 2 - 25, 350, TRUNK_WIDTH, TRUNK_HEIGHT)

  for (let p = 0; p < 2; p++) {
    resetMatrix();
    translate(width / 2, TOP_MARGIN + 50);
    for (let i = 0; i <= 4; i++) {
      if (p === 0) {
        triangle(-100 / 2, 0, 0, -50, 50, 0)
      } else {
        fill(Math.floor(random(0, 255)), Math.floor(random(0, 255)), Math.floor(random(0, 255)));
        circle(-100 / 2, 15, 30);
        circle(50, 15, 30);
      }
    }
  }
}