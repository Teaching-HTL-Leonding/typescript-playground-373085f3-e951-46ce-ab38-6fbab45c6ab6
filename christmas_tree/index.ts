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

  for (let p = 0; p < 2; p++) {
    let trianglewidth = INITIAL_TRIANGLE_BASE_WIDTH
    let triangleheight = trianglewidth / 2 
    resetMatrix()
    translate(width / 2 , triangleheight + 80)
    for (let i = 0; i <= 4; i++) {
      if(p === 0){
      fill("green")
      triangle(-trianglewidth / 2, 0, 0, -triangleheight, trianglewidth / 2, 0)
      } else{
        fill(Math.floor(random(0,255)),Math.floor(random(0,255)),Math.floor(random(0,255)))
        circle(-trianglewidth / 2, 15, 30)
        circle(triangleheight / 2,15,30)
      }
      if (i < 3) {
        translate(0, triangleheight)
        trianglewidth *= 1.5
        triangleheight =trianglewidth / 2
      }
    }
  }
  fill("brown")
  rect(-15 ,0, TRUNK_WIDTH, TRUNK_HEIGHT)
}