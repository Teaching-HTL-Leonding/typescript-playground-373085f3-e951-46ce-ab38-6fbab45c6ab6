

const AVG_TEMP_LINZ: number[] = [
  -0.7, 0.5, 4.7, 9.9, 14.2, 17.9, 19.5, 19.3, 14.7, 10, 4.8, 0.6,
];

const AVG_TEMP_JOHANNESBURG: number[] = [
  20, 20, 18, 15, 12, 9, 9, 12, 16, 18, 18, 19,
];

function setup() {
  createCanvas(460, 320);
  drawAxes()
  drawYLabels()
  drawXLabels()
  drawTemperatures(AVG_TEMP_JOHANNESBURG)
  // <<< Call the functions in the following order:
  // 1. Draw temperatures (gets AVG_TEMP_LINZ or AVG_TEMP_JOHANNESBURG as parameter)
  // 2. Draw axes
  // 3. Draw Y labels
  // 4. Draw X labels
}

function drawAxes() {
  stroke(0)
  strokeWeight(4)
  line(20, 20, 20, 320)
  line(10, 270, 380, 270)
}

function drawYLabels() {
  for (let x = 30; x <= 320; x += 30) {
    stroke(0)
    strokeWeight(3)
    line(15, x, 25, x)
  }
}

function drawXLabels() {
  for (let a = 20; a <= 400; a += 30) {
    stroke(0)
    strokeWeight(3)
    line(a, 265, a, 275)
    for (let i = 0; i <= 11; i++) {
      let month = ""
      switch (i) {
        case 0:
          month = "Jan"
          break;
        case 1:
          month = "Feb"
          break;
        case 2:
          month = "Mar"
          break;
        case 3:
          month = "Apr"
          break;
        case 4:
          month = "May"
          break;
        case 5:
          month = "Jun"
          break;
        case 6:
          month = "Jul"
          break;
        case 7:
          month = "Aug"
          break;
        case 8:
          month = "Sep"
          break;
        case 9:
          month = "Oct"
          break;
        case 10:
          month = "Nov"
          break;
        case 11:
          month = "Dec"
          break;
      }
      noStroke()
      textSize(15)
      text(month[i], a + 5, 260, 30, 40)
    }
  }
}

function drawTemperatures(temperatures: number[]) {
  for (let b = 20; b < 380; b += 30) {
    fill("yellow")
    noStroke()
    for (let x = 0; x < AVG_TEMP_JOHANNESBURG.length; x++) {
      rect(b + 5, 270, 20, -temperatures[x] * 5)
    }
  }
}