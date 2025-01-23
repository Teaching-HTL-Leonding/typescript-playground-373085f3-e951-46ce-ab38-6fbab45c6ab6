let next = true

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);

  // Function CALL
  // +------------------------------ Function name
  // |  +--------------------------- Function parameter
  // v  v
  smile(next);
}

function mouseClicked() {
  if (next === true) {
    next = false
  } else {
    next = true
  }
  smile(next)

}

// Function DEFINITION
//       +-------------------------- Function name
//       |     +-------------------- Parameter name
//       |     |      +------------- Parameter type
//       v     v      v
function smile(happy: boolean) {
  push()
  translate(random(0, 500), random(0, 500))
  if (happy) {
    fill("green")
  } else {
    fill("red")
  }
  circle(0, 0, 100)
  fill(0)
  circle(-20, -15, 10)
  circle(20, -15, 10)
  stroke(0)
  strokeWeight(2)
  noFill()
  if(next === true){
  arc(0, 10, 70, 60, 0, 180)
  }else{
  arc(0, 30, 70, 60, 180, 0)
  }
  pop()
}
