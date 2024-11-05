function setup() {
  const num = Math.floor(random(0, 1_000_000));
  createCanvas(700, 250)
  background(0)

  noFill()
  stroke("yellow")
  strokeWeight(2)
  rect(50, 50, 70, 100)
  rect(150, 50, 70, 100)
  rect(250, 50, 70, 100)
  rect(350, 50, 70, 100)
  rect(450, 50, 70, 100)
  rect(550, 50, 70, 100)

  textSize(60)
  fill("yellow")
  strokeWeight(1)
  text(num % 10, 570, 120)
  text(Math.floor(num / 10) % 10, 470, 120)
  text(Math.floor(num / 100) % 10, 370, 120)
  text(Math.floor(num / 1000) % 10, 270, 120)
  text(Math.floor(num / 10000) % 10, 170, 120)
  text(Math.floor(num / 100000) % 10, 70, 120)

  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  text(num, width / 2, height - 20);
}
