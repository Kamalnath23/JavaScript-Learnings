var User={
    name:"",
    getUserName:function(){
        console.log(`User name is: ${this.name}`);
    }
}

var Kamal = Object.create(User);
Kamal.name = "Kamal";
Kamal.getUserName();

var Chalu = Object.create(User);
Chalu.name = "Chalu";
Chalu.getUserName();

var Shaka = Object.create(User, {name: {value: "Shaka"}, courseCount: {value: 4}});
Shaka.getUserName();