"use strict";   //implements strict mode but only after this line | Use all JS code as newer version

// alert(3 + 3);    //cannot use because we are using node.js and not browser
console.log(3 + 3);

let name = 'Raman'      // string
let age = 21    // int
let isLoggedIn = false  // boolean
let state = null    // null
let country;    // undefined
let salary = 40000.00   // float

// symbol => unique
//object

console.log(typeof(state))
console.log(typeof null)
console.log(typeof undefined)

/**
 * Variable Ranges:
 * 
 * number => 2^53
 * bigint
 * string => "" | ''
 * null => standalone value
 * undefined => value not yet defined
 */