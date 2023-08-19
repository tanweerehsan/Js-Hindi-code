const accountId = 14453
let accountEmail = "Tan@gmail.com"
var accountPassword = "12345"
accountCity = "Asansol"
let accountState;

//accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "Burnpur"

console.log(accountId);
/*
Prefer not to user var
beacuse of issue in block scope amd functional scope

*/

console.table([accountId, accountEmail, accountPassword, accountCity])