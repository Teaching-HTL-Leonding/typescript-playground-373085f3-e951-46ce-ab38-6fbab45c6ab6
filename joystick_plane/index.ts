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
  fighterPositionX += speedx
  fighterPositionY += speedy

  if(fighterPositionX <= 0 ){
    fighterPositionX = 0
  } else if(fighterPositionX >= 500 ){
    fighterPositionX = 500
  } else  if(fighterPositionY <= 0 ){
    fighterPositionY = 0
  } else  if(fighterPositionY >= 500 ){
    fighterPositionY = 500
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

}

function phytagoras(): boolean {
  const dx = x - mouseX
  const dy = y - mouseY
  let distance = Math.sqrt(dx * dx + dy * dy)

  if (distance <= 10) {
    return true
  }
}    