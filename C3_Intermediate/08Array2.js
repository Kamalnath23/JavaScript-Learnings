function isEven(element){
    if(element %2 ===0){
        return true;
    }
    return false;
}

console.log(isEven(2));
console.log(isEven(3));

//optimised code
function isEven2(element){
    return element %2 ===0;
}
console.log(isEven2(2));
console.log(isEven2(3));

var isEven3 =  (element) => {
    return element %2 ===0;
}
console.log(isEven3(2));
console.log(isEven3(3));