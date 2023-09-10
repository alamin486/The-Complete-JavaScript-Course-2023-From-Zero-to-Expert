"use strict";

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 12,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    time = "20:00",
    adress,
    starterIndex = 1,
    mainIndex = 0,
  }) {
    console.log(
      `Oder received!${this.starterMenu[0]} & ${this.mainMenu[0]} at ${adress}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
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

const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);
const newMenu = [...restaurant.mainMenu, "Chicken grill"];
console.log(...newMenu);
console.log(newMenu);

//Copy Array
const mainMenuCopy = [...restaurant.mainMenu];
//Join array together
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);
//Iterables: strings, maps, sets,NOT objects
const str = "Abir";
const letters = [...str, "", "s."];
console.log(letters);
console.log(...str);
//Real world example
const ingredients = [
  prompt("Lets make pasta! ing 1?"),
  prompt("Lets make pasta! ing 2?"),
  prompt("Lets make pasta! ing 3?"),
];
console.log(ingredients);
restaurant.orderPasta(...ingredients);
//objects
const newResturant = { foundedIn: 1998, ...restaurant, founder: "Abir" };
console.log(newResturant);
