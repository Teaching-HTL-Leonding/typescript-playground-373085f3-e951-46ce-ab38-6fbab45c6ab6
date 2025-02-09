const circles_x: number[] = [];
const circles_y: number[] = [];
const circles_diameter: number[] = [];

let waiting_time = 3000;
let circle_interval: number;
let level_interval: number;
let s = 2

let points = 0;

function setup() {
  createCanvas(300, 300);
  addRandomCircle()
  circle_interval = setInterval(addRandomCircle, waiting_time)
  level_interval = setInterval(next, 10000)
}

function draw() {
  push()
  background("black");
  if (circles_x.length >= 10) {
    stopGame()
    return
  }
  for (let i = 0; i < circles_x.length; i++) {
    noFill()
    stroke("green")
    strokeWeight(2)
    circle(circles_x[i], circles_y[i], circles_diameter[i])
  }

  noStroke()
  textSize(20)
  fill("yellow")
  text(`Points: ${points}`, 0, 20)
  pop()

}

function addRandomCircle() {
  circles_x.push(random(0, 300))
  circles_y.push(random(0, 300))
  circles_diameter.push(Math.floor(random(10, 50)))
}

function stopGame() {
  clearInterval(circle_interval)
  clearInterval(level_interval)
  noLoop()
  fill("red")
  noStroke()
  textSize(50)
  text(`Game Over\nPoints: ${points}`, 30, 120)
}

function isInside(x: number, y: number, circle_index: number): boolean {
  let dx = x - circles_x[circle_index]
  let dy = y - circles_y[circle_index]
  let distance = Math.sqrt(dx * dx + dy * dy)
  return distance <= circles_diameter[circle_index] / 2
}

function mouseClicked() {
  for (let i = 0; i < circles_x.length; i++) {
    if (isInside(mouseX, mouseY, i)) {
      circles_x.splice(i, 1)
      circles_y.splice(i, 1)
      circles_diameter.splice(i, 1)
      points++
    }
  }
}

function next(){
  clearInterval(circle_interval)
  waiting_time /= 2
  circle_interval = setInterval(addRandomCircle, waiting_time)
}