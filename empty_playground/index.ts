function setup() {
    createCanvas(300, 300)
    

}

 let x = 0;
 let diretion = 1

function draw() {
    background("lightblue")
    fill("yellow");
    circle(width / 2, height / 2,x);
    x+= diretion;
    if (x >= width) {
        diretion = -5
    }
    if (x <= 0) {

    diretion = 5
    }
    }

