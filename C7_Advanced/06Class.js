class Avengers{
    // constructor(){
    //     console.log("Inside avengers default constructor. \n you got a suit!");
        
    // }

    constructor(name, power, weapon){
        this.name=name;
        this.power=power;
        this.weapon=weapon;
        console.log(`${this.name} you got a suit! with ${this.power} and ${this.weapon}`);
    }

    getAvengerDetails(){
        console.log(`${this.name}'s power: ${this.power}`);
        console.log(`${this.name}'s weapon: ${this.weapon}`);
    }

    getInfo(){
        return `Avenger name: ${this.name}, ${this.name}'s power: ${this.power}, ${this.name}'s weapon: ${this.weapon}`;
    }

    #powerType=[];

    //setters and getters
    //setter
    //setter is used to set the value of a property
    enrolPowerType(power){
        this.#powerType.push(power);
    }

    //getter
    //getter is used to get the value of a property
    getPowerType(){
        return this.#powerType;
    }
}

module.exports = Avengers;
