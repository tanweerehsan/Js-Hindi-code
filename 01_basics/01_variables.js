// 'const' ka use  wha jaha value mei koi chnges nhi hota hai . or 'let' ka use wha jaha value chnge ho skta hai.

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
// ek sath sbhi ko console me run karne value ko paane ke liye 'console.table' k use krnege.
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])