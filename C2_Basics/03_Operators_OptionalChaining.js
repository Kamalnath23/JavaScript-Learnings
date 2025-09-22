//What is Optional Chaining?
//The ?. operator lets you safely access deeply nested properties of an object 
// //without throwing an error if some property is null or undefined

//Example Without Optional Chaining
let user = { profile: { name: "Kamal" } };

// Trying to access user.profile.name
console.log(user.profile.name); // "Kamal"

// But what if profile is missing?
let user2 = {};
//console.log(user2.profile.name); 
// ❌ Error: Cannot read property 'name' of undefined

//Example With Optional Chaining
let user3 = { profile: { name: "Kamal" } };

console.log(user3?.profile?.name); // "Kamal"

let user4 = {};
console.log(user4?.profile?.name); // undefined ✅ (no error)

//REAL WORLD EXAMPLE
let response = {
  user: {
    profile: {
      email: "kamal@example.com"
    }
  }
};

console.log(response?.user?.profile?.email); 
// "kamal@example.com"

console.log(response?.user?.address?.city); 
// undefined ✅ (instead of error)


