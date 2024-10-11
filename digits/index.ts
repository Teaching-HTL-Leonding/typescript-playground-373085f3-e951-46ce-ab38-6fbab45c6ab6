function setup() {
  createCanvas(400, 400)
  background(0)

  const num = Math.floor(random(0, 1_000_000));

  noFill()
  strokeWeight(2)
  stroke("yellow")
  rect(40, 150, 70, 100)

  noFill()
  strokeWeight(2)
  stroke("yellow")
  rect(130, 150, 70, 100)

  noFill()
  strokeWeight(2)
  stroke("yellow")
  rect(190, 150, 70, 100)

  noFill()
  strokeWeight(2)
  stroke("yellow")
  rect(260, 150, 70, 100)

  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  text(num, width / 2, height - 20);
}
