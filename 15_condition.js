// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, nan

// truthy values

// "0", 'false', " ", [], {} function(){}

// let userDetails = []

// if(userDetails.length === 0){
//     console.log("Array is empty");
// }

// const emptyObject = {id:1}

// if(Object.keys(emptyObject).length == 0){

//     console.log("Empty object");
    
// }

// Nullish Coalescing Operator (??): null undefined

// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.The nullish coalescing operator can be seen as a special case of the logical OR (||) operator. The latter returns the right-hand side operand if the left operand is any falsy value, not only null or undefined


// const foo = null ?? 'default string';
// console.log(foo);
// // Expected output: "default string"

// const baz = 0 ?? 42;
// console.log(baz);
// // Expected output: 0

// let val1;
// val1 = 5 ?? 10
// console.log(val1);

// let val1;
// val1 = null ?? 10
// console.log(val1);


// Ternary operator

// condition ? true : false

// const iceTeaPrice = 100

// iceTeaPrice <= 80 ? console.log("less than 80") : console.log("More than 80");
// ;
