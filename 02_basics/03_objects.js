/**
 * There are two ways of declaring an object:
 * 
 * 1. As a Literal: called as a Prototype object
 * 2. Using a Constructor: called as a Singleton object
 */

// Object using Constructor
// Object.create


const myArray = ["h", "i"];


const mySym = Symbol("key1");

//  Object Literals
const jsUser = {
    name: "demoUser",
    "full name": "Javascript User",
    [mySym]: "myKey1",      // Symbol
    age: 18,
    location: "Indore",
    email: "js.user@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
};  // {key: value} pair


console.log(jsUser.email);
console.log(jsUser['email']);
console.log(jsUser['full name']);
console.log(jsUser.mySym);
console.log(typeof jsUser[mySym]); // Print Symbol

jsUser.isLoggedIn = true;
console.log(jsUser.isLoggedIn)

// Object.freeze(jsUser);
jsUser.location = "Bhopal";
console.log(jsUser);


jsUser.greeting = function(){
    console.log('Hello jsUser');
}

jsUser.greeting2 = function(){
    console.log(`Hello jsUser2, ${this.name}`);
}

console.log(jsUser.greeting);
console.log(jsUser.greeting());

console.log(jsUser.greeting2);
console.log(jsUser.greeting2());

const course = {
    courseName: "javascript",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

// Destructuring of an object
const {courseInstructor : ci} = course;

console.log(ci);




// JSON
// {
//     "name": "Hitesh",
//     "courseName": "Javascript",
//     "price": "999"
// }

[
    {},
    {},
    {}
]