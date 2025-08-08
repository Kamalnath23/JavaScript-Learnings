var user = {
    // key : va;ue
    firstName: "Kamal",
    lastName: "B",
    role: "Admin",
    loginCount : '32',
    faceBookSignedIn : true,
    courseList: [], //array
    //method 1
    buyCourse: function (courseName){ //function
        //if you want to refer to a variable which is inside the same object you wnat to refer. we use the keyword this
        this.courseList.push(courseName);
    },

    buyCourse2:  () => {

    },

    getCourseCount: function (){
        //var length= courseList.length;
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
        
    }
};

console.log(user.getCourseCount());
user.buyCourse("React JS")
console.log(user.getCourseCount());
user.buyCourse("Angular JS")
console.log(user.getCourseCount());