// Array

const myArr = [0,1, 2, 3, 4, 5]; // array ke element kch bhi ho skte h, chahe wh string ho ya number ya boolean ya khud array v define ho skte h

console.log(myArr[0]);

const myHeroes = ["Spiderman", "Antman", "Superman"];
const myArr2 = new Array (1, 2, 3, 4);


// Array Methods

myArr.push(6); // to add an element in array
console.log(myArr);

myArr.pop(); // to cut the last element of array
console.log(myArr);

myArr.unshift(12); // to add an element in the start of array
console.log(myArr);

myArr.shift(); // to cut the very first element of array
console.log(myArr);

console.log(myArr.includes(9)); // to check the element .if available then return yes and not available then return no.

console.log(myArr.indexOf(3)); // to chck the index of an element

const newArr = myArr.join("-");
console.log(newArr, typeof newArr);

console.log("A", myArr);

const myn1 = myArr.slice(1, 3);
console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1, 3);
console.log(myn2);

console.log("C", myArr);
