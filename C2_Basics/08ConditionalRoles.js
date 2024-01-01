// Create an appication with following roles
// admin - get full access
// sub admin - get access to create or delete courses
// testprep - get access to create or delete tests
// user - get access to consume content.

var user= "admin";
switch (user) {
    case "admin":
       console.log("Get full access");
       //return console.log("Get full access");
        break;

    case "subadmin":
    console.log("Get get access to create or delete courses access");
    break;

    case "testprep":
    console.log("Get get access get access to create or delete tests");
    break;

    case "user":
    console.log("get access to consume content.");
    break;

    default:
        console.log("Trail user.");
        break;
}
