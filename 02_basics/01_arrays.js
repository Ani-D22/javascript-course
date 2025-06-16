// arrays : part 1
// arrays are always shallow copied 

// =======================================================================

const arr1 = [0, 1, 2, 3, 4, 5];

// console.log(arr1);
// console.log(arr1[2]);

// arr1.push(6);
// arr1.push(7);
// arr1.unshift(21);
// arr1.shift();
// console.log(arr1);

// =======================================================================

const arr2 = ['Indore', 'Bhopal', 'Gwalior', 'Jabalpur'];

// console.log(arr2.includes('Indore'));
// console.log(arr2.indexOf('Dhar'));

// =======================================================================

const arr3 = arr1.join();
// console.log(arr1);
// console.log(arr3);

// console.log(typeof arr1);
// console.log(typeof arr3);
 
// =======================================================================

// slice and splice

console.log("Before Slicing ",arr1);
const myN1 = arr1.slice(1, 3);      // (1, 3) is a range, from 1 to before 3
console.log(myN1);
console.log("After Slicing ",arr1);

/**
 * (1, 3) is not a range, from 1 to 3
 * Additionally old array is literally cut in two.
 */
const myN2 = arr1.splice(1, 3);      
console.log(myN1);
console.log("After Splicing ",arr1);