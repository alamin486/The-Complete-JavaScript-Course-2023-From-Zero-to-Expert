let arr = ['a', 'b', 'c', 'd', 'e'];
//Slice Method
console.log(arr.slice(2));
console.log(arr.slice());
console.log([...arr]);
console.log(arr.slice(-2));
console.log(arr.slice(2, 4));
//Splice
console.log(arr.splice(2));
console.log(arr); //Splice deleted them
//Reverse
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'k', 'h', 'p', 't'];
console.log(arr2.reverse());
//Concat
const letter = arr.concat(arr2);
console.log(letter);
console.log([...arr, ...arr2]);
//Join
console.log(letter.join('-'));