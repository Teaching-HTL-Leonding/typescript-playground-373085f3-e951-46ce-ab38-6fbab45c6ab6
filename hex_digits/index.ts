function setup() {
  createCanvas(320, 400)
  background(0)

  const num = Math.floor(random(0, 10000));

  noFill()
  strokeWeight(2)
  stroke("yellow")
  rect(30, 150, 70, 100)
  stroke("yellow")
  rect(130, 150, 70, 100)
  stroke("yellow")
  rect(230, 150, 70, 100)

  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  text(num, width / 2, height - 20)

  textSize(50)
  fill("Yellow")
  let hex1 = num % 16
  if (hex1 === 10) {
    text('A', 60, 200)
  } else if (hex1 === 11) {
    text('B', 60, 200)
  } else if (hex1 === 12) {
    text('C', 60, 200)
  } else if (hex1 === 13) {
    text('D', 60, 200)
  } else if (hex1 === 14) {
    text('E', 60, 200)
  } else if (hex1 === 15) {
    text('F', 60, 200)
  } else {
    text(hex1, 60, 200)
  }

  textSize(50)
  fill("Yellow")
  let hex2 = Math.floor(num / 16) % 16
  if (hex2 === 10) {
    text('A', 160, 200)
  } else if (hex2 === 11) {
    text('B', 160, 200)
  } else if (hex2 === 12) {
    text('C', 160, 200)
  } else if (hex2 === 13) {
    text('D', 160, 200)
  } else if (hex2 === 14) {
    text('E', 160, 200)
  } else if (hex2 === 15) {
    text('F', 160, 200)
  } else {
    text(hex2, 160, 200)
  }

  textSize(50)
  fill("Yellow")
  let hex3 = Math.floor(num /256) % 16
  if (hex3 === 10) {
    text('A', 260, 200)
  } else if (hex3 === 11) {
    text('B', 260, 200)
  } else if (hex3 === 12) {
    text('C', 260, 200)
  } else if (hex3 === 13) {
    text('D', 260, 200)
  } else if (hex3 === 14) {
    text('E', 260, 200)
  } else if (hex3 === 15) {
    text('F', 260, 200)
  } else {
    text(hex3, 260, 200)
  }
}