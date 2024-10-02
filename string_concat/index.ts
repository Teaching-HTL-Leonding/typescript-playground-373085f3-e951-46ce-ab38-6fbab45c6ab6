function setup() {
  createCanvas(500, 500);
  background("lightblue");
}

let mousecordinates: string = '0/0'

function mouseClicked() {
  noStroke()

  background("lightblue")
  fill(10, 1000, 580)
  circle( mouseX, mouseY, 30)
  
  mousecordinates = `${mousecordinates}, ${mouseX}, ${mouseY}`

  fill("black")
  text(mousecordinates, 5, 5, width - 10, height - 10 )
}