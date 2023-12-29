const a = 1;
const b = 2;
const c = 3;

console.log();
// default precedence
//a + b * c; // 7
// evaluated by default like this
console.log(a + b * c);
//a + (b * c); // 7
console.log( + (b * c));
// now overriding precedence
// addition before multiplication
console.log((a + b) * c);
//(a + b) * c; // 9

// which is equivalent to
console.log(a * c + b * c);
//a * c + b * c; // 9