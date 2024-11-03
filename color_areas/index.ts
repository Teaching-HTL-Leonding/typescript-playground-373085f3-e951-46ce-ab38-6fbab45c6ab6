function setup() {
    createCanvas(300, 200);
    background("black");
    noStroke();

fill("gold")
rect(0, 0, 100, 160)

fill("green")
rect(100, 0, 100, 160)

fill("red")
rect(200, 0, 100, 160)
}


function mouseClicked () {
    createCanvas(300, 200);
    background("black");
    noStroke();

    fill("gold")
rect(0, 0, 100, 160)

fill("green")
rect(100, 0, 100, 160)

fill("red")
rect(200, 0, 100, 160)

let message: string

if(mouseX < width / 3) {
    message = "Yellow"
}else if(mouseX < width / 3 * 2) {
    message = "Green"
} else{message = "Red"}

text(message, 150, 180)

}