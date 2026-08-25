const Avengers = require('./06Class.js'); // Why not use import here? Because we are using module.exports in 06Class.js, so we have to use require here. If we use import here, it will give an error.

class Marvel extends Avengers {
    constructor(name, power, weapon) {
        super(name, power, weapon);
    }

    getMarvelDetails() {
        console.log("MARVEL");
    }
}

module.exports = { Marvel };