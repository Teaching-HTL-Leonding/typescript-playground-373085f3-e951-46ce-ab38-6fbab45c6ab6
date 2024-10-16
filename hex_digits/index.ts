function setup() {
  createCanvas(300, 400)
  background(0)

  const num = Math.floor(random(1000, 4000));
  const hexString = num.toString(16).toUpperCase().padStart(2, '0')
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

  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  text(num, width / 2, height - 20);

textSize(100)
   for (let num = 0; num < hexString.length; num++) {
    text(hexString[num], startX + num * xOffset, height - 190);
   }
}