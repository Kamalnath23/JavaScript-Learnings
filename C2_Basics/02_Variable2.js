const uid = "abc123";

//uid="abcd234"; // throw error dynamically

var fullName="Kamalnath";
var email ="kamalnath121998@gmail.com";
var password = "123456";
var confirmPassword = "123456";
var courseCount =0;
var isLoggedInFromGoogle = false;

//if you want to take inut from users, there are couple of options.
//for eg_!:
//alert //pop up bar comes in web page

//if you wanna take input from user
//prompt("Enter your name");

//To store in a variable
// fullName= prompt("Enter your name"); // to do that, we habe to attach this particular file with a page.
console.log(uid);
console.log("Full name is: "+fullName);
console.log("Email ID is: ",email);

console.log(`
With Unique id: ${uid}
User is: ${fullName}
and his/her email is:  ${email}
and uses the password: ${password}

`)