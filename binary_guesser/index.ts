let num = 0;

function setup() {
  num = Math.floor(random(0, 16));

  createCanvas(400, 300);
  background("black");

noStroke()
fill("white")
text(`${num} in Binary? `, 5, height - 50)
}

function mouseClicked() {
  // <<< Add your code here
}
