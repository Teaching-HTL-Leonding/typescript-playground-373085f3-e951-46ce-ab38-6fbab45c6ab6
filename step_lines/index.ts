function setup() {
    const SIZE = 400; // Canvas size (square)
    const GRID = 25; // Grid line distance

    createCanvas(SIZE, SIZE);
    background("black");

    strokeWeight(0.25);
    stroke("lightgray");

    // Draw vertical lines
    let i = GRID;
    while (i < SIZE) {
        line(i, 0, i, SIZE);
        i += GRID;
    }

    // Draw horizontal lines
    i = GRID;
    while (i < SIZE) {
        line(0, i, SIZE, i);
        i += GRID;
    }

    strokeWeight(2);

    // Draw left part of the lines
    stroke("yellow");
    let x = GRID
    while(x < SIZE){
        line(400, x, x, x)
        x+= GRID
    }
    // <<< Write your code here

    // Draw right part of the lines
    stroke("red");
    x = GRID
    while(x < SIZE){
        line(0, x, x, x)
        x+= GRID
    }
}
