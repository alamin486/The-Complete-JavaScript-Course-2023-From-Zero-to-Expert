const age = 15;

if (age >= 18) {
    console.log('Sara can start her driving License🏎️')
} else {
    const yearLeft = 18 - age;
    console.log(`Sara you have to wait another ${yearLeft} years for start your driving license😊`)
}

const birthYear = 1998;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);