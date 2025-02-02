function setup() {
    createCanvas(400, 400);
    background("white");
    noFill();

    stroke("blue");
    strokeWeight(3);
    circle(100, 100, 50);
    
    push();
    stroke("red");
    scale(2);
    strokeWeight(3 / 2);
    circle(100 / 2, 100 / 2, 50);
    pop();
    
    push();
    stroke("green");
    scale(4.0);
    strokeWeight(3 / 4); 
    circle(100 / 4, 100 / 4, 50);
    pop();
}
