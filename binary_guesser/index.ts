let num = 0;

function setup() {
  num = Math.floor(random(0, 16));

  createCanvas(400, 300);
  background("black");

noStroke()
fill("yellow")
textSize(50)
text(`${num} in Binary? `, 70, height - 200)

  noFill()
  strokeWeight(2)
  stroke("yellow")
  rect(30, 100, 70, 100)

  noFill()
  strokeWeight(2)
  stroke("yellow")
  rect(120, 100, 70, 100)

  noFill()
  strokeWeight(2)
  stroke("yellow")
  rect(210, 100, 70, 100)

  noFill()
  strokeWeight(2)
  stroke("yellow")
  rect(300, 100, 70, 100)
}

function mouseClicked() {
  // <<< Add your code here
}