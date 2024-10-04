// let a = 10
// const b = 20
// var c = 3

// console.log(a);
// console.log(b);
// console.log(c);
// var c = 300
let a = 300
{
    let a = 10
    const b = 20
    // var c = 30
    // console.log(c);
    // console.log("Inner ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


// function one(){

//     const username = "Abdulsami"

//     function two(){
//         const website = "abc.com"
//         console.log(username); // ye run hojaega because function two k lie username global he
//     }
//     // console.log(website); ye error show krega because website variable ka scope local he
    
//     two()
// }

// one()


// if(true){

//     const username = "abdulsami"
//     if(username == "abdulsami"){

//         const website = " abc.com"
//         console.log(username + website);
//     }

//     console.log(website);
// }

// console.log(username);

// console.log(addOne(5))
// function addOne(num){

//     return num + 1
// }
// Same as in function expression except calling. addOne declaration se pehle call hoskta he but addTwo nhi.
addTwo(5)
const addTwo = function(num){

    return num + 1
}

