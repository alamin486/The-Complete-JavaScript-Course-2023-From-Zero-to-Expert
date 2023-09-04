const friends = ['Abir', 'Shohag', 'Michel', 'Peter'];
console.log(friends);

const years = new Array(1991, 1992, 1993, 2000);

console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Alamin';
const alamin = [firstName, 'Hossain', 2022 - 2000, friends];
console.log(alamin);

function calAge(birthAge) {
    const ageCal = 2023 - birthAge;
    console.log(`Your age ${ageCal}`);
    return ageCal;
}

const year = [2000, 1991, 1995];
calAge(year[1]);
//add elemments
year.push(1997);
console.log(year);
year.unshift(1998);
console.log(year);
// remove
year.pop();
console.log(year);
year.shift(1997);
console.log(year);

//es6
console.log(year.includes(2000));

if (year.includes(2000)) {
    console.log(`2000 year here exist`)
}