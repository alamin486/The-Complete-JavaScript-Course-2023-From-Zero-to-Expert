//POLYMORPHISM
class Human {
  #name;
  #arms;
  #legs;
  constructor(name) {
    this.#name = name;
    this.#arms = 2;
    this.#legs = 2;
  }
  getName() {
    return this.#name;
  }
  humanNeed() {
    return `${this.#name} need to eat Food!🍍`;
  }
}

class baby extends Human {
  #cute;
  constructor(cute) {
    super();
    this.#cute = true;
  }
  cry() {
    return `waaa waaa!`;
  }
}
class Teenager extends Human {
  #emotional;
  constructor(name, emotional) {
    super(name);
    this.#emotional = true;
  }
  crush() {
    return `I have a crush on youuuu!`;
  }
  humanNeed() {
    return `${this.getName()} need to propose his crush!❤️`;
  }
}
const abir = new Teenager("Abir");
const abir2 = new Human("Abir");
console.log(abir2);
console.log(abir.humanNeed());
console.log(abir2.humanNeed());
