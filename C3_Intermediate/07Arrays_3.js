// Array methods and empty slots

const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
colors.reverse();
colors.forEach(function (item, index)  {
  console.log(`${index}: ${item}`);
});
console.log(""); 
// ['red', 'yellow', 'blue', <2 empty items>, 'purple']
colors.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});
console.log(""); 
// Output:
// 0: red
// 1: yellow
// 2: blue
// 5: purple

colors.reverse(); // ['purple', empty × 2, 'blue', 'yellow', 'red']
//console.log(colors.reverse());
//console.log(""); 
console.log(colors); // ['purple', <2 empty items>, 'blue', 'yellow', 'red']
