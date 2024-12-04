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
        }
    }
}