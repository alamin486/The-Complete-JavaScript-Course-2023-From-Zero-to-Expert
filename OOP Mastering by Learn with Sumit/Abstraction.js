//Abstraction
class betterArry {
  #items;
  constructor() {
    this.#items = [];
  }
  getItems() {
    return [...this.#items];
  }
  addItems(item) {
    this.#items.push(item);
  }
  removeItems(itemToDelete) {
    this.#items = this.#items.filter((item) => item !== itemToDelete);
  }
  modifyItem(itemToChange, newValue) {
    const index = this.#items.indexOf(itemToChange);
    if (index !== -1) {
      this.#items[index] = newValue;
    }
  }
}
//I dont know about the above implementation just doing
const array = new betterArry();
array.addItems("I love you!");
console.log(array.getItems());
array.addItems("I also love JavaScript!");
console.log(array.getItems());
array.removeItems("I also love JavaScript!");

console.log(array.getItems());
