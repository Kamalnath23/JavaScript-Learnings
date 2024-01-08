var name= "Kamal"; //bigger guy

console.log("Line number 3", name);
//smaller one
function saymyName(params) {
    var name = "Sandhiya";
    console.log("Line number 7", name);
    sayName2();
    function sayName2() {
        console.log("Line number 10", name);
    }
}
saymyName();

//scope
function abc(){

}

//js wont consider this as a complete scope.
{

}
if(2===2){

}