// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Tanweer",
    "full name": "Tanweer Ehsan",
    [mySym]: "mykey1",
    age: 18,
    location: "Asansol",
    email: "myemail@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
} // symbol ko use krne ke liye sqaure bracket must use krna h. nahi to ye as a string wrk krnga.

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) . value ko lock krne k liye freeze keyword k use krte h
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());