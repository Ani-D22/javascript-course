/**
 * # PRIMITIVE DATA TYPES :-
 * 7 Types: String, Number, Boolean, null, undefined, Symbol, BigInt;
 */

const name = "Example";
const score = 100;
const scorValue = 100.21;

const isLoggedIn = true;
const outsideTemp = null;
let userEmail = undefined;

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);

// const bigNumber = 73265982750892379872398402937082437520n
console.log(typeof bigNumber)

/**
 * # REFERENCE DATA TYPES | NON-PRIMITIVE DATA TYPES :-
 * Array, Object, Function;
 */

const ballers = ['Ronaldo', 'Messi', 'Neymar', 'Bale'];
console.log(typeof ballers)

let myObj = {
    name: "ObjName",
    age: 21,
    class: '5th'
};
console.log(typeof myObj)

const myFunction = function(){
    console('Hello World')
}
console.log(typeof myFunction)      //This is called as a funtion-object



// ========================================================================

/**
 * MEMORY MANAGEMENT IN JS :-
 * 
 * 1. Stack:    Used in Primitive Data Types        :       actual copy of values is used 
 * 2. Heap:     Used in Non-Primitive Data Types    :       reference of object is used
 */