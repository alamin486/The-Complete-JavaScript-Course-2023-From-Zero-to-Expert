function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitsProcessor(apple, oranges) {
    const appleP = cutFruitPieces(apple);
    const orangesP = cutFruitPieces(oranges);

    const juice = `juice with ${appleP} apple pieces and ${orangesP} orange pieces.`;
    return juice;
}

const appleJuice = fruitsProcessor(5, 3);
console.log(appleJuice);