function setup() {
    const SIZE = 500; // Canvas size
    const SQUARE_SIZE = 50; // Size of a chess board square

    createCanvas(SIZE, SIZE);
    background("black");

    noStroke();

    for (let y = 0; y <= SIZE; y += SQUARE_SIZE) {
        for (let x = 0; x <= SIZE; x += SQUARE_SIZE) {
            fill("brown")
            rect(x, y, SQUARE_SIZE, SQUARE_SIZE)
            if (x === 50 || 150 || 250 || 350 || 450) {
                fill("white")
                rect(x, y, SQUARE_SIZE, SQUARE_SIZE)
            } else if (y === 50 || 150 || 250 || 350 || 450) {
                fill("white")
                rect(x, y, SQUARE_SIZE, SQUARE_SIZE)
            } else {
                fill("brown")
                rect(x, y, SQUARE_SIZE, SQUARE_SIZE)
            }
        }
    }
}