function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}
greet("Kamal", function() {
  console.log("Welcome!");
});
