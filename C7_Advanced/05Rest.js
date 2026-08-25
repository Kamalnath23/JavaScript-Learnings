// Rest and Spread Operators in JavaScript
var returnedValue = Math.max(1, 2, 7,6,3,4,5,9,8,0,3);
console.log(returnedValue);

var myObject = {};

Object.assign(myObject, { name: "Kamal", age: 27, profession: "Engineer" }, {name: "Shamlie", age: 22, profession: "Human Resource"},
    {name: "John", age: 30, profession: "Developer"}, {name: "Alice", age: 25, profession: "Designer"}, {game: "Football", city: "New York"}
);
console.log(myObject);


function sum(a, b, c) {
    return a + b + c;
}

var numbers = [1, 2, 3];
var result = sum(...numbers);
console.log(result); // Output: 6
var numbers1 = [4, 5, 6,9];
var result1 = sum(...numbers1); //spread operator to pass array elements as individual arguments
console.log(result1); // Output: 15

var arr1 = [1, 2, 3,9];
var arr2 = [4, 5, 6,7,8];
const combinedArray = [...arr1, ...arr2]; //spread operator to combine two arrays
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// Using rest operator to collect remaining elements into an array
function sumTwo(...args) {
    console.log(args); // Output: [1, 2, 3, 4, 5]
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}

const result2 = sumTwo(1, 2, 3, 4, 5);
console.log(result2); // Output: 15

const result3 = sumTwo(10, 20, 30);
console.log(result3); // Output: 60

const result4 = sumTwo(-5, -10, -15, -20, 25);
console.log(result4); // Output: -25

const result5 = sumTwo(100, 200, 300, 400, 500);
console.log(result5); // Output: 1500


function equation(a, b, ...rest) {
    console.log("\n");
    console.log("First argument:" + a);
    console.log("Second argument:" + b);
    console.log("Remaining arguments:" + rest);
    let c=a*b;
    console.log("multiplication value:" +c);
    let sum=0;
    for(let arg of rest){
        sum+=arg;
    }
    console.log("Addition of remaining values:" +sum);
    console.log("\n *** END OF CALC *** \n");
    return [c, sum];
}

const slope1= [3, 4, 5, 6, 7];
console.log(equation(result2, result3, result4, slope1)); // Output: [900, 1500]
console.log(equation(result2, result3, result4)); // Output: [900, -25]
console.log(equation(result2, result3, slope1)); // Output: [900, -25]
console.log(equation(result2, result3, 2,3,4,5,6,7)); // Output: 