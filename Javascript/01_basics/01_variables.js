const accountId = 144553
let accountEmail = "ayesha@google.com"
var accountPassword = "12345"
accountCity = "Bangalore"
let accountState;

// accountId = 2 // not allowed


accountEmail = "ay@ay.com"
accountPassword = "21212121"
accountCity = "Bengalore"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])