var users = ["Ted", "Tim", "Ton" , "Sam", "Sor", "Sod"];
//slice -  birthday cakse
console.log(users.slice(1,4)); 

var users2 = ["Ted", "Tim", "Ton" , "Sam", "Sor", "Sod"];
//slice -  birthday cakse
console.log(users2.slice(3)); 

var users3 = ["Ted", "Tim", "Ton" , "Sam", "Sor", "Sod"];
users3.splice(1,3, "Hi", "Bye");
console.log(users3);

//The most important difference between splice and slice is that splice changes the actual array while slice creates a new copy of the array.

