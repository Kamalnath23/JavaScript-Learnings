//function is a block of code which can be re-used again and again.

function sayHello(name) {
    console.log("Hello there! Kamal"); //hardcode
   // console.log("Hello there!", name); //fetch dynamic
    console.log(`Hello there! ${name}. How are you!`);
}

sayHello("Sandhiya"); //call a function - use parenthesis
// sayHello; //refer a function - call without paranthesis
sayHello("Sandy");

function namastey() {
    return "Hello in India";
}

namastey(); //this will not print anything to console
console.log(namastey()); // this will print the return value of the function
var greetings = namastey();
console.log(greetings);