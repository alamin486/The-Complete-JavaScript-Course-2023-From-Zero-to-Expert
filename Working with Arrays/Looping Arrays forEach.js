const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`${i + 1}: You deposite ${movement}`);
  } else {
    console.log(`${i + 1}: You withdraw ${Math.abs(movement)}`);
  }
}

console.log('----FOREACH-----');
movements.forEach(function (movement, i, arr) {
  if (movement > 0) {
    console.log(`${i + 1}: You deposite ${movement}`);
  } else {
    console.log(`${i + 1}: You withdraw ${Math.abs(movement)}`);
  }
});