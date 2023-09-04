
const detailsArray = {
    firstName: 'Alamin',
    lastName: 'Hossain',
    birthYear: 2000,
    profession: 'Student',
    friends: ['Sohan', 'Sohag', 'Tarek'],
    calAge: function () {
        this.age = 2023 - this.birthYear;
        return this.age;
    }
};
console.log(detailsArray.calAge());