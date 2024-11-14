function setup() {
    const SIZE = 400;  // Size of canvas
    const STRIPE_THICKNESS = 50; // Thickness of the stripes

    createCanvas(SIZE, SIZE);
    background("black");

    noStroke();

let xy = 0
while(xy <= SIZE){
    fill("yellow")
    rect(0 ,xy, SIZE, STRIPE_THICKNESS)
    fill("lime")
    rect(0, xy * 2, SIZE, STRIPE_THICKNESS)

    xy += STRIPE_THICKNESS
}
}
