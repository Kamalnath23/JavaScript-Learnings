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
//Unique way to define a function/method in the Java script
var getUserRole = function (name, role) {
  switch (role) {
    case "admin":
      return `${name} is admin with all access`;
      break; //not necessary as we're returning

    case "sub admin":
      return `${name} is sub admin with access to create or delete courses`;
      break;

    case "testprep":
      return `${name} is testprep with access to create/delete tests`;
      break;

    case "user":
      return `${name} is a user and can consume all content`;
      break;

    default:
      return `${name} is a trial user`;
      break;
  }
};

console.log(getUserRole("Kamal", "admin"));

var getRole = getUserRole("Saravana", "trial user");
console.log(getRole);
