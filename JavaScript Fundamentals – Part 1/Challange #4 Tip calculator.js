const bill = 340;
const tip = bill <= 300 && bill >= 50 ? bill * .15 : bill * .2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);