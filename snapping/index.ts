function setup() {
  createCanvas(200, 200);
  background("lightblue");
}

function mouseMoved() {

  const snap = 40; 
  const markerSize = 10;

  background("lightblue");

  fill("black")
  text(`${mouseX} / ${mouseY}`, 5, height-5)

  const x:number=
  Math.round(mouseX/40)*40

  const y:number=
  Math.round(mouseY/40)*40
  
  stroke("white")
  strokeWeight(4)
line(x, y, x , y - 15)
  line(x, y, x , y + 15)
  line(x, y, x - 15, y )
  line(x, y, x + 15, y )
  }

