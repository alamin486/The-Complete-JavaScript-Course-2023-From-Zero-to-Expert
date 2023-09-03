function logger() {
    console.log('My name is Alamin');
}
//Calling/running/Invoking function
logger();
logger();
logger();

function fruitsProcessor(apple, oranges) {
    console.log(apple, oranges);
    const juice = `juice with ${apple} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitsProcessor(5, 0);
console.log(appleJuice);