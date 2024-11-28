function setup() {
    const SIZE = 400;
    const SIDE_LENGTH = 50;

    // We have an isosceles triangle ("gleichschenkeliges Dreieck").
    // This is the formula to calculate the height of such a triangle
    const HEIGHT = SIDE_LENGTH * Math.sqrt(3) / 2;

    createCanvas(SIZE, HEIGHT * 9);
    background("black");

    strokeWeight(1);
    stroke("yellow");
    noFill();
    for (let y = HEIGHT; y <= HEIGHT * 10; y += HEIGHT) {
        for (let x = 0; x <= SIZE; x += SIDE_LENGTH) {
            triangle(x, y, SIDE_LENGTH / 2 + x, y - HEIGHT, x + SIDE_LENGTH, y)
        }
    }
}