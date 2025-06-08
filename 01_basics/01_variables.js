/**
 * VARIABLES IS JAVASCRIPT:
 * 
 * Keyword	            Hoisted?	        Value Hoisted?	Can be used before declaration?
 * var	                ✅ Yes	            ❌ No (set to undefined)	⚠️ Works, but may be undefined
 * let / const	        ✅ Yes (but in TDZ)	❌ No	                ❌ ReferenceError (in TDZ)
 * function	            ✅ Yes	            ✅ Yes	                ✅ Yes
 * function expression	❌ No	            ❌ No	                ❌ TypeError
 * class	            ✅ Yes (but in TDZ)	❌ No	                ❌ ReferenceError
 */


const accountId = 144553;    //constant is like final in java
let accountEmail = "example.email@gmail.com";    //stays in it's scope like local in java
var accountPassword = "12345";      //no scope limit like global in java
accountCity = "Mumbai";     //internally behaves like a var
let accountState;       //undefined variable

// "use strict"; //implements strict mode but only after this line
/**
  * Prefer not to use var
  * because of issue in block scope and functional scope.
*/

// accountId = 2 //not allowed
console.log(accountId);

accountEmail = "ad@gmail.com";
accountPassword = "54321";
accountCity = "Delhi";

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
//prints everything in tabular form
