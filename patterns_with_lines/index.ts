function setup() {
    createCanvas(601, 301);
    background("black");

    fill("aqua");
    noStroke();

    textSize(50);
    textAlign(CENTER, CENTER);
    text("Move the mouse to start", 0, 0, width, height);
}

function mouseMoved() {
    colorMode(HSB)
    resetMatrix();
    background("black");
    strokeWeight(2);

    noFill();
    stroke("aqua");

    for (let x = 0; x < 601; x += 10) {
        for (let i = 0; i <= 301; i += 5) {
            if(x >= 360){
                x === 0
            }
            stroke(x + 60, x + 60, x)
            line(x, 0, x + 10, 5 + i)
            line(x + 10, 5 + i, x, i + 10)
        }
    }

noStroke()
    fill(0)
    rect(0, 280, 601, 21)
}