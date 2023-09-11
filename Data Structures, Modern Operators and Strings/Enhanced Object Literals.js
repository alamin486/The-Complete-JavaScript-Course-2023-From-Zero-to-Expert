"use strict";

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const weekdays = ["mon", "tue", "wed", "thu", "sat", "sun"];
const openingHours = {
  [weekdays[0]]: {
    open: 12,
    close: 12,
  },
  [weekdays[1]]: {
    open: 11,
    close: 23,
  },
  [weekdays[4]]: {
    open: 0,
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  //ES6 enhanced object literals
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ time = "20:00", adress, starterIndex = 1, mainIndex = 0 }) {
    console.log(
      `Oder received!${this.starterMenu[0]} & ${this.mainMenu[0]} at ${adress}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1} ${ing2} and ${ing3}`
    );
  },
};
restaurant.orderDelivery({
  time: "22:30",
  adress: "Dhaka, uttara23",
  mainIndex: 2,
  starterIndex: 2,
});

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);
for (const items of menu) console.log(items);
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}:${el}`);
}
