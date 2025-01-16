let backgroundImages: p5.Image[] = [];
let backgroundscale: number = 1
let scaledImagesWidth: number = 0
let scaledImagesHeight: number = 0
let scrollposition: number = 0

let figurImage: p5.Image[] = []
let figurscale: number = 1

function preload() {
    for (let i = 0; i < winter.length; i++) {
        backgroundImages.push(loadImage(`${BASE_URL}/winter/${winter[i]}`));
    }
    for(let a = 0; a < figurImage.length; a ++){
        figurImage.push(loadImage())
    }
}

function setup() {
    createCanvas(500, 500)

    backgroundscale = width / backgroundImages[0].width;
    scaledImagesWidth = backgroundImages[0].width * backgroundscale
    scaledImagesHeight = backgroundImages[0].height * backgroundscale
}

function draw() {
    background(0)

    if (keyIsDown(39)) {
        scrollposition -= 5
    } else if (keyIsDown(37)) {
        scrollposition += 5
    }
    let step = scrollposition / backgroundImages.length
    for (let i = 0; i < backgroundImages.length; i++) {
        translate(step, 0)
        image(backgroundImages[i], -scaledImagesWidth, 0, scaledImagesWidth, scaledImagesHeight);
        image(backgroundImages[i], 0, 0, scaledImagesWidth, scaledImagesHeight);
        image(backgroundImages[i], scaledImagesWidth, 0, scaledImagesWidth, scaledImagesHeight);
    }
}