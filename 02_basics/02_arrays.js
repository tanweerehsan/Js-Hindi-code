const marvel_heroes = ["Thor", "Ironman", "Spiderman"];
const dc_heroes = ["Superman", "Batman", "Flash"];

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes); // isme direct dc_heroes ke elements ko ek single array ke tor pr push kr dya.

// const allHeroes = marvel_heroes.concat(dc_heroes); // concat ke madad se 2 alag alag arrays ke elements ko ek sath merge kra jata h

// console.log(allHeroes);


// const all_new_heroes = [...marvel_heroes, ...dc_heroes]; // yeh same kaam concat ke hi jaisa. isse spread method kehte hai . mostly coder spread method hi use krte h.

// console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const new_another_array = another_array.flat(Infinity);

console.log(new_another_array);

console.log(Array.isArray("Tanweer")); // for checking is it array or not.
console.log(Array.from("Tanweer")); // for converting into an array.
console.log(Array.from({name: "Tanweer"})); // here provide empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

