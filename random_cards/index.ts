let cardImage: p5.Image;
let cardImage1: p5.Image;
let cardImage2: p5.Image;
let cardImage3: p5.Image;

const BASE_URL = 'https://cddataexchange.blob.core.windows.net/images/cards';

function preload() {
  // Generate random color (0 = clubs, 1 = diamonds, 2 = hearts, 3 = spades)
  const colorIx = Math.floor(random(0, 4));
  switch (colorIx) {
    case 0:
      let cardImage = 'https://cddataexchange.blob.core.windows.net/images/cards/clubs.png.'
      break;

    case 1:
      let cardImage1 = 'https://cddataexchange.blob.core.windows.net/images/cards/diamonds.png.'
      break;

    case 2:
      let cardImage2 = 'https://cddataexchange.blob.core.windows.net/images/cards/hearts.png.'
      break;

    case 3:
      let cardImage3 = 'https://cddataexchange.blob.core.windows.net/images/cards/spades.png.'
      break;
  }


  // Generate random card (1 = Ace, 2 = 2, ..., 10 = 10, 11 = Jack, 12 = Queen, 13 = King)
  const cardIx = Math.floor(random(1, 14));

  switch (cardIx) {
    case 0:

  }
}

function setup() {
  createCanvas(250, 250);
  background("darkgreen");

  imageMode(CENTER);
  image(cardImage, width / 2, height / 2);
}