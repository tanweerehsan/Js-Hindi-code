// ******************** DATE *************************

let myDate = new Date();

// console.log(myDate);

// console.log(myDate.toString());

// console.log(myDate.toDateString());

// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 1, 13); // to create a new or specific date

// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2024-02-13"); // this is anothe method for YY_MM_DD

// console.log(myCreatedDate.toDateString());

// ******************** TIME *********************

// let myTimeStamp = Date.now()

// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

console.log(newDate.toLocaleString("default", {
    weekday: "long"
}));
