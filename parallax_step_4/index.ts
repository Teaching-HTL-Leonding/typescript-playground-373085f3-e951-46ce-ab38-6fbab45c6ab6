let scaledImagesHeight: number = 0
let scrollposition: number = 0

let figurImage: p5.Image[] = []
const BASE_URL_worm = "https://cddataexchange.blob.core.windows.net/images/parallax/worm/"

const WORM = [
    "Moving_01.png",    
    "Moving_02.png",    
    "Moving_03.png",    
    "Moving_04.png",    
    "Moving_05.png",    
    "Moving_06.png",    
    "Moving_07.png",    
    "Moving_08.png",    
    "Moving_09.png",    
    "Moving_10.png",    
    "Moving_11.png",    
    "Moving_12.png",    
    "Moving_13.png",    
    "Moving_14.png",    
    "Moving_15.png",    
    "Moving_16.png",    
    "Moving_17.png",    
    "Moving_18.png",    
    "Moving_19.png",    
    "Moving_20.png",    
    "Moving_21.png",    
    "Moving_22.png",    
    "Moving_23.png",    
    "Moving_24.png",    
    "Moving_25.png",    
    "Moving_26.png",    
    "Moving_27.png",    
    "Moving_28.png",    
    "Moving_29.png",    
    "Moving_30.png",    
    "Moving_31.png",    
    "Moving_32.png",    
    "Moving_33.png",    
    "Moving_34.png",    
    "Moving_35.png",    
    "Moving_36.png",    
    "Moving_37.png",    
    "Moving_38.png",    
    "Moving_39.png",    
]

let figurImages: p5.Image[] = []
let figurscale: number = 1

function preload() {
    for (let i = 0; i < winter.length; i++) {
        backgroundImages.push(loadImage(`${BASE_URL}/winter/${winter[i]}`));
    }
    for(let a = 0; a < figurImage.length; a ++){
        figurImage.push(loadImage())
        figurImages.push(loadImage(`${BASE_URL_worm}`))
    }
}
