//Importing module
// import {
//   addToCart,
//   totalPrice,
//   totalQuatity as quantity,
// } from './shoppingCart.js';
console.log('Importing Module!!');
// addToCart('Catbarry', 5);
// console.log(totalPrice);
// console.log(quantity);
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('Tomato', 19);
// console.log(ShoppingCart.totalPrice);
import add, { cart } from './shoppingCart.js';
add('Pizza', 11);
add('Bread', 9);
add('Apples', 10);
console.log(cart);
