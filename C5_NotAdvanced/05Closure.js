function init(){
    console.log("Hello from C5_NotAdvanced/05Closure.js");
    var firstName = "John";
    function sayFirstName(){
        console.log(firstName);
    }
    return sayFirstName;
}

var sayFirstName = init();
sayFirstName();