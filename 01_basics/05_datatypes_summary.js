// Primitive or Non Reference

// 7 types : String, Number, Boolean, Null, undefined, Bigint, Symbol

const score =100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

// const bigNumber = 669542125855n


// Reference (Non Premitive)

//  Array, Objects, Function

const heros = ["shaktiman", "naagraj","doga"];  // Array example
let myObj= {
    name: "tanweer",
    age: 22,
} // Object example

const myfunction = function (){
    console.log("Hello World");
} // Function example

console.log(typeof bigNumber);



// ******************************Memory **************************

// Stack Memory (Primitive), Heap Memory (Non-Primitive)

let myYoutubename = "GadgetKnight"

let anothername = myYoutubename
anothername = "Just4uh"

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email: "user@gmail.com",
    upi: "user@paytm"
}

let userTwo = userOne

userTwo.email = "usertwo@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);