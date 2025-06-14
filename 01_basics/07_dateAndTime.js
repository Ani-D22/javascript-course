// Date

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.getTimezoneOffset());
console.log(typeof(myDate));

let myCreatedDate = new Date(2025, 1, 12);

console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let stringDate = new Date("2025-01-14");
console.log(stringDate.toLocaleString());

let myTimestamp = Date.now();

console.log(myTimestamp);
console.log(myDate.getTime());
console.log(Math.floor(myTimestamp/1000));


let newDate = new Date();
console.log(newDate);

// `${newDate.getDay()} and the Time`

let localeDate = newDate.toLocaleString('default',{
    weekday: "long",
    hour: "numeric"
});

console.log(localeDate);