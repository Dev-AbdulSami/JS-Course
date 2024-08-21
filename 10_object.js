// singleton
//Object.create()  is trha object create krne ko constructor method k through kaha jata he, and is trha se he singleton oject bnta he.

// object literals

const mySym = Symbol["key1"]

const jsUser = {
    name: "Sami",
    "full name": "AbdulSami",
    [mySym]: "mykey1",
    age: 18,
    location: "Karachi",
    email: "sami@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Friday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(typeof jsUser[mySym]);

jsUser.email = "sami@gmail.com"
// console.log(jsUser);

// Object.freeze(jsUser)
jsUser.email = "subhan@gmail.com"
// console.log(jsUser);

jsUser.greeting = function(){

    console.log(`Hello JS user, ${this.name}`);
}

// console.log(jsUser.greeting());


const tinderUser = new Object()
tinderUser.name = "Sami"
tinderUser.email = "sami@abc.com"
// console.log(tinderUser);


const regularUser = {

    email: "robert@yopmail.com",
    fullname: {

        userFullName:{

            firstName: "Abdul",
            lastName: "Sami"
        }
    }
}

// console.log(regularUser.fullname.userFullName);


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign(obj1,obj2)
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
// console.log(obj3);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("test"));


const course = {

    courseName: "JS Course",
    price: "999",
    courseInstructor: "AbdulSami"
}

// console.log(course.courseInstructor);
// console.log(course.courseInstructor);
// console.log(course.courseInstructor);

// Object de-structure
const {courseInstructor} = course
const {courseInstructor: instructor} = course

console.log(instructor);
console.log(instructor);
console.log(instructor);
