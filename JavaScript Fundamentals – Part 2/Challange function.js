const calAverage = (a, b, c) => (a + b + c) / 3;
console.log(calAverage(4, 5, 6));

const scoreDolphines = calAverage(44, 34, 72);
const scoreKoalas = calAverage(65, 54, 49);
console.log(scoreDolphines, scoreKoalas);

const checkWinner = function (avgDol, avgKoalas) {
    if (avgDol >= 2 * avgKoalas) {
        console.log('Dol win');
    } else if (avgKoalas >= 2 * avgDol) {
        console.log('Koalas Win');
    } else {
        console.log('No team Win');
    }
}
checkWinner(scoreDolphines, scoreKoalas);
