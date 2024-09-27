function setup() {
    createCanvas(400, 400)
}

let x:number = 0
let direction: number = +2

function draw() {
    background("red")

    x = x + direction
    if (x >= width) {
        direction = -2
    } 
     else if(x <= 0) {
        direction = +2
    }
    circle(x, height / 2, 50)
}
