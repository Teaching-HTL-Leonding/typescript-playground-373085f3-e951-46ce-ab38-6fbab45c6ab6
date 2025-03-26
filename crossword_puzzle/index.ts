/**
* Animal Crossword Game
*
* This is a crossword puzzle game where players guess letters to reveal animal names.
* The game highlights a vertical solution word that is formed from a specific column.
* Players win when they've guessed all letters in the solution word.
*/

// Raw input data in format: animalName,startPosition,hint
const crossword = `krebs,0,Schalentier  
elefant,-1,Größtes Landtier  
schlange,-4,Lautloser Jäger  
papagei,-2,Bunter Sprachkünstler  
pinguin,0,Flugunfähiger Schwimmer  
esel,-2,Sturer Vierbeiner  
piranha,-2,Gefährlicher Schwarmfisch  
seestern,-3,Meerestier mit fünf Armen  
schildkröte,-1,Langsamer Panzerträger  
hund,0,Treuer Begleiter  
seelöwe,-3,Verspielter Meeressäuger  
aal,-1,Schlängelnder Stromleiter  
antilope,-1,Schneller Sprinter der Savanne  
regenwurm,-2,Bodenlockerer mit Ringeln  
seegurke,-2,Tarnkünstler der Tiefsee`;

// The word that players need to completely reveal to win
const solution = 'klapperschlange';
const animals: string[] = []
const startPositions: number[] = []
const hints: string[] = []

let crosswordline = ''
function setup() {
    createCanvas(1000, 1000)
    background("white")
    fill("yellow")
    noStroke()
    rect(120, 0, cellsize, 450)

    parseCrossword()
    drawCrosswordCells()
    drawHints()
    drawCorrectLetters()
    const zeilen = inZeilenAufteilen(crossword)

}

//zerlegt crossword mit split und gibt die Zeilen als array zurück
function inZeilenAufteilen(crossword: string): string[] {
    return crossword.split('\n')
}

function parseCrossword() {
    for (const line of inZeilenAufteilen(crossword)) {
        const parts = line.split(',')
        animals.push(parts[0])
        startPositions.push(parseInt(parts[1]))
        hints.push(parts[2])
    }
}

const cellsize = 30;

function drawCrosswordCells() {
    stroke("black")
    strokeWeight(1)
    noFill()
    translate(4 * cellsize, 0)
    for (let i = 0; i < animals.length; i++) {
        push()
        for (let j = 0; j < animals[i].length; j++) {
            rect(startPositions[i] * cellsize, 0, cellsize, cellsize)
            translate(cellsize, 0)
        }
        pop()

        translate(0, cellsize)
    }

}

function drawHints() {
    push()
    for (let i = 0; i < hints.length; i++) {
        noStroke()
        fill(0)
        text(hints[i], 400 , -430)
    translate(0, cellsize + 0.5)
    }
    pop()
}

function drawCorrectLetters(){
        push()
    for(let i = 0; i < animals.length; i ++){
    let words = animals[i]
    for(let word = 0; word < words.length; word ++){
        textSize(cellsize - 5)
        text(words[word], -startPositions[i] * cellsize, -420)
        translate(cellsize, 0)
    }
    translate(0, cellsize)
    }
    pop()
}