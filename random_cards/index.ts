let cardImage: p5.Image;

const BASE_URL = 'https://cddataexchange.blob.core.windows.net/images/cards';

function preload() {
  // Generate random color (0 = clubs, 1 = diamonds, 2 = hearts, 3 = spades)
  let color: string
  const colorIx = Math.floor(random(0, 4));
  switch (colorIx) {
    case 0:
      color = 'clubs'
      break

    case 1:
      color = 'diamonds'
      break

    case 2:
      color = 'hearts'
      break

    default:
      color = 'spades'
      break
  }


  // Generate random card (1 = Ace, 2 = 2, ..., 10 = 10, 11 = Jack, 12 = Queen, 13 = King)
  const cardIx = Math.floor(random(1, 14));
  let symbol: string
  switch (cardIx) {
    case 0:
      symbol = 'Ace'

    case 1:
      symbol = '2'
      break

    case 2:
      symbol = '3'
      break

    case 3:
      symbol = '4'
      break

    case 4:
      symbol = '5'
      break

    case 5:
      symbol = '6'
      break

    case 6:
      symbol = '7'
      break

    case 7:
      symbol = '8'
      break

    case 8:
      symbol = '9'
      break

    case 9:
      symbol = '10'
      break

    case 10:
      symbol = 'J'
      break

    case 11:
      symbol = 'Q'
      break

    case 12:
      symbol = 'K'
      break

    default: symbol = `${cardIx}`
      break

  }
  symbol = `${symbol}.png`
  const url = `${BASE_URL}/${color}/${symbol}`
  cardImage = loadImage(url)
}


  function setup() {
    createCanvas(250, 250);
    background("darkgreen");

    imageMode(CENTER);
    image(cardImage, width / 2, height / 2);
}