//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations.
// Arrays are a special type of object, and they are used to store multiple values in a single variable.

const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3

// Adding a new element at index 5, leaving indices 3 and 4 empty.
fruits[5] = "mango";
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5'] // returns keys of the array
console.log(fruits); // ['banana', 'apple', 'peach', <2 empty items>, 'mango']
console.log(fruits.length); // 6

// Increasing the length extends the array by adding empty slots without creating any new elements — not even undefined.
fruits.length = 10;
console.log(fruits); // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 10
console.log(fruits[8]); // undefined

// Decreasing the length property does, however, delete elements.
fruits.length = 2;
console.log(Object.keys(fruits)); // ['0', '1']
console.log(fruits.length); // 2
