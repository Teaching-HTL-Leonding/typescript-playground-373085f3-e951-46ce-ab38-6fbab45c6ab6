function setup() {
  createCanvas(200, 200);
  background("lightblue");
}

function mouseMoved() {

  const snap = 40; 
  const markerSize = 10;

  background("lightblue");

  stroke("white")
  strokeWeight(4)
   line(mouseX, mouseY, mouseX, mouseY - 15)
  line(mouseX, mouseY, mouseX, mouseY + 15)

  stroke("white")
  strokeWeight(4)
  line(mouseX, mouseY, mouseX - 15, mouseY)
  line(mouseX, mouseY, mouseX + 15, mouseY)

  stroke("black")
  fill("white")
  text(`${mouseX} / ${mouseY}`, 5, height-5)

  const x:number=
  Math.round(mouseX/40)*40
  
}