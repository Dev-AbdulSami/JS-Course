// this keyword current context ko refer krta he. context means ks bare me bat horhi he. this means current value.

// const user = {
//     username: "Abdulsami",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`);
//     }
// }

// // user.welcomeMessage // is trha run krne se kch nhi aega output me because welcomeMessage ek function he
// // user.welcomeMessage() 
// // user.username = "Sam" // now context change, context means simpy value. ab this.username me sam aega
// // user.welcomeMessage()


// const user = {
//     username: "Abdulsami",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
        
//     }
// }

// user.welcomeMessage // is trha run krne se kch nhi aega output me because welcomeMessage ek function he
// user.welcomeMessage() 
// user.username = "Sam" // now context change, context means simpy value. ab this.username me sam aega
// user.welcomeMessage()

const user = {
    username: "Abdulsami",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage // is trha run krne se kch nhi aega output me because welcomeMessage ek function he
// user.welcomeMessage() 
// user.username = "Sam" // now context change, context means simpy value. ab this.username me sam aega
// user.welcomeMessage()

// console.log(this); // isko browser me run krenge to output different hoga and using node different.

// browser me global object ka name he window


// function one(){

//     const username = "Sam"
//     // console.log(this.username);  they show undefined , because is trha ki fucntion definition me this kam nhi krta  
//     console.log(this); //  // show multiple properties
    
// } 
// one() 

// const one = function(){

//     const username = "Sam"
//     // console.log(this.username); they show undefined , because is trha ki fucntion definition me this kam nhi krta
//     console.log(this);  // show multiple properties
 
// }
// one() //  

// const one = () => {

//     const username = "Sam"
//     // console.log(this.username);  they show undefined , because is trha ki fucntion definition me this kam nhi krta
//     console.log(this);  // empty object
// }

// one() //  

// const addTwo = (num1,num2) => {

//    return num1 + num2
// }

// Implicit Return
// return likhne ki need nhi he is me
// const addTwo = (num1,num2) => num1 + num2
// const addTwo = (num1,num2) => (num1 + num2)  // ye bhi ek way he implicit return likhne ka
const addTwo = (num1,num2) => ({username:"abdulsami"}) // return object in arrow function implicitly 

console.log(addTwo(5,7));
