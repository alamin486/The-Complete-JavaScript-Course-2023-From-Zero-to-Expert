// let name = 'Shakib Al Hasan';
// let birthDay = '1998-03-24';
// let mothlySalary = 200000;
// let noOfMonths = 12;

// function calAge(dob) {
//   const diff_ms = Date.now() - new Date(dob).getTime();
//   const age_dt = new Date(diff_ms);
//   return Math.abs(age_dt.getUTCFullYear() - 1970);
// }
// function salaryCal(mothlySalary, noOfMonths) {
//   return (mothlySalary * noOfMonths).toLocaleString();
// }
// console.log(calAge(birthDay));
// console.log(salaryCal(mothlySalary, noOfMonths));
/////////////////////////////
//Encapsulation
//Create object and put all functions and variable in one place and remove parameter

// const shakib = {
//   name: 'Shakib Al Hasan',
//   birthDay: '1998-03-24',
//   mothlySalary: 200000,
//   noOfMonths: 12,
//   calAge() {
//     const diff_ms = Date.now() - new Date(this.birthDay).getTime();
//     const age_dt = new Date(diff_ms);
//     return Math.abs(age_dt.getUTCFullYear() - 1970);
//   },
//   salaryCal() {
//     return (this.mothlySalary * this.noOfMonths).toLocaleString();
//   },
// };
// console.log(shakib.calAge());
// console.log(shakib.salaryCal());
/////////////////
//Main Encapsulation with Class
// class Player {
//   constructor(name, birthDay, mothlySalary, noOfMonths) {
//     this.name = name;
//     this.birthDay = birthDay;
//     this.mothlySalary = mothlySalary;
//     this.noOfMonths = noOfMonths;
//   }
//   calAge() {
//     const diff_ms = Date.now() - new Date(this.birthDay).getTime();
//     const age_dt = new Date(diff_ms);
//     return Math.abs(age_dt.getUTCFullYear() - 1970);
//   }
//   salaryCal() {
//     return (this.mothlySalary * this.noOfMonths).toLocaleString();
//   }
// }
// const shakib = new Player('Shakib', '1998-03-24', 200000, 12);
// const tamim = new Player('Tamim', '1994-03-24', 150000, 12);
// console.log(shakib.calAge());
// console.log(shakib.salaryCal());
// console.log(tamim.salaryCal());
//////////
//Making private variable
//Main Encapsulation with Class
class Player {
  #name;
  #birthDay;
  #mothlySalary;
  #noOfMonths;
  constructor(name, birthDay, mothlySalary, noOfMonths) {
    this.#name = name;
    this.#birthDay = birthDay;
    this.#mothlySalary = mothlySalary;
    this.#noOfMonths = noOfMonths;
  }
  calAge() {
    const diff_ms = Date.now() - new Date(this.#birthDay).getTime();
    const age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }
  salaryCal() {
    return (this.#mothlySalary * this.#noOfMonths).toLocaleString();
  }
}
const shakib = new Player('Shakib', '1998-03-24', 200000, 12);

console.log(shakib.calAge());

console.log(shakib.salaryCal());
console.log(shakib.name); //For private we can not access this from player class
