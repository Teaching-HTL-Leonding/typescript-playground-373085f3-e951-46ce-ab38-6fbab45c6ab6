const AVG_TEMP_LINZ: number[] = [
  -0.7, 0.5, 4.7, 9.9, 14.2, 17.9, 19.5, 19.3, 14.7, 10, 4.8, 0.6,
];

const AVG_TEMP_JOHANNESBURG: number[] = [
  20, 20, 18, 15, 12, 9, 9, 12, 16, 18, 18, 19,
];

function setup() {
  createCanvas(460, 300);
  drawAxes()
  // <<< Call the functions in the following order:
  // 1. Draw temperatures (gets AVG_TEMP_LINZ or AVG_TEMP_JOHANNESBURG as parameter)
  // 2. Draw axes
  // 3. Draw Y labels
  // 4. Draw X labels
}

function drawAxes() {
  stroke(0)
  strokeWeight(4)
  line(20, 20, 20, 290)
  line(0, 270, 400, 270)
}

function drawYLabels() {
  // <<< Add code to draw labels for the Y axis here
}

function drawXLabels() {
  // <<< Add code to draw labels for the X axis here
}

function drawTemperatures(temperatures: number[]) {
  // <<< Add code to draw the temperatures here
}
