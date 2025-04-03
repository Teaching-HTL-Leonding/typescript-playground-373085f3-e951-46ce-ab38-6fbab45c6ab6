let x = 0
let y = 0
let xx = 0
let yy = 0
let d1 = 100
let d2 = 140
let punkte = 0
//Wie viele mllisekunden 
let waitingTime = 1000
//Zeit
let time = 60
let timeInterval = 0

let isDragging = false

function setup() {
  createCanvas(800, 600);
  //Position vom blauen Kreis
  x = random(50, 750)
  y = random(50, 550)
  //Position vom großen Kreis
  xx = random(70, 730)
  yy = random(70, 530)

  //Wenn der blaue und große Kreis sie überschneiden, bekommt der blaue Kreis eine andere Position
  while (distanceR(x - xx, y - yy) < 120) {
    x = random(50, 750)
    y = random(50, 550)
  }

  timeInterval = setInterval(tick, waitingTime)
}

function draw() {
  background("lightgray");

  // Der große Kreis, indem man den blauen Kreis hineingibt und dann Punkte bekommt
  noFill()
  stroke("black")
  circle(xx, yy, d2)

  //Der blaue Kreis, der dann bewegt wird
  fill("blue")
  noStroke()
  circle(x, y, d1)

  //Hier werde die Punkte und die Zeit anggeben
  textSize(20)
  fill("black")
  noStroke()
  text(`Score: ${punkte}`, 10, 580)
  text(`Time:${time}`, 700, 580)

  // Wenn die Zeit um ist, ist das Spiel vorbei
  if (time <= 0) {
    gameover()
    fill("lightgrey")
    rect(0, 0, 800, 600)
    textSize(100)
    fill("black")
    text(`Game Over!\n Final Score:${punkte}`, 100, 200)
  }
}

//Diese Funktion gibt an wenn man mit der Mause klickt und der Mausezeiger im Kreis ist, 
//wird isDragging true
function mousePressed() {
  isDragging = phytagoras(x - mouseX, y - mouseY, d1)

}
//Wenn isDragging true ist kann man den Kreis bewegen wo man will
function mouseDragged() {
  if (isDragging) {
    x = mouseX
    y = mouseY
  }
}
//Wenn man die Maus los lässt ist isDragging wieder false und
//man kann ich nicht mit der Maus bewegen. Falls der Kreis im anderen Kreis ist
//bekommt man einen Punkt
function mouseReleased() {
  isDragging = false
  if (distanceR(x - xx, y - yy) < 20) {
    xx = random(70, 730)
    yy = random(70, 530)
    punkte++
  }
}

// Mit dieser funktion kann man den Phytagoras aussrechen. Hier wird die Entfernung(distance)
//ausgerechnet. Wenn die entfernung kleiner als den gegebenen Parameter "d", der den Durchmesser
//bestimmt, dann wir true zurückgegeben
function phytagoras(dx: number, dy: number, d: number): boolean {
  let distance = Math.sqrt(dx * dx + dy * dy)

  if (distance <= d) {
    return true
  }
}

//Hier passiert da sselbe, nur dass die Entfernung zurückgegeben
function distanceR(dx: number, dy: number): number {
  let distance = Math.sqrt(dx * dx + dy * dy)
  return distance
}

// Diese Funktion verringert die Zeit
function tick() {
  time--
}

// Diese Funktion ermöglicht, dass das Spiel beendet wird
function gameover() {
  clearInterval(timeInterval)
}