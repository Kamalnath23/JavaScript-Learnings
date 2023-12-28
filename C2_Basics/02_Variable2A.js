const uid = "abc123";

//uid="abcd234"; // throw error dynamically

var fullName="Kamalnath";
var email ="kamalnath121998@gmail.com";
var password = "123456";
var confirmPassword = "123456";
var courseCount =0;
var country= "India";
var state = "TamilNadu";
var district ="Tiruvallur";
var mobile = 908765123;
var age=25;
var dob = "23/12/1998";
var gender = "male";
var isLoggedInFromGoogle = false;
var isLoggedInFromFaceBook = false;

//Interpolation
console.log(`
With Unique id: ${uid}
User is: ${fullName}
and his/her email is:  ${email}
and uses the password: ${password}
User's country is: ${country}
User's state is: ${state}
User's district is: ${district}
User's contact number is: ${mobile}
User's age is: ${age}
User's dob is: ${dob}
User's gender is: ${gender}
`)