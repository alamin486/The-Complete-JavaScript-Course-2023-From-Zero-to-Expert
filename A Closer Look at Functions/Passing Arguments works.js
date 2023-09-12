const flight = "BH778";
const alamin = {
  firstName: "Alamin",
  lastName: "Hossain",
  passport: 243253465,
};
const checkIn = function (flightNum, passenger) {
  flightNum = "LH889";
  passenger.firstName = "Mr. " + passenger.firstName;
  if (passenger.passport === 243253465) {
    alert("You can CheckIn!✈️");
  } else {
    alert("Wrong Passport!");
  }
};
// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000);
// };
// newPassport(alamin);
checkIn(flight, alamin);
