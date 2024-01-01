// undefined
// null
// 0
// ''
// above data values are considered as false
// NaN

var user;
console.log(user);
if(user){
    console.log("1. Condition is true");
}

var temp = null;
console.log(temp);
if(temp){
    console.log("2. Condition is true");
}
temp="";
if(temp){
    console.log("3. Condition is true");
}
temp=0;
console.log(temp);
if(temp){
    console.log("4. Condition is true");
}

console.log(2+2);
console.log(2+"2");
console.log("2"+2);
console.log("2"+"2");

var value = "2";
if(2 == value){
    console.log("5. Condition is true");
}

if(2 === value){
    console.log("6. Condition is true");
}

