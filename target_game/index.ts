let x = 400
let y = 200
let xx = random()

let isDragging = false

function setup() {
  createCanvas(800, 600);

  // <<< Add setup logic here
}

function draw() {
  background("lightgray");

  fill("blue")
  noStroke()
  circle(x, y, 50)
}

function mousePressed() {
  // <<< Add mouse pressed logic here
}

function mouseDragged() {
  // <<< Add mouse dragged logic here
}

function mouseReleased() {
  // <<< Add mouse released logic here
}

function phytagoras(dx: number, dy: number, d: number): boolean{
  let distance = Math.sqrt(dx * dx + dy * dy)

  if(distance <= d){
    return true
  }
}
