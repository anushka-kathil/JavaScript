const accountId= 144453
let email="abc@google.com"
var password="12345"

accountCity="Pune"  // not good practice
let accountState; // semicolon doesn't matter

console.table([accountId,email,password,accountCity,accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


email="xyz@google.com"
var password="1212"

accountCity="Mumbai"

console.table([accountId,email,password,accountCity,accountState])