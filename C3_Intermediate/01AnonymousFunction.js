setTimeout(function() {
  console.log("Delayed by 1 second");
}, 1000);


console.log("This will run immediately");
console.log("Anonymous functions are functions without a name.");
console.log("They are often used as arguments to other functions or for callbacks.");
console.log("Example of an anonymous function:");
let sum = function(a, b) {
  return a + b;
};
console.log("Sum of 5 and 10 is:", sum(5, 10));
console.log("Anonymous functions can also be used with array methods like map, filter, and reduce.");
let numbers = [1, 2, 3, 4, 5];  
let doubled = numbers.map(function(num) {
  return num * 2;
});
console.log("Doubled numbers:", doubled);
console.log("Anonymous functions can be assigned to variables, passed as arguments, or returned from other functions.");
console.log("They are useful for creating quick, one-time-use functions without the need for aformal declaration.");
console.log("Anonymous functions can also be used in event handlers, like so:");
// document.getElementById("myButton").addEventListener("click", function() {
//   alert("Button clicked!");
// });