var user = {
    // key : value
    firstName: "Kamal",
    lastName: "B",
    role: "Admin",
    loginCount : '32',
    faceBookSignedIn : true,
    courseList: [],
    //method 1
    buyCourse: function (courseName){
        //if you want to refer to a variable which is inside the same object you wnat to refer. we use the keyword this
        this.courseList.push(courseName);
    },

    buyCourse2:  () => {

    },

    getCourseCount: function (){
        //var length= courseList.length;
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },

    //Method which returns info
    getUserInfo: function(){
        //this.buyCourse(coursePurchaes)
        return `USER DATA:
        firstName: ${this.firstName},
        lastName: ${this.lastName}",
        role: ${this.role},
        loginCount : ${this.loginCount},
        faceBookSignedIn : ${this.faceBookSignedIn},
        courseList: ${this.courseList},
        bought Courses: ${this.courseList.length},
        `
    }
    
};
user.buyCourse("React JS");
user.buyCourse("Angular JS");

console.log(user.getUserInfo());