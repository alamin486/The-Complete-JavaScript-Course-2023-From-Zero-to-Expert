console.log(Math.sqrt(25)); //5
console.log(25 ** (1 / 2));

console.log(Math.max(5, 3, 6, 12));
console.log(Math.min(5, 3, 6, 12));
console.log(Math.PI * Number.parseFloat('10px') ** 2); //Area of a Circle
console.log(Math.trunc(Math.random() * 6) + 1);
const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20));
//Rounding Integer
console.log(Math.trunc(23.3));
console.log(Math.trunc(-23.3));
console.log(Math.round(23.3));
console.log(Math.ceil(23.3));
console.log(Math.floor(23.3));
console.log(Math.floor(-23.3));

//Rounding decimals
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log(+(2.222337).toFixed(3));

