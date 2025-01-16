let backgroundImages: p5.Image[] = [];
let backgroundscale: number = 1
let scaledImagesWidth: number = 0
let scaledImagesHeight: number = 0


function preload() {
    for (let i = 0; i < winter.length; i++) {
        backgroundImages.push(loadImage(`${BASE_URL}/winter/${winter[i]}`));
    }
}

function setup() {
    createCanvas(500, 500)

    backgroundscale = width / backgroundImages[0].width;
    scaledImagesWidth = backgroundImages[0].width * backgroundscale
    scaledImagesHeight = backgroundImages[0].height * backgroundscale
}

function draw() {
    for (let i = 0; i < backgroundImages.length; i++)
        image(backgroundImages[i], 0, 0, scaledImagesWidth, scaledImagesHeight)
}