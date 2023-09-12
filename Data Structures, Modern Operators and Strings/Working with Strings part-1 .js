//Working with strings
const airLine = "TAP air Portugal";
const plane = "A340";
console.log(plane[0]);
console.log("B707"[0]);
console.log("B707".length);
console.log(airLine.length);
console.log(airLine.indexOf("A"));
console.log(airLine.lastIndexOf("i"));
console.log(airLine.indexOf("air"));
console.log(airLine.slice(4));
console.log(airLine.slice(4, 7));
console.log(airLine.slice(4, 7));
console.log(airLine.slice(-2));
const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === "B" || s === "3") console.log("You got Middle Seat!💺🍷");
  else console.log("You got Lucky!❤️");
};
checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("HB3");
console.log(typeof new String("Alamin"));
