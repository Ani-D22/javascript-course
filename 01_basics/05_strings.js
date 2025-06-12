const name = "Javascript ";
const repoCount = 50;

const exampleName = new String('Python ');

console.log(name.toLowerCase() + repoCount + " Value");
console.log(`Hello, my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

console.log(exampleName);
console.log(exampleName[0]);
console.log(exampleName.__proto__);
console.log(exampleName.length);
console.log(exampleName.toUpperCase());
console.log(exampleName.charAt(3));
console.log(exampleName.indexOf("t"));

const sName = "  Aniket Date  ";

console.log(sName.substring(3,7));
console.log(sName.slice(-10,7));

console.log(sName.trim());            // "Aniket Date"
console.log(sName.toUpperCase());     // "  ANIKET DATE  "
console.log(sName.includes("Date"));  // true
console.log(sName.slice(3, 8));       // "Aniket"

console.log(sName.replace("Aniket","Tushar"))
console.log(sName);
console.log(sName.split('t'));
console.log(sName.split(' '));
console.log(sName.small());

/**
 * 🔤 Basic Information
 * Method	               Description
 * length	                Returns the length of the string
 * charAt(index)	        Returns character at given index
 * charCodeAt(index)	    Returns UTF-16 code of character at index
 * at(index)	            Like charAt, but supports negative indices
 * 
 * 🔍 Searching Methods
 * Method	                   Description
 * indexOf(substring)	        First index of match, -1 if not found
 * lastIndexOf(substring)	    Last index of match
 * includes(substring)	        Checks if substring exists (returns true/false)
 * startsWith(substring)	    Checks if string starts with substring
 * endsWith(substring)	        Checks if string ends with substring
 * 
 * ✂️ Slicing & Substrings
 * Method	                   Description
 * slice(start, end?)	        Returns part of string (supports negatives)
 * substring(start, end?)	    Similar to slice, but no negative indices
 * substr(start, length?)	    Deprecated – like slice, but second arg is length
 * 
 * 🔁 Manipulation
 * Method	                       Description
 * toUpperCase()	                Converts to uppercase
 * toLowerCase()	                Converts to lowercase
 * trim()	                        Removes whitespace from both ends
 * trimStart() / trimEnd()	        Removes whitespace from start/end
 * padStart(targetLength, padStr)	Pads at start to reach length
 * padEnd(targetLength, padStr)	Pads at end to reach length
 * repeat(count)	                Repeats string count times
 * replace(old, new)	            Replaces first match
 * replaceAll(old, new)	        Replaces all matches
 * 
 * 🔗 Concatenation & Splitting
 * Method	                   Description
 * concat(str1, str2, ...)	    Concatenates strings
 * split(separator, limit?)	    Splits string into array
 * join() (array method)	    Joins array into string
 * 
 * 🧪 Regular Expressions
 * Method	                   Description
 * match(regex)	                Returns array of matches or null
 * matchAll(regex)	            Returns iterator of all matches
 * search(regex)	            Returns index of match or -1
 * replace(regex, replacement)	Can use regex with capture groups
 * 
 * 🌐 Other Useful Methods
 * Method	               Description
 * localeCompare(other)	    Compares two strings according to locale
 * normalize()	            Unicode normalization
 * toString()	            Returns string representation
 * valueOf()	            Returns primitive value of string
 * 
 */