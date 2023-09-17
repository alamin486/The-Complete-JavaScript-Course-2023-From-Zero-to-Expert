const numbers = [1, 2, 3, 4, 5];

// Check if all elements are even
const areAllEven = numbers.every((num) => num % 2 === 0);
console.log(areAllEven); // false (not all elements are even)

// Check if all elements are less than 10
const areAllLessThanTen = numbers.every((num) => num < 10);
console.log(areAllLessThanTen); // true (all elements are less than 10)
