// D = (L - S)/L * 100 ;
var sellingPrice = 199;
var listingPrice=799;

var discountPercent = ((listingPrice - sellingPrice)/ listingPrice) *100;
console.log("Dicount perentage is: ",discountPercent);

displayDiscountPercentage = Math.round(discountPercent);
console.log("Display Dicount perentage is: ",displayDiscountPercentage+ " % off!");

var result = listingPrice > sellingPrice;
console.log(result);
console.log(typeof result);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

