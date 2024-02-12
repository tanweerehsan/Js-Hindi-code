// 'const' ka use tab karte h jab assign ki gayi value mei koi chnges nhi karna ho. Or 'let' ka use tab karte h jab assign ki gayi value mei koi chnges karna ho.

const accountId = 14453
let accountEmail = "Tan@gmail.com"
var accountPassword = "12345"
accountCity = "Asansol"
let accountState;

//accountId = 2 // after running code 'const'not allowed to chnge the value.

accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "Burnpur"

console.log(accountId);

/*
Prefer not to user 'var'
beacuse of issue in block scope amd functional scope

*/
// ek sath sbhi ko console me run karne or values ko paane ke liye 'console.table' k use krnege.
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])