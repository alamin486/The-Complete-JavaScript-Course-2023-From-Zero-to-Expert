"use strict";
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const calTempAmplitude = function (tems) {
  let max = tems[0];
  let min = tems[0];

  for (let i = 0; i < tems.length; i++) {
    const curTem = tems[i];
    if (typeof curTem !== "number") continue;
    if (curTem > max) max = curTem;
    if (curTem < min) min = curTem;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calTempAmplitude(temperatures);
console.log(amplitude);
