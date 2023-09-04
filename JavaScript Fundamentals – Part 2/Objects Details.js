const alaminArray = [
    'Alamin',
    'Hossain',
    2022 - 2000,
    'Student',
    ['Sohan', 'Sohag', 'Tarek']
];
console.log(alaminArray);

const detailsArray = {
    firstName: 'Alamin',
    lastName: 'Hossain',
    birthYear: 2022 - 2000,
    profession: 'Student',
    friends: ['Sohan', 'Sohag', 'Tarek']
};
detailsArray['twitter'] = '@alamin';
detailsArray.location = 'Dhaka';
console.log(detailsArray);
console.log(detailsArray.firstName);
console.log(detailsArray['firstName']);

const intIn = prompt("what you want to know?");



if (detailsArray[intIn]) {
    console.log(detailsArray[intIn]);
} else {
    console.log(`Value does not exist!`);
}