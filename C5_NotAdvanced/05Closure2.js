function doAdditiion(x){
   return function(y){
         return x + y;
   }
}

var add5= doAdditiion(3);
console.log(add5(5)); // Output: 8
console.log(doAdditiion(5)(5)); // Output: 10