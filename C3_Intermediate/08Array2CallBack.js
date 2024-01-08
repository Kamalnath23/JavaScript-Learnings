var isEven3 =  (element) => {
    return element %2 ===0;
}

var result = [2,4,6,8].every(isEven3); //every goes into array and look for every single element. and perform the function.
console.log(result);

var result2 = [2,3,6,8].every(isEven3); //every goes into array and look for every single element. and perform the function.
console.log(result2);

///call back
//2 ways

var result3 = [2,4,6,8].every((element) => {
    return element%2===0;
} ); //every goes into array and look for every single element. and perform the function.
console.log(result3);

var result4 = [2,4,6,8].every((element) =>
     element%2===0
 ); //every goes into array and look for every single element. and perform the function.
console.log(result3);
