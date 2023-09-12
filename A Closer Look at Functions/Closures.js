const booking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = booking();
booker();
booker();
booker();
console.dir(booker);