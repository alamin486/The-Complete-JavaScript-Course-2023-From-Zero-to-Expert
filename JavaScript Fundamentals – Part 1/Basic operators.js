//Basic Operators
//math--
const now = 2024;
const ageAbir = now - 2000;
const ageSara = now - 1993;
console.log(ageAbir, ageSara);
console.log(ageAbir * 2, ageSara / 10, 2 ** 3);
// 2 ** 3 means 2  to the  power of 3
const firstName = 'Alamin';
const lastName = 'Hossain';
console.log(firstName + ' ' + lastName);

let x = 10 + 5;//15
x += 10//15+10=25
x *= 4//100
x++;//101
x--;//100
console.log(x);

//Comparison operator
console.log(ageAbir > ageSara);//>, <, >=,<=
console.log(ageAbir <= ageSara);
const isFullAge = ageSara >= 19;
console.log(now - 2012 > now - 2022);