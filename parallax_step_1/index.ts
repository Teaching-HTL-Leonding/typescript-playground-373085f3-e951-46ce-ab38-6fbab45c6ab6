let backgroundImages: p5.Image[];

function preload() {
    for(let i = 0; i< winter.length; i++){

    backgroundImages.push(loadImage(`${BASE_URL}/winter/${winter[i]}`));
    }
}

function setup() {
    createCanvas(500, 500)
}

function draw() {
    for(let i = 0; i < backgroundImages.length; i ++)
    image(backgroundImages[i], 0, 0, 500, 500)
}