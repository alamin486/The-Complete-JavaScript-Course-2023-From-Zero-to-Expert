//Arrow functions
const calAge = birthYear => 2037 - birthYear;
const age = calAge(2000);
console.log(age);

const yearsUntillRetirements = (birthYear, firstName) => {
    const age = 2034 - birthYear;
    const retirement = 65 - age;

    return `${firstName} retires in ${retirement}`;
}
console.log(yearsUntillRetirements(2000, 'Abir'));