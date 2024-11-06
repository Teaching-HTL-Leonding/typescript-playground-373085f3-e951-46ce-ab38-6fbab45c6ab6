let num1 = 0
let num2 = 0
let num3 = 0
let num4 = 0
let num = 0;

function setup() {
  num = Math.floor(random(0, 16));

  createCanvas(400, 300);
  background("black");

  noStroke()
  fill("yellow")
  textSize(50)
  text(`${num} in Binary? `, 70, height - 230)

  noFill()
  strokeWeight(2)
  stroke("yellow")
  rect(30, 100, 70, 100)
  rect(120, 100, 70, 100)
  rect(210, 100, 70, 100)
  rect(300, 100, 70, 100)

  fill("Yellow")
  text(num4, 53, 165)
  text(num3, 143, 165)
  text(num2, 233, 165)
  text(num1, 323, 165)
}

function mouseClicked() {
  if (mouseX > 30 && mouseX <= 100 && mouseY > 100 && mouseY <= 200) {
    if (num4 === 1) {
      num4 = 0
    } else { num4 = 1 }
  } if (mouseX > 120 && mouseX <= 190 && mouseY > 100 && mouseY <= 200) {
    if (num3 === 1) {
      num3 = 0
    } else { num3 = 1 }
  } if (mouseX > 210 && mouseX <= 280 && mouseY > 100 && mouseY <= 200) {
    if (num2 === 1) {
      num2 = 0
    } else { num2 = 1 }
  } if (mouseX > 300 && mouseX <= 370 && mouseY > 100 && mouseY <= 200) {
    if (num1 === 1) {
      num1 = 0
    } else { num1 = 1 }
  }

  let guessed = num4 * Math.pow(2, 0)
  guessed += num3 * Math.pow(2, 1)
  guessed += num2 * Math.pow(2, 2)
  guessed += num1 * Math.pow(2, 3)

  let color = "yellow"
  if (guessed === num) {
    color = "lightgreen"

    textSize(50)
    fill("lightgreen")
    text("Correct", width / 2 - 90, 270)
  }

  fill(0)
  strokeWeight(2)
  stroke(color)
  rect(30, 100, 70, 100)
  rect(120, 100, 70, 100)
  rect(210, 100, 70, 100)
  rect(300, 100, 70, 100)

  fill(color)
  noStroke()
  text(num4, 53, 165)
  text(num3, 143, 165)
  text(num2, 233, 165)
  text(num1, 323, 165)
}