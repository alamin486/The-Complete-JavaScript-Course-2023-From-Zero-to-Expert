const bangladeshAirLine = {
  airline: "Bangladesh",
  airCode: "BH7",
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight code: ${this.airCode} flightNumber: ${flightNum}`
    );
    this.booking.push({ flight: `${this.airCode}${flightNum}`, name });
  },
};
bangladeshAirLine.book(237, "Abir");
bangladeshAirLine.book(250, "Kashem");
console.log(bangladeshAirLine);

const newYourkF = {
  airline: "Newwings",
  airCode: "EW9",
  booking: [],
};
const book = bangladeshAirLine.book;
book.call(newYourkF, 345, "Mahmud");
console.log(newYourkF);
//Bind Function
const bookEW = book.bind(newYourkF);
bookEW(300, "Sahed");
console.log(bookEW);
