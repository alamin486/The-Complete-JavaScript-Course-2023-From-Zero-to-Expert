const runOnce = function () {
  console.log("This will never run again!");
};
runOnce();
//IIFE
(function () {
  console.log("This will never run again!❤️");
})();
//For Arrow IIFE
(() => console.log("This will never run again!❤️"))();
