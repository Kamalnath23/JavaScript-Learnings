console.log(this)

var user={
    firstName: "Kamal",
    courseCount:4,
    getCourseCount: function () {
        console.log("Line 7 ", this);
        function sayHello() {
            console.log("Hello!");
            console.log("Line 10", this);
        }
        sayHello(); // for all regular function calls, 'this' refers to the global(window) object (or undefined in strict mode)
    }
};

user.getCourseCount();

function sayHello() {
    console.log("Hello!");
}
sayHello();