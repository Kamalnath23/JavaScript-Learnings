const Avengers = require('./06Class.js'); 
// Why not use import here? Because we are using module.exports in 06Class.js, so we have to use require here. If we use import here, it will give an error.

class Marvel extends Avengers {
    constructor(name, power, weapon) {
        super(name, power, weapon);
    }

    getMarvelDetails() {
        console.log("MARVEL");
    }

    getInfo() {
        return `Marvel name: ${this.name}, ${this.name}'s power: ${this.power}, ${this.name}'s weapon: ${this.weapon}`;
    }

    static sayHello() {
        console.log("Hello from Marvel class");
    }
}

module.exports = { Marvel };