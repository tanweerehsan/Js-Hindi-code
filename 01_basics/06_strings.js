const name = "Tanweer"
const repoCount = 50

// console.log(name + repoCount + " Value");

// nowadays aise nhi krte thora modern type me use krte h neeche example hai 

console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);

const  gameName = new String(`tanweer-hc-com`)

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(2)); 
// kis position par character hai ussse check karne ke liye "charAt() ka use krte and alphabet kis position pr hai usse chck krne ke liye "indexOf()"" ka use krte ha.
console.log(gameName.indexOf('n'));


const newString = gameName.substring(0, 4)
console.log(newString);

// substring me negative value nhi de skte hai 

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "  tanweer   "
console.log(newStringOne);
console.log(newStringOne.trim());

// mostly space ko use krne ke liye trim k use krte h

const url = "https//tanweerehsan.in/tanweer%20ehsan"
console.log(url.replace('%20', '-'));

// kisi v word ko replace krne ke liye use karte hai
console.log(url.includes('boy'));

// kch qstn krne ke liye 'includes' k use krte h jo ans me true ya flse dnga

console.log(gameName.split('-'));