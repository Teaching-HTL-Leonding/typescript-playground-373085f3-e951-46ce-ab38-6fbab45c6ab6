function setup() {
  createCanvas(580, 400)
  background(0)

  const num = Math.floor(random(0, 50));
  const binaryString = num.toString(2).padStart(6, '0')
  const xOffset = 90
    const startX = 60
  

  noFill()
  strokeWeight(2)
  stroke("yellow")
  rect(30, 150, 70, 100)

  noFill()
  strokeWeight(2)
  stroke("yellow")
  rect(120, 150, 70, 100)

  noFill()
  strokeWeight(2)
  stroke("yellow")
  rect(210, 150, 70, 100)

  noFill()
  strokeWeight(2)
  stroke("yellow")
  rect(300, 150, 70, 100)

  noFill()
  strokeWeight(2)
  stroke("yellow")
  rect(390, 150, 70, 100)

  noFill()
  strokeWeight(2)
  stroke("yellow")
  rect(480, 150, 70, 100)

  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  text(num, width / 2, height - 20);

textSize(100)
   for (let i = 0 ; i < binaryString.length ; i++) {
     text(binaryString[i], startX + i * xOffset, height - 190);
   }
}