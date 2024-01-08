tipper("100");
//calculate tip
function tipper(a) {
    var bill=parseInt(a); //converts String to usable number.
    console.log(bill+5);
}

tipper(10);
tipper("5");
tipper("A")//Nan --> Not A Number

bigTipper("200");
function bigTipper(a) {
    var bill=parseInt(a); //converts String to usable number.
    console.log(bill+15);
}

bigTipper("200");


//bigTipper2("200");
var bigTipper2 = function (a) {
    var bill=parseInt(a); //converts String to usable number.
    console.log(bill+15);
}

bigTipper2("200");

console.log(name);
var name = "Kamal";
console.log(name);

function saymyName() {
    var name = "Ms.San"
    console.log(name);
}

saymyName();

console.log(name);