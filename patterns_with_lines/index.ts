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
    let num = 0
    for (let x = 0; x < 601; x += 10) {
        for (let i = 0; i <= 301; i += 10) {
            stroke(x, x + 360,60 + x)
            line(x, i, x + 10, 5 + i)
            line(x + 10, 5 + i, x, i + 10)
            if (mouseY >= i && mouseX >= x) {
                num += 1
            }
        }
    }
    noStroke()
    fill(0)
    rect(0, 280, 601, 21)

    textAlign(LEFT, CENTER)
    textSize(10)
    fill("white")
    text(`${num} of 601`, 0, 290)
}