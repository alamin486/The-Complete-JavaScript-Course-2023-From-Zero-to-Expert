//Exporting Module
console.log('Hello World!');

const shippingCost = 10;
export const cart = [];
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart!`);
};

const totalPrice = 2939;
const totalQuatity = 5;
export { totalPrice, totalQuatity };
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart!`);
}
