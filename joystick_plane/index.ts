let fighter: p5.Image;

const fighterImageWidth = 475;
const fighterImageHeight = 724;
const fighterDisplayHeight = 200;
const fighterDisplayWidth = fighterDisplayHeight * (fighterImageWidth / fighterImageHeight);
let fighterPositionX = 0;
let fighterPositionY = 0;

let x = 250
let y = 450

let isDragging = false


function preload() {
  fighter = loadImage("https://cddataexchange.blob.core.windows.net/images/Spaceship.png");
}

function setup() {
  createCanvas(500, 500);


}

function draw() {
  background("lightblue");

  const speedx = (x - 250) / 5
  const speedy = (y - 450) / 5

  if (fighterPositionX >= -250 && fighterPositionX <= 250) {
    fighterPositionX += speedx
  }
  if (fighterPositionY >= -250 && fighterPositionY <= 250) {
    fighterPositionY += speedy
  } 

  push();
  imageMode(CENTER);
  translate(width / 2 + fighterPositionX, height / 2 + fighterPositionY);
  image(fighter, 0, 0, fighterDisplayWidth, fighterDisplayHeight);
  pop();


  stroke("red")
  fill("white")
  circle(250, 450, 100)

  fill(0)
  stroke("black")
  circle(x, y, 20)

  textSize(15)
  fill("black")
  noStroke()
  text(`Fighterposition: ${Math.round(fighterPositionX)},${Math.round(fighterPositionY)}`, 10, 480)
  text(`Speed: ${Math.round(speedx)},${Math.round(speedy)}`, 10, 450)

  text(`${mouseX}  ${mouseY}`, 10, 100)
}

function mousePressed() {
  console.log('mousePressed')
  isDragging = phytagoras()


}

function mouseDragged() {
  if (isDragging) {
    x = mouseX
    y = mouseY
  }
  console.log('mouseDragged')

}

function mouseReleased() {
  console.log('mouseReleased')

  isDragging = false
}

function phytagoras(): boolean {
  const dx = x - mouseX
  const dy = y - mouseY
  let distance = Math.sqrt(dx * dx + dy * dy)

  if (distance <= 10) {
    return true
  }
}    