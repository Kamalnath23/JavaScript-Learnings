var User = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is: ${this.courseCount}`);
    }
}

var Kamal = new User("Kamal", 2);
var Chalu = new User("Chalu", 3);
var Shaka = new User("Shaka", 4);

// console.log(Kamal);
// console.log(Chalu);
// console.log(Shaka);

User.prototype.getFirstName = function(){
    console.log(`Your first name is: ${this.firstName}`);
}

Kamal.getCourseCount();
console.log("Using Kamal.firstName: " + Kamal.firstName);
Kamal.getFirstName();

Chalu.getCourseCount();
Chalu.getFirstName();

if(Kamal.hasOwnProperty("firstName")){
    console.log("Kamal has firstName property");
    Kamal.getFirstName();
} else {
    console.log("Kamal does not have firstName property");
}