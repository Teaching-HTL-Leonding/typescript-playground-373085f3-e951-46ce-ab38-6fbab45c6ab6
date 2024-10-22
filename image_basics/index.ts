// Base URL to make URLs below shorter
const BASE_URL = "https://cddataexchange.blob.core.windows.net/images/NecromancerHalloween/Walking";

// Scaling factor (original images are pretty large)
// Experiment with this value.
const IMAGE_SCALE = 0.1;

//               +---------- Data type representing an image
//               |           (Image is a so called "class")
//               v
let necromancer: p5.Image;

// preload is an important method for p5. Use it to load
// images from the internet using the method "loadImage"
function preload() {
    //                       +---------------------------- URL of the image to display
    //                       |           +----------------- Try Necromancer and Skeleton
    //                       |           |            +---- Try 02 and 03
    //                       v           v            v
    necromancer = loadImage(`${BASE_URL}/Necromancer_01__WALK_000.png`);
}

function setup() {
    // Adjust size of canvas to size of image.
    createCanvas(necromancer.width * IMAGE_SCALE, necromancer.height * IMAGE_SCALE);
    background("lightgray");

    // Draw the image with the "image" method
    //                 +---------------------------------------- x coordinate
    //                 |  +------------------------------------- y coordinate
    //                 |  |  +---------------------------------- width of the drawn image
    //                 |  |  |                                +- height of the drawn image
    //                 v  v  v                                v
    image(necromancer, 0, 0, necromancer.width * IMAGE_SCALE, necromancer.height * IMAGE_SCALE);
    textSize(100)
    
    text("Halloween", 5, height / 2)
}