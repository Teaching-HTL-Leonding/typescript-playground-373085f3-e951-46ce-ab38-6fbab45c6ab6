function setup() {
    createCanvas(400, 400);

    const text1: string = 'Hello';
    const text2: string = 'world';
    
    let text3 = `${text1} ${text2}`;
    text3 = `${text3}!`;
    text(text3, 50, 50);

    const longText = 'ehfbsihbseaifsbfhesfhebsuhfd ehbfshfe dhsbfhse fdhsbhfbjs efdbshbs fhdsfbhs fshefbns fsehf dsf sehfdh hbsdhf dsh sdfh shfs fsdhf shdff sdhf k'
    text(longText, 0, 200, 400, 400);
}