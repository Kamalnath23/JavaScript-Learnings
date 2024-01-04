/*
Define a function that can answer the role of a user.
A user can be on following roles:
admin - with all access
sub admin - with access to create or delete courses
testprep - with access to create/delete tests
user - consume all content
other - trial user

Input: getUserRole(name, role)
*/
//Another Unique way to define a function/method in the Java script: remove function keyword and put arrowfunction next to parameters if presemt
var getUserRole = (name, role) => {
  switch (role) {
    case "admin":
      return `${name} is admin with all access`;

    case "sub admin":
      return `${name} is sub admin with access to create or delete courses`;

    case "testprep":
      return `${name} is testprep with access to create/delete tests`;

    case "user":
      return `${name} is a user and can consume all content`;

    default:
      return `${name} is a trial user`;
  }
};

console.log(getUserRole("Kamal", "admin"));

var getRole = getUserRole("Saravana", "trial user");
console.log(getRole);
