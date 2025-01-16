// Index of the theme to use. 0 = cave, 1 = mountains, 2 = winter, 3 = dessert
// IMPORTANT: Take a look at the file _images.ts_ to see the available themes and their indexes.
// Make sure you understand the structure of the arrays in _images.ts_.
const THEME_IX = 2;

// Array with p5js images holding the image objects for the current theme
const images: p5.Image[] = [];

// The background images do not have the same size as the drawing canvas. Therefore,
// we have to scale them to fit the canvas. The scale factor is calculated in the _setup()_ function.
// The scale factor is the percentage of the canvas width that the background image will use.
// Example: 0.5 means that the background image has to be scaled to 50% to fill the width of the canvas.
// 1 would mean that the image fits perfectly into the canvas width (i.e. image size matches canvas size).
let backgroundScale = 1;

// Width and height of the scaled images
let scaledImageWidth = 0;
let scaledImageHeight = 0;

function preload() {
    // Load the images for the current theme. For that, we iterate over the image names of the current theme.
    const theme = themes[THEME_IX];
    for (let i = 0; i < theme.length; i++) {
        const imageName = theme[i];
        const image = loadImage(`${BASE_URL}/${themeNames[THEME_IX]}/${imageName}`);

        // Add the p5js image to the array of p5js images
        images.push(image);
    }
}

function setup() {
    createCanvas(500, 500);

    // Calculate the scale factor for the background images
    backgroundScale = width / images[0].width;

    // Calculate the scaled image width and height
    scaledImageWidth = images[0].width * backgroundScale;
    scaledImageHeight = images[0].height * backgroundScale;
}

function draw() {
    background("black");

    push();
    // Center the images on the canvas
    translate(0, (height - scaledImageHeight) / 2);

    // Draw the images
    for (let i = 0; i < images.length; i++) {
        const img = images[i];
        image(img, 0, 0, scaledImageWidth, scaledImageHeight);
    }
    pop();
}
