const calTip = function (bill) {
    return bill <= 300 && bill >= 50 ? bill * .15 : bill * .2;
}
const bills = [125, 555, 44];
const tip = [calTip(bills[0]), calTip(bills[1]), calTip(bills[2])];
console.log(bills, tip);