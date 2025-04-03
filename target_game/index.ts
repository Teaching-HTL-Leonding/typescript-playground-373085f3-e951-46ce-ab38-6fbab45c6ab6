let x = 0
let y = 0
let xx = 0
let yy = 0
let d1 = 100
let d2 = 140
let punkte = 0
let waitingTime = 60
let timeInterval = 0

let isDragging = false

function setup() {
  createCanvas(800, 600);
  x = random(50, 750)
  y = random(50, 550)
  xx = random(70, 730)
  yy = random(70, 530)

  while (distanceR(x - xx, y - yy) < 120) {
    x = random(50, 750)
    y = random(50, 550)
  }

  timeInterval = setInterval(tick, waitingTime)
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

  textSize(20)
  fill("black")
  noStroke()
  text(`Score: ${punkte}`, 10, 580)
  text(`Time:${waitingTime }`, 700, 580)
 if(waitingTime <= 0){
  gameover()
  fill("lightgrey")
  rect(0, 0, 800, 600)
  textSize(100)
  fill("black")
  text(`Game Over!\n Final Score:${punkte}`, 100, 200)
 }
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
  if (distanceR(x - xx, y - yy) < 20) {
    xx = random(70, 730)
    yy = random(70, 530)
    punkte++
  }
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

function tick(){
 waitingTime --
}

function gameover(){
  clearInterval(timeInterval)
}