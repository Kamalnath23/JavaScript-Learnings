const user = ["Kamal", 27, "Engineer", "New York"];

// Destructuring the array
const [name, age, profession, city] = user;

console.log(name); // Output: Kamal
console.log(age); // Output: 27
console.log(profession); // Output: Engineer
console.log(city); // Output: New York

const userDetails = {
    name: "Shamlie",
    age: 22,
    profession: "Human Resource",
    city: "New York"
};

const { name: userName, age: userAge, profession: userProfession, city: userCity } = userDetails;

console.log(userName); // Output: Shamlie
console.log(userAge); // Output: 22
console.log(userProfession); // Output: Human Resource
console.log(userCity); // Output: New York 
