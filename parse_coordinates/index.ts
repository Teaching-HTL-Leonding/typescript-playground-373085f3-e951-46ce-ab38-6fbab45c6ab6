const circles = "50,50 50,100 100,50 100,100";

function setup() {
    createCanvas(400, 400);
    background("white");
    noFill();
    stroke("black");
    strokeWeight(3);

    let x = 0
    let y = 0
    let co = ""
    for (let ix = 0; ix < circles.length; ix++) {
        switch (circles[ix]) {
            case ",":
                x = parseInt(co)
                co = ""
                break;
            case "":
                y = parseInt(co)
                circle(x, y, 40)
                co = ""
                break;
            default:
                co += circles[ix]
                break;
        }
    }

    y = parseInt(co)
    circle(x, y, 40)
}