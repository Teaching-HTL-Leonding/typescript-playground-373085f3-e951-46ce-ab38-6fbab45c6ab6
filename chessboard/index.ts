function setup() {
    const SIZE = 500; // Canvas size
    const SQUARE_SIZE = 50; // Size of a chess board square

    createCanvas(SIZE, SIZE);
    background("black");

    noStroke();

    for(let y = SQUARE_SIZE; y <= SIZE; y+= SQUARE_SIZE){
        for(let x = SQUARE_SIZE; x <= SIZE; x+= SQUARE_SIZE){
            rect(x,y,SQUARE_SIZE,SQUARE_SIZE)
        }
    }
}
