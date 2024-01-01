//Allow users to access the course.
//Logged in from email
//Logged in from google
//Logged in from FB

var email = true;
var facebook = false;
var google=false

if(email || facebook || google){
    console.log("Login is successful.");
}