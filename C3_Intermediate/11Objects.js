var user = {
    // key : va;ue
    firstName: "Kamal",
    lastName: "B",
    role: "Admin",
    loginCount : '32',
    faceBookSignedIn : true
};

//access value of object
console.log(user.firstName);
console.log(user); //dumpout everything
//console.log(user[lastName]); // not defined error on run time
console.log(user["lastName"]);

console.log(user.loginCount);
user.loginCount = 48;
console.log(user.loginCount);

console.table(user);