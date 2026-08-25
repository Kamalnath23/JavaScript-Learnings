//Strings
var name = 'kamal\'s';
var name2 = "kamal's";
var name3 = `kamal's`;

//Template literals
var name4 = `My name is ${name3} and I am a student`
console.log(name4) // Output: My name is kamal's and I am a student

var naam = "Kumal\"s";
console.log(naam);

console.log(name2.charAt(0)); // Output: k
console.log(name2.charAt(1)); // Output: a
console.log(name2.charAt(2)); // Output: m
console.log(name2.charAt(3)); // Output: a
console.log(name2.charAt(4));
console.log(name2.charAt(5));

console.log(name2.charAt(6)); // Output: 

console.log(name2.length); // Output: 7
console.log(name2.toUpperCase()); // Output: KAMAL'S
console.log(name2.toLowerCase()); // Output: kamal's
console.log(name2.indexOf('a')); // Output: 1
console.log(name2.indexOf('z')); // Output: -1
console.log(name2.lastIndexOf('a')); // Output: 3
console.log(name2.includes('a')); // Output: true
console.log(name2.startsWith('k')); // Output: true
console.log(name2.endsWith('s'));
console.log(name2.replace('k', 'K')); // Output: Kamal's
console.log(name2.replace('a', 'A')); // Output: kAmal's
console.log(name2.replace('a', 'A').replace('k', 'K')); // Output: KAmal's
console.log(name2.replace(/a/g, 'A')); // Output: kAmAl's
console.log(name2.replace(/a/g, 'A').replace(/k/g, 'K')); // Output: KAmAl's
console.log(name2.includes('ama')); // Output: true
