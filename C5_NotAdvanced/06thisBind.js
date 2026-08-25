const Kamal ={
    firstName: "Kamal",
    lastName: "Chalu",
    role: "Admin",
    courseCount: 5,
    getInfo: function(){
        console.log(`First Name is: ${this.firstName}
        Last Name is: ${this.lastName}
        Role is: ${this.role}
        Course Count is: ${this.courseCount}`);
    }
}

const dj = {
    firstName: "DJ",
    lastName: "Rock",
    role: "Sub-Admin",
    courseCount: 3,
}

//Bind
console.log("Bind");
Kamal.getInfo.bind(dj)(); // Bind will create a new function and return it, so we need to call it with () at the end
var djInfo = Kamal.getInfo.bind(dj);
djInfo(); // Now we can call the new function

//Call
console.log("Call");
Kamal.getInfo.call(dj); // Call will call the function immediately with the provided context
