function setup() {
    const SIZE = 425; // Canvas size
    const GRID = 25;  // Size of the squares

    createCanvas(SIZE, SIZE);
    background("black");

    noStroke();

let xy = GRID
while(xy < 400){
    fill("yellow")
    rect(xy, xy, 25,25)
    xy+= GRID
}
xy = GRID
while(xy < 400){
    fill("lime")
    rect(xy, height - GRID - xy, 25, 25)
    xy+= GRID

}
}