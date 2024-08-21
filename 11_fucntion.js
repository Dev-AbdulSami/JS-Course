// function addTwoNumbers(number1,number2){

//     console.log(number1 + number2);   
// }

// let result = addTwoNumbers(11,11)
// console.log(result);

function addTwoNumbers(number1,number2){

    // console.log(number1 + number2);   
    return number1 + number2
    // console.log("Heloo"); unreachable
    
}

// let result = addTwoNumbers(11,11)
// console.log(result);


// function loginUserMessage(username){

//     return `${username} just logged in`
// }

// loginUserMessage("Abdul sami")
// console.log(loginUserMessage("Abdul sami"));
// console.log(loginUserMessage()); // undefined

// function loginUserMessage(username){

//     if(username === undefined){

//         console.log("Please enter a username");
//         return
        
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage())


// function loginUserMessage(username = "Sam"){

//     if(username === undefined){

//         console.log("Please enter a username");
//         return
        
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage())\


// function calculateCartPrice(...num1){

//     return num1
// }

// console.log(calculateCartPrice(200,400,600)); output array of numbers


// function calculateCartPrice(val1,val2,...num1){

//     return num1
// }

// console.log(calculateCartPrice(200,400,600,2000)); 200 val1, 400 val2, me save hoga , and others in num1.

// const user = {
//     username: "Abdulsami",
//     price: 1200
// }

// function handleObject(user){

//     console.log(`Username is ${user.username} and price is ${user.price}`);
    
// }
// handleObject(user)

// const user = {
//     username: "Abdulsami",
//     price: 1200
// }

// function handleObject(anyobject){

//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
// }
// // handleObject(user)
// handleObject({
//     username: "Sam",
//     price: 1200
// })

// const myNewArray = [200,400,600,800]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,400,600,800]));
