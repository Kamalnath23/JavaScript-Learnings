// var, let, and const — detailed explanation

//Short version first: Use const by default, 
// use let when you need to reassign, and 
// avoid var unless you’re maintaining legacy code. Now the details so you understand why.

//1. SCOPE
if (true) {
  var x = 1;
  let y = 2;
  const z = 3;
}
console.log(x); // 1   (var leaks out)
//console.log(y); // ReferenceError
//console.log(z); // ReferenceError

//2. Hoisting & the Temporal Dead Zone (TDZ)
console.log(a); // undefined
var a = 5;

//console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 6;

//console.log(c); // ReferenceError or SyntaxError (if declared without init)
const c = 7;

//3. Reassignment And Re-declaration
var v = 1;
var v = 2; // ok

let l = 1;
//let l = 2; // SyntaxError

const k = 1;
//k = 2; // TypeError: Assignment to constant variable.


//4. CONST WITH OBJECTS AND ARRAYS
const obj = { a: 1 };
obj.a = 2;          // OK — property changed
//obj = { b: 3 };     // TypeError — cannot reassign binding

const arr = [1,2];
arr.push(3);        // OK
//arr = [4];          // TypeError

//5) Common pitfalls / real examples
//Closure in a loop
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 10); // logs 3,3,3
}
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 10); // logs 0,1,2
}


//Global object (browser)
var foo = 1;
let bar = 2;
//console.log(window.foo); // 1
//console.log(window.bar); // undefined
// In browsers, var declarations create properties on the global window object, while let and const do not.


