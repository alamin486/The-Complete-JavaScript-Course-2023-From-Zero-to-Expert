//Create a Date
const now = new Date();
console.log(now);
console.log(new Date('2023, December 24'));
console.log(new Date(2023, 10, 15, 23, 5, 55)); //Auto correct
console.log(new Date(3 * 24 * 60 * 60 * 1000));
//working with dates
const future = new Date(2037, 10, 19, 15, 16);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDay()); //Day of the week
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(Date.now());
future.setFullYear(2080);
console.log(future);