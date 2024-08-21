const accountId = 14453
let accountEmail = "devabdulsami@google.com"
var accountPassword = "12345"
accountCity = "Karachi"
let accountState;

//accountId = 2 // Not allowed

accountEmail = "dev@google.com"
accountPassword = "223344"
accountCity = "Lahore"

// console.log(accountId);

// Prefer not to use var
// because of issue in block and functional scope

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
