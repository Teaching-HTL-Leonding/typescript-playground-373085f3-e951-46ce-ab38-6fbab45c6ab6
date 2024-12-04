function setup() {
    const SIZE = 500; // Canvas size
    const SQUARE_SIZE = 50; // Size of a chess board square

    createCanvas(SIZE, SIZE);
    background("black");

    noStroke();

    for (let y = 0; y < 64; y++) {
        let x = Math.floor(y / 8)
        let z = y % 8
        if (x % 2 === 0 && z % 2 === 1 || z % 2 === 0 && x % 2 === 1) {
            fill("brown")
        } else {
            fill("white")
        }
        rect(SQUARE_SIZE + z * SQUARE_SIZE, SQUARE_SIZE + x * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE)
    
    textSize(20)
    textAlign(CENTER,CENTER)
    
    for(let i = 1; i <= 8; i ++){
       text(i, SQUARE_SIZE / 2, height - SQUARE_SIZE * i - SQUARE_SIZE / 2)
    let file: string
    switch(i){
        case 1: file = "a"; break;
        case 2: file = "b"; break;
        case 3: file = "c"; break;
        case 4: file = "d"; break;
        case 5: file = "e"; break;
        case 6: file =" f"; break;
        case 7: file = "g"; break;
        case 8: file = "h"; break;
    }

    
  text(file, SQUARE_SIZE * i + SQUARE_SIZE / 2, height - SQUARE_SIZE / 2)
   
    }
}
}