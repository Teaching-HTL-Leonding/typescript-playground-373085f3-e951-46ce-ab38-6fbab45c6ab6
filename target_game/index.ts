let x = 0
let y = 0
let xx = 0
let yy = 0
let d1 = 100
let d2 = 140

let isDragging = false

function setup() {
  createCanvas(800, 600);
  x = random(50, 750)
  y = random(50, 550)
  xx = random(50, 750)
  yy = random(50, 550)

  while (distanceR(x - xx, y - yy) < 120) {
    x = random(50, 750)
    y = random(50, 550)
  }
  // <<< Add setup logic here
}

function draw() {
  background("lightgray");

  noFill()
  stroke("black")
  circle(xx, yy, d2)

  fill("blue")
  noStroke()
  circle(x, y, d1)
}

function mousePressed() {
  isDragging = phytagoras(x - mouseX, y - mouseY, d1)

}

function mouseDragged() {
  if (isDragging) {
    x = mouseX
    y = mouseY
  }
}

function mouseReleased() {
  isDragging = false
}

function phytagoras(dx: number, dy: number, d: number): boolean {
  let distance = Math.sqrt(dx * dx + dy * dy)

  if (distance <= d) {
    return true
  }
}

function distanceR(dx: number, dy: number): number {
  let distance = Math.sqrt(dx * dx + dy * dy)
  return distance
}