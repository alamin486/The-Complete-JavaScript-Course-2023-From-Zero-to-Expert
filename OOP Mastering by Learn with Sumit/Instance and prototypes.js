"use strict";
const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};
const alamin = new Person("Alamin", 2000); // alamin is a Instance

console.log(alamin instanceof Person);

//Prototypes
Person.prototype.calAge = function () {
  console.log(2023 - this.birthYear);
};
alamin.calAge();
console.log(alamin.__proto__);
console.log(Person.prototype.isPrototypeOf(alamin));
