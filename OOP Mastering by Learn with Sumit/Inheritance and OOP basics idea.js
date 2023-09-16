'use strict';
const player1 = {
  name: 'Mashrafi',
  age: 35,
  skill: 'Bowler',
};
const player2 = {
  name: 'Shakib',
  age: 32,
  skill: 'All-rounder',
};
const player3 = {
  name: 'Tamim',
  age: 34,
  skill: 'Batting',
};
console.log(player1.name);
/////////////////////////////////
//OOP primary thing is Class
class player {
  //constructor builtIn function
  constructor(name, age, skill) {
    this.name = name;
    this.age = age;
    this.skill = skill;
  }
  sayHello() {
    //sayHello method
    return `Hi I am ${this.name}-${this.skill}`;
  }
}
const mashrafi = new player('Mashrafi', 35, 'Bowler'); //player instance mashrafi
const shakib = new player('Shakib', 32, 'All-rounder');
const tamim = new player('Tamim', 34, 'Bating');

console.log(shakib.age);
console.log(tamim.name);
console.log(tamim.skill);

class Human {
  constructor(name) {
    this.name = name;
    this.arms = 2;
    this.legs = 2;
  }
}
// class baby {
//   constructor(name) {
//     this.name = name;
//     this.arms = 2;
//     this.legs = 2;
//     this.cute = true;
//   }
//   cry() {
//     return `waaa waaa!`;
//   }
// }
// class Teenager {
//   constructor(name) {
//     this.name;
//     this.arms = 2;
//     this.legs = 2;
//     this.emotional = true;
//   }
//   crush() {
//     return `I have a crush on youuuu!`;
//   }
// }
// const hasan = new Teenager('Hasan');
// console.log(hasan.legs);

///////
//Inheritance
class baby extends Human {
  constructor(name) {
    super();
    this.cute = true;
  }
  cry() {
    return `waaa waaa!`;
  }
}
class Teenager extends Human {
  constructor(name) {
    super();
    this.emotional = true;
  }
  crush() {
    return `I have a crush on youuuu!`;
  }
}
const abir = new Teenager('Abir');
const alif = new baby('Alif');
console.log(abir.legs);
console.log(alif.cry());
console.log(abir.crush());
