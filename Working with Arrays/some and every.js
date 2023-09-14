const arr2 = [11, 223, 45, -110, 456, -330];
console.log(...arr2);
//Equality
console.log(arr2.includes(-110));

//SOME: Condition
const anyDeposits = arr2.some(mov => mov > 200);
console.log(anyDeposits);
//EVERY
console.log(arr2.every(mov => mov > 0));