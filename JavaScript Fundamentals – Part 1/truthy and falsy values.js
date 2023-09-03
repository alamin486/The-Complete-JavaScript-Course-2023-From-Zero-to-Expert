//falsy values: 0,'',undefined,null,NaN

console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

const money = 0;
if (money) {
    console.log('hello!')
} else {
    console.log('Hi!')
}