function setup() {
    const SIZE = 400;  // Size of canvas
    const STRIPE_THICKNESS = 50; // Thickness of the stripes

    createCanvas(SIZE, SIZE);
    background("black");

    noStroke();

let xy = 0
while(xy <= SIZE){
    fill("yellow")
    rect(xy,xy, SIZE, xy)
    xy += STRIPE_THICKNESS
    fill("lime")
    rect(xy, xy * 2, SIZE, xy)

}
}
