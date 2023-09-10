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
const rest1 = {
  name: "Anisur res.",
  numGuests: 0,
};
const rest2 = {
  name: "Firoj res.",
  owner: "Firoj",
};
// rest1.numGuests = rest1.numberGuests || 10;
// rest2.numGuests = rest2.numberGuests || 10;
//OR assignment operator
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;
console.log(rest1);
console.log(rest2);
//Nullish assignment ope.
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
console.log(rest1);
console.log(rest2);
//AND op
rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";
console.log(rest1);
console.log(rest2);
