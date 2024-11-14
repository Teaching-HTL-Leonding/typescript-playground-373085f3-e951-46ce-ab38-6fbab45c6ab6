function setup() {
    const SIZE = 425; // Canvas size
    const GRID = 25;  // Size of the squares

    createCanvas(SIZE, SIZE);
    background("black");

    noStroke();

let xy = GRID
while(xy <= 375){
    rect(xy, xy, 30,30)
    xy+= GRID
}
xy = GRID
while(xy <= GRID){
    rect(xy, 375, 30,30)
    xy-= GRID
}
}
