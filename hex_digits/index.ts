function setup() {
  createCanvas(320, 400)
  background(0)

  const num = Math.floor(random(0, 10000));

  noFill()
  strokeWeight(2)
  stroke("yellow")
  rect(30, 150, 70, 100)

  noFill()
  strokeWeight(2)
  stroke("yellow")
  rect(130, 150, 70, 100)

  noFill()
  strokeWeight(2)
  stroke("yellow")
  rect(230, 150, 70, 100)

  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  text(num, width / 2, height - 20)

  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  textSize(100)
  const hexdigit1 = num % 16
  if (hexdigit1 === 10) {
    text('A', width / 1.2, height - 190,)
  } else if (hexdigit1 === 11) {
    text('B', width / 1.2, height - 190,)
  } else if (hexdigit1 === 12) {
    text('C', width / 1.2, height - 190,)
  } else if (hexdigit1 === 13) {
    text('D', width / 1.2, height - 190,)
  } else if (hexdigit1 === 14) {
    text('E', width / 1.2, height - 190,)
  } else if (hexdigit1 === 15) {
    text('F', width / 1.2, height - 190,)
  } else if (hexdigit1 < 10) { text(hexdigit1, width / 1.2, height - 190,) }

  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  textSize(100)
  const hexdigit2 = Math.floor(num / 16) % 16
  if (hexdigit2 === 10) {
    text('A', width / 1.9, height - 190,)
  } else if (hexdigit2 === 11) {
    text('B', width / 1.9, height - 190,)
  } else if (hexdigit2 === 12) {
    text('C', width / 1.9, height - 190,)
  } else if (hexdigit2 === 13) {
    text('D', width / 1.9, height - 190,)
  } else if (hexdigit2 === 14) {
    text('E', width / 1.9, height - 190,)
  } else if (hexdigit2 === 15) {
    text('F', width / 1.9, height - 190,)
  } else if (hexdigit2 < 10) { text(hexdigit2, width / 1.9, height - 190,) }

  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  textSize(100)
  const hexdigit3 = Math.floor(num / 256) % 16
  if (hexdigit3 === 10) {
    text('A', width / 4.9, height - 190,)
  } else if (hexdigit3 === 11) {
    text('B', width / 4.9, height - 190,)
  } else if (hexdigit3 === 12) {
    text('C', width / 4.9, height - 190,)
  } else if (hexdigit3 === 13) {
    text('D', width / 4.9, height - 190,)
  } else if (hexdigit3 === 14) {
    text('E', width / 4.9, height - 190,)
  } else if (hexdigit3 === 15) {
    text('F', width / 4.9, height - 190,)
  }
  else if (hexdigit3 < 10) {
    text(hexdigit3, width / 4.9, height - 190,)
  }
}