const WIDTH = 500;
const HEIGHT = 300;
const MARGIN = 50;

const wordToGuess = "apple";

function setup() {
  createCanvas(WIDTH, HEIGHT);
  background("black");
  textAlign(CENTER, CENTER);
  colorMode(HSB);
  angleMode(DEGREES);

for(let i = 0; i < wordToGuess.length; i ++){
  let x = random (50, 450)
  let y = random (50, 250)
  let a = random (-90, 90)
  let tc = random (0, 360)
  let c = random (50, 200)

translate(x,y)
fill(tc, 100, 100)
rotate(a)
textSize(c)
text(wordToGuess[i], 0, 0)
}
}

function guess(textInput: string) {
  fill("white");

  if (textInput === wordToGuess) {
    background("green");
    textSize(75);
    text("Correct!", WIDTH / 2, HEIGHT / 2);
  } else {
    background("red");
    textSize(50);
    text(`Wrong!\nIt was "${wordToGuess}"`, WIDTH / 2, HEIGHT / 2);
  }
}
