const dolphinsScore1 = 100;
const dolphinsScore2 = 100;
const dolphinsScore3 = 200;

const koalasScore1 = 100;
const koalasScore2 = 100;
const koalasScore3 = 200;

const averageDolphinsScore = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;

const averageKoalasScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

console.log(averageDolphinsScore);
console.log(averageKoalasScore);

if (averageDolphinsScore > averageKoalasScore && averageDolphinsScore >= 100) {
    console.log('Winner Dolphins🏆');
} else if (averageKoalasScore > averageDolphinsScore && averageKoalasScore >= 100) {
    console.log('Winner Koalas🏆');
} else if (averageDolphinsScore === averageKoalasScore) {
    console.log('Draw!😒')
}
