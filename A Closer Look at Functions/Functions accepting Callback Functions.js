const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};
//Higher-Order function
const transformer = function (str, fn) {
  console.log(`Original function: ${str}`);
  console.log(`Transformer string ${fn(str)}`);
  console.log(`Transformed by ${fn.name}`);
};
transformer("JavaScript is the Best!", upperFirstWord); //Callback Function
transformer("JavaScript is the Best!", oneWord); //Callback Function
//JS use callback use all the time
const hi5 = function () {
  console.log("📸👋");
};
document.body.addEventListener("click", hi5); //Callback function
