const circles_x: number[] = [];
const circles_y: number[] = [];
const circles_diameter: number[] = [];

let waiting_time = 3000;
let circle_interval: number;
let level_interval: number;

let points = 0;

function setup() {
  createCanvas(300, 300);

  // <<< Add code here
}

function draw() {
  background("black");

  // <<< Add code here
}

function addRandomCircle() {
  circles_diameter.push(Math.floor(random(10, 50)))
  for (let i = 0; i < circle_interval; i++) {
    circle(circles_x[i], circles_y[i], circles_diameter[i])
  }
}