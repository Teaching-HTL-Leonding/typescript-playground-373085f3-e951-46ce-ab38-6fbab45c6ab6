function setup() {
  createCanvas(400, 400);
  background("lightgray");

  // Define relative sizes and positions based on canvas width and height
  const headWidth = width * 0.50; // Head size as 50% of the canvas width
  const headHeight = height * 0.50; // Head size as 50% of the canvas width
  const headX = width / 2 - headWidth / 2; // Center the head horizontally
  const headY = height / 2 - headHeight / 2; // Center the head vertically

  // Draw the robot's head
  fill("gray");
  rect(headX, headY, headWidth, headHeight);

  fill("black")
  circle(headX * 1.5, headY * 1.5, 30)

  circle(headX * 2.5, headY * 1.5, 30)

  fill("white")
  rect(headX / 0.75, headY / 0.45, headWidth / 1.5, headHeight / 6)

  line(headX / 0.5, headY / 1, headWidth / 1, headHeight / 4)

  fill("white")
  circle(headX * 2, headY * 0.5, 20)
}
