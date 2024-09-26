function setup() {
  createCanvas(500, 500);
  background("lightblue");
}
let x = 10
let y = 10

function mouseMoved() {
  background("lightblue");
  x++;
  noFill();
  strokeWeight(2);
  circle(mouseX, mouseY, 50,);
  circle(mouseX, mouseY, 25);

  line(mouseX, mouseY, mouseX, mouseY - 40)
  line(mouseX, mouseY, mouseX, mouseY + 40)

  line(mouseX, mouseY, mouseX - 40, mouseY)
  line(mouseX, mouseY, mouseX + 40, mouseY)

}
