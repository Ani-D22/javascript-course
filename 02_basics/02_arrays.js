// arrays : part 2

const mp = ['Indore', 'Bhopal', 'Ujjain'];
const mh = ['Mumbai', 'Pune', 'Kolhapur'];

console.log(mp+'\n'+mh+'\n');

mp.push(mh);                    //  Manipulates existing array
console.log(mp);
console.log();

const cities = mp.concat(mh);   //  Does not manipulate existing array, returns addition of both arrays
console.log(cities);

const allCities = [...mp, ...mh];
console.log(allCities);

const arr4 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const arr5 = arr4.flat(Infinity);
console.log(arr5);

let str = "Javascript"
console.log(Array.isArray(str));
console.log(Array.from(str));
console.log(Array.from({name : str}));      // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));