import pkg from './08Inheritance.js'; // Why not use import here? Because we are using module.exports in 08Inheritance.js, so we have to use require here. If we use import here, it will give an error.
const { Marvel } = pkg; // Why not use import here? Because we are using module.exports in 08Inheritance.js, so we have to use require here. If we use import here, it will give an error.


let Thanos = new Marvel("Thanos", "Infinity Gauntlet", "Super Strength");
let Loki = new Marvel("Loki", "Illusions and Manipulation", "Scepter");

Thanos.getAvengerDetails();
Loki.getAvengerDetails();

Thanos.enrolPowerType("Universal");
Loki.enrolPowerType("Illusions");

console.log("Thanos Power Type: " + Thanos.getPowerType());
console.log("Loki Power Type: " + Loki.getPowerType());
Thanos.getMarvelDetails();
let ThanosInfo = Thanos.getInfo(); //Marvel name: Thanos, Thanos's power: Infinity Gauntlet, Thanos's weapon: Super Strength
console.log(ThanosInfo); //Marvel name: Thanos, Thanos's power: Infinity Gauntlet, Thanos's weapon: Super Strength
console.log(Thanos.getInfo); //undefined because getInfo is a method, not a property
Marvel.sayHello(); //Hello from Marvel class
