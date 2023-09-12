const airLine = "Tap Air Portugal";
console.log(airLine.toLowerCase());
console.log(airLine.toUpperCase());
//Fix capitalization in name
const passenger = "jOnAS";
const passengerLower = passenger.toLowerCase();
console.log(passengerLower);
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);
//Compare email
const email = "alamin35-486@diu.edu.bd";
const loginEmail = " alamIn35-486@DiU.edu.bd\n";
const lowerEmail = loginEmail.toLocaleLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);
console.log(loginEmail.toLocaleLowerCase().trim());
const priceGB = "#288,97";
const priceReplace = priceGB.replace("#", "$").replace(",", ".");
console.log(priceReplace);
console.log(priceGB.includes("288"));
console.log(priceGB.startsWith("#288"));
