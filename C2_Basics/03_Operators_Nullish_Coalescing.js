let user;
let defaultName = "Guest";

let name = user ?? defaultName;

console.log(name); // Output: "Guest"



//example 2
function getUserPreference(pref) {
  return pref ?? "Default Preference";
}

console.log(getUserPreference(undefined)); // "Default Preference"
console.log(getUserPreference(null));      // "Default Preference"
console.log(getUserPreference("Dark Mode")); // "Dark Mode"

//Difference between || and ??
let count = 0;
console.log(count || 10); // Output: 10  (because 0 is falsy)
console.log(count ?? 10); // Output: 0   (because 0 is not null/undefined)


//with null
let age = null;
console.log(age ?? 18); // Output: 18 //Since age is null, it falls back to 18.

//with false
let isLoggedIn = false;
console.log(isLoggedIn ?? true); // Output: false //It keeps false, because it’s not null or undefined.
