//Split and Join
console.log("a+ver+y+nice+day".split("+"));
console.log("Alamin Hossain".split(" "));
const [firstName, LastName] = "Almin Hossain".split(" ");
const newName = ["Mr.", firstName, LastName.toUpperCase()].join("---");
console.log(newName);
//Padding
const messege = "Go to gate 23";
console.log(messege.padStart(25, "+"));
console.log(messege.padEnd(35, "+"));
console.log(messege.repeat(10));
