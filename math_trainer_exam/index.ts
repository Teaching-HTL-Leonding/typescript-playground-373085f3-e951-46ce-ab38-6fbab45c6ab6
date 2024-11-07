// This program generates a simple math quiz in a graphical window, where the user selects the correct result
// of a randomly generated arithmetic operation.

// <<< TODO: Declare your GLOBAL variables here
let num = 0
let num1 = 0
let num2 = 0
let num3 = 0
let num4 = 0
let num5 = 0
let zeichen = ""
let result = 0
let selected = 0
let position = 0
// setup function runs once and sets up the quiz elements on the canvas
function setup() {
    num = Math.floor(random(1, 101))
    num1 = Math.floor(random(1, 101))
    num2 = Math.floor(random(1, 101))
    num3 = Math.floor(random(1, 101))
    num4 = Math.floor(random(1, 101))
    num5 = Math.floor(random(1, 101))


    createCanvas(500, 400);
    background("black");
    switch (Math.floor(random(0, 3))) {
        case 0:
            zeichen = "+"
            break
        case 1:
            zeichen = "-"
            break
        case 2:
            zeichen = "*"
            break
    }
    // <<< TODO: Add your code here

    if (zeichen === "-") {
        result = num1 - num2
        if(num1 < num2){
           result = num2 - num1
        }else{result = num1 - num2}
    } else if (zeichen === "+") {
        result = num1 + num2
    } else if (zeichen === "*") {
      num1 = Math.floor(random(1,11))
      num2 = Math.floor(random(1,11))
        result = num1 * num2
    }

    position = Math.floor(random(1, 4))
    if (position === 1) {
        num3 = result
    } else if (position === 2) {
        num4 = result
    } else if (position === 3) {
        num5 = result
    }
    textAlign(RIGHT, CENTER)
    textSize(60)
    fill("yellow")
    text(num1, width / 2 - 50, height / 5)

    textAlign(LEFT, CENTER)
    text(num2, width / 2 + 50, height / 5)
    text(zeichen, 250, height / 5)
    text(num3, 20, height / 2)
    text(num4, 170, height / 2)
    text(num5, 350, height / 2)


}

// mouseClicked function checks if the user clicked on the correct answer
function mouseClicked() {
    if (selected === 0) {
        const mouseYnum = mouseY > 171 && mouseY <= 217
        if (mouseX > 20 && mouseX <= 121 && mouseYnum) {
            selected = num3
        } else if (mouseX > 170 && mouseX <= 265 && mouseYnum) {
            selected = num4
        } else if (mouseX > 350 && mouseX <= 450 && mouseYnum) {
            selected = num5
        }
    }
    if (selected === result) {
        fill("yellow")
        textSize(50)
        text(`${result} correct`, 10, 360)
    } else if (selected !== result) {
        fill("yellow")
        textSize(50)
        text(`${selected} is not correct`, 10, 360)
    }
}

// mouseMoved function displays mouse coordinates as feedback
function mouseMoved() {
    // This is a HELPER FUNCTION. It should make finding coordinates
    // easier for you. You DO NOT NEED to change this method!

    fill("black");
    noStroke();
    rect(0, height - 20, width, height); // Draws a rectangle to clear previous coordinates

    fill("white");
    textSize(10);
    textAlign(LEFT, BOTTOM); // Aligns coordinates text to bottom-left
    text(`${mouseX}/${mouseY}`, 5, height - 5); // Displays current mouse coordinates
}
