//Show user a signup if he is authenticated,
//otherwise, show him option to login or signup.

var authenticated = false;
// if(authenticated){
//     console.log("Show signout button");
// }else{
//     console.log("Show login option.");
// }

authenticated ?  console.log("Show signout button") : console.log("Show login option.");