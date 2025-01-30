const circles_x: number[] = [];
const circles_y: number[] = [];
const circles_diameter: number[] = [];

let waiting_time = 3000;
let circle_interval: number;
let onecricle_invertal: number
let level_interval: number;

let points = 0;

function setup() {
  createCanvas(300, 300);
  onecricle_invertal = setInterval(addRandomCircle, 0)
  circle_interval = setInterval(addRandomCircle, waiting_time)
  if(circle_interval){
  circles_x.push(random(0, 300))
  circles_y.push(random(0, 300))
  circles_diameter.push(Math.floor(random(10, 50)))
  }
}

function draw() {
  push()
  background("black");
  for (let i = 0; i < circles_x.length; i++) {
    noFill()
    stroke("green")
    strokeWeight(2)
    circle(circles_x[i], circles_y[i], circles_diameter[i])
  }
  pop()

}

function addRandomCircle() {
  circles_x.push(random(0, 300))
  circles_y.push(random(0, 300))
  circles_diameter.push(Math.floor(random(10, 50)))
}
