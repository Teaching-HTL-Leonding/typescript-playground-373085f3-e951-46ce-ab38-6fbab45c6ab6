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
let seleced = ""
let position = 0
let positionX1 = 0
let positionX2 = 0
let positionX3 = 0
// setup function runs once and sets up the quiz elements on the canvas
function setup() {
    num = Math.floor(random(1, 101))
    num1 = Math.floor(random(1, 101))
    num2 = Math.floor(random(1, 101))
    num3 = Math.floor(random(1, 101))
    num4 = Math.floor(random(1, 101))


    createCanvas(400, 400);
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
    } else if (zeichen === "+") {
        result = num1 + num2
    } else if (zeichen === "*") {
        result = num1 * num2
    }
     position = Math.floor(random(1, 4))
    if(position === 1){
      positionX1 = 30
    } else if(position === 2){
        positionX1 = 150
    } else if(position === 3){
        positionX1 = 260
    }
        if(positionX1 === 30){
      positionX2 = 150
    } else if(positionX1 === 150){
        positionX2 = 260
    } else if(positionX1 === 3){
        positionX2 = 30
    }
        if(positionX1 === 30 && positionX2 === 150){
      positionX3 = 260
    } else if(positionX1 === 30 && positionX2 === 150){
        positionX3 = 150
    } else if(position === 3){
        positionX3 = 260
    }
    textAlign(RIGHT, CENTER)
    textSize(60)
    fill("yellow")
    text(num1, width / 2 - 50, height / 5)

    textAlign(LEFT, CENTER)
    text(num2, width / 2 + 50, height / 5)
    text(zeichen, 180, height / 5)
    text(result, positionX1, height / 2)
    text(num3, positionX2, height / 2)
    text(num4, positionX3, height / 2)

}

// mouseClicked function checks if the user clicked on the correct answer
function mouseClicked() {
    const mouseYnum = mouseY > 171 && mouseY <= 217
    if (mouseX > 30 && mouseX <= 90 && mouseYnum) {
    
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
