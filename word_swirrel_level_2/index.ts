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

  let wordToScramble = wordToGuess;
  let scrambleWord = "";
  while(wordToScramble.length > 0){
    let letterIndex = Math.floor(random(wordToScramble.length));
    scrambleWord += wordToScramble[letterIndex];
    wordToScramble = wordToScramble.substring(0,letterIndex)
     + wordToScramble.substring(letterIndex + 1)
}
for(let final = 0; final >= 4; final += 1){
    textAlign(CENTER,CENTER)
  fill("white")
  textSize(75)
  text(scrambleWord[final], Math.floor(random(0, WIDTH)), Math.floor(random(0, HEIGHT)))
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