const circles_x: number[] = [];
const circles_y: number[] = [];
const circles_diameter: number[] = [];
const xx: number[] = []
const yy: number[] = []
const dd: number[] = []

let waiting_time = 3000;
let circle_interval: number;
let level_interval: number;

let points = 0;

function setup() {
  createCanvas(300, 300);
  circle_interval = setInterval(addRandomCircle, waiting_time)
  circle_interval = setInterval(addOneCircle, 0)
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
  for (let i = 0; i <= 0; i++) {
    noFill()
    stroke("green")
    strokeWeight(2)
    circle(xx[i], yy[i], dd[i])
  }
  pop()

}

function addRandomCircle() {
  circles_x.push(random(0, 300))
  circles_y.push(random(0, 300))
  circles_diameter.push(Math.floor(random(10, 50)))
}

function addOneCircle() {
  xx.push(Math.floor(random(0, 300)))
  yy.push(Math.floor(random(0, 300)))
  dd.push(Math.floor(random(10, 50)))
}

function isInside(){

}