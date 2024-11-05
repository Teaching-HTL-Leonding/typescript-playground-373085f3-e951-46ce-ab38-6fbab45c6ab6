let num = 0;
let num1 = 0
let num2 = 0
let num3 = 0
let num4 = 0

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
  stroke("yellow")
  rect(120, 100, 70, 100)
  stroke("yellow")
  rect(210, 100, 70, 100)
  stroke("yellow")
  rect(300, 100, 70, 100)

  fill("Yellow")
  text(num4, 53, 165)
  text(num3,143, 165)
  text(num2, 233, 165)
  text(num1, 323, 165)
}

function mouseClicked() {
if(mouseX > 30 && mouseX <= 100 && mouseY > 100 && mouseY <= 200) {
  if(mum4 === 1){
    num4 = 0
  }else{ num4 = 1}
}if(mouseX > 120 && mouseX <= 190 && mouseY > 100 && mouseY <= 200) {
  let mum3 = 1
}if(mouseX > 210 && mouseX <= 280 && mouseY > 100 && mouseY <= 200) {
  let mum2 = 1
}if(mouseX > 300 && mouseX <= 370 && mouseY > 100 && mouseY <= 200) {
  let mum1 = 1
}
}