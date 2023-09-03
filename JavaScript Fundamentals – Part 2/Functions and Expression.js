//Functions declarations
function calAge1(birthYear) {
    return 2024 - birthYear;

}
const age1 = calAge1(2000);
console.log(age1);

//Functions Expression
const calAge2 = function (birthYear) {
    return 2024 - birthYear;
}
const age2 = calAge2(1991);
console.log(age2);