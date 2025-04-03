let x = 0
let y = 0
let xx = 0
let yy = 0

let isDragging = false

function setup() {
  createCanvas(800, 600);
  x = random(50, 750)
  y = random(50, 550)
  xx = random(50, 750)
  yy = random(50, 550)



  // <<< Add setup logic here
}

function draw() {
  background("lightgray");

  noFill()
  stroke("black")
  circle(xx, yy, 140)

  fill("blue")
  noStroke()
  circle(x, y, 100)
}

function mousePressed() {
  isDragging = phytagoras(x - mouseX, y - mouseY, 50)

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

