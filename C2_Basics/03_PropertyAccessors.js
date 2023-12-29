const person1 = {};
person1['firstname'] = 'Mario';
person1['lastname'] = 'Rossi';

console.log(person1.firstname);
// Expected output: "Mario"
console.log(person1['lastname']);
const person2 = {
  firstname: 'John',
  lastname: 'Doe',
};
console.log(person2.firstname);
console.log(person2['lastname']);
// Expected output: "Doe"
