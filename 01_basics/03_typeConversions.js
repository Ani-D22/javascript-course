"use strict";
let score = "33";                       //score

// let score = null                     //NaN
// let score = undefined                //NaN
// let score = true                     //true=1 or false=0
console.log(typeof score);              //string

let scoreInNumber = Number(score);      //type-casting
console.log(typeof(scoreInNumber));     //number
console.log(scoreInNumber)

let value = "33abc";                    //value
console.log(typeof(value));             //string

let valueInNumber = Number(value);      //type-casting
console.log(typeof valueInNumber);      //number
console.log(valueInNumber);             //Not a Number


let isLoggedIn = 1                              //true=1 or false=0
// let isLoggedIn = ""                          //true="any-string" or false=""
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(isLoggedIn)
console.log(booleanisLoggedIn)



let num = 312;
let stringNum = String(num);
console.log(stringNum);
console.log(typeof stringNum);