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

// =======================================

let demo = 3
let negativeDemo = -demo
console.log(negativeDemo)

console.log(2+2);
console.log(2-2);
console.log(2/2);
console.log(2%2);
console.log(2*2);
console.log(2**2);

let str1 = "Hello";
let str2 = " JavaScript";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log(1 + 2 + 2);
console.log(+true);
console.log(+"");


let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
console.log(num1);

console.log("2" > 1);
console.log("02" > 1);

/**
 * In javascript, the comparison(>,<,>=,<=)
 * and equality-check(==) operators behave differently
 * the equality-check works as usual but
 * the comparison operators convert a null value to a 0
 * and then performs action on them.
 */

console.log(null > 0);
console.log(null == 0);
console.log(null <= 0);
console.log(null >= 0);
console.log(undefined >= 0);


/**
 * A (===) strict check operator is used to strict check equality of operands.
 * This differs from the (==) operator as it checks for the value
 * as well as the data-type of them as well.
 */

console.log("2" === 2)