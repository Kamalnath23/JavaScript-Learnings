// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

var countries = ["India", "USA", "Russia", 'Germany","Australia', "Japan", "Thailand"];
var states = new Array("Rajasthan", "Tamilnadu","Kerala","Karnataka","Delhi", "Himachal Pradesh","Punjab", "Mumbai", "Assam");

//access values:
console.log(states[0]);

//properties
console.log(states.length);

//replace the value
states[0] = "Jammu and Kashmir"
console.log(states[0]);

var user = ["Kamal","Sandhiya"]

var userData = ["Kamal","Kamal@1234@co.test",3,34,true];
console.log(userData);

userData.pop();
userData.pop();
console.log(userData);

userData.unshift("New value");
console.log(userData);

userData.shift();
console.log(userData);

console.log(userData.indexOf(3)); //search for anything specific. //returns the index number of input
console.log(userData.indexOf("Kamal"));
console.log(userData.indexOf("newbie"));

console.log("Sandhiya");
console.log(Array.from("Sandhiya")); //convert string to array
