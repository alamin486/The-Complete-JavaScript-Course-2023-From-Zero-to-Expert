const age = 18;
if (age === 18) console.log("You just became a Adult!")

const favourite = Number(prompt("What is your favourite number?"));

console.log(favourite);
console.log(typeof (favourite));

if (favourite === 23)//'23'==23 and '23'==='23'
{
    console.log('Cool this is an amazing number')
} else if (favourite === 7) {
    console.log('7 is also a cool number')
}
else if (favourite === 9) {
    console.log('9 is also a cool number')
} else {
    console.log('Number is not 23,7 or 99')
}
if (favourite !== 23) console.log("Why not 23")