console.log((1+((2**3)*4/5)));
console.log((1+((2**3)*4/5))>>6);

console.log(3 + 10 * 2); // 23
console.log(3 + (10 * 2)); // 23, because parentheses here are superfluous
console.log((3 + 10) * 2); // 26, because the parentheses change the order

const a = 4 ** 3 ** 2; // Same as 4 ** (3 ** 2); evaluates to 262144
console.log(a);

const b = 4 / 3 / 2; // Same as (4 / 3) / 2; evaluates to 0.6666...
console.log(b);


function echo(name, num) {
    console.log(`Evaluating the ${name} side`);
    return num;
  }
  // Exponentiation operator (**) is right-associative,
  // but all call expressions (echo()), which have higher precedence,
  // will be evaluated before ** does
  console.log(echo("left", 4) ** echo("middle", 3) ** echo("right", 2));
  // Evaluating the left side
  // Evaluating the middle side
  // Evaluating the right side
  // 262144
  
  // Exponentiation operator (**) has higher precedence than division (/),
  // but evaluation always starts with the left operand
  console.log(echo("left", 4) / echo("middle", 3) ** echo("right", 2));
  // Evaluating the left side
  // Evaluating the middle side
  // Evaluating the right side
  // 0.4444444444444444


function A() { console.log('called A'); return false; }
function B() { console.log('called B'); return false; }
function C() { console.log('called C'); return true; }

console.log(C() || B() && A());
console.log("2.");
console.log(A() && C() || B());
