// for (let i = 0; i <=10; i++) {
//     const element = i;
//     console.log(element);
// }


// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop ${i}`);

//     for (let j = 0; j <= 10; j++) {
//         console.log(`Inner loop ${j}`);
           
//     }
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop ${i}`);

//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
           
//     }
// }

// let myArray = ["flash","batman","superman"]
// console.log(myArray.length);

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

// for (let index = 0; index <= 20; index++) {
   
//     if(index == 5){

//         console.log("Detected 5");
//         break
//     }
//     console.log(`Value of i is ${index}`);
    
// }


// for (let index = 0; index <= 20; index++) {
   
//     if(index == 5){

//         console.log("Detected 5");
//         continue
//     }
//     console.log(`Value of i is ${index}`);
    
// }

// let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

// let score = 11

// do {

//     console.log(`Score is ${score}`);
//     score++

// }while(score <= 10)


// let correctPassword = "12345";
// let userInput = "";

// while (userInput !== correctPassword) {
//   userInput = prompt("Enter the password:");
// }

// console.log("Access granted!");

// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello world"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);  
// }

// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection.

const map = new Map()
map.set('PK','Pakistan')
map.set('IN','India')
map.set('USA ','United state of america')

// console.log(map);
// console.log(map.get('PK'));
// console.log(map.size);
// map.delete('IN')
// console.log(map.size);

// for (const key of map) {
    
//     console.log(key);
    
// }

// for (const [key,value] of map) {
    
//     console.log(key, ':- ', value);
    
// }

// const myObject = {

//     game1 : "Cricket",
//     game2 : "Carrom board"
// }

// for (const [key,value] of myObject) {
    
//     console.log(key, ':- ', value);
    
// }


const myObject = {

    js: "Javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by Apple" 
}

// for (const key in myObject) {
//     console.log(key);  
// }

for (const key in myObject) {
    // console.log(key);  
    // console.log(myObject[key]);  
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// const programming = ["js","rb","py","java","cpp"]

// for (const key in programming) {

//     console.log(`${key} shortcut is for ${programming[key]}`);
    
// }

// for...of Loop
// With Arrays:
// The for...of loop is ideal for iterating over arrays because it directly accesses the values of the array elements.


// With Objects:
// The for...of loop is not directly usable with plain objects because objects are not iterable by default. If you try to use it with a plain object, it will result in an error.


// for...in Loop
// With Arrays:
// The for...in loop can be used with arrays, but it is generally not recommended because it iterates over the array indices (keys) rather than the values. It also iterates over all enumerable properties, including inherited ones, which can lead to unexpected behavior.


// With Objects:
// The for...in loop is ideal for iterating over the properties of an object because it directly accesses the keys (property names) of the object.



// forEach in JavaScript is a method (specifically, a higher-order function) and not a traditional loop like for, while, or do...while. However, it is often used to iterate over elements of an array, which makes it function similarly to a loop.

// Key Points About forEach:
// Type: forEach is a method provided by the Array prototype.
// Purpose: It is used to execute a provided function once for each array element.
// Arguments: The callback function passed to forEach receives three arguments: the current element, the index of the current element, and the array itself.
// Return Value: forEach does not return anything (undefined), meaning it cannot be chained like some other array methods (e.g., map, filter).
// Asynchronous Behavior: forEach does not work with async/await and does not support break or continue, which are typical in loops.


const programming = ["js","rb","py","java","cpp"]

// programming.forEach( function(item){

//     console.log(item);
    
// } )


// programming.forEach( (item) => {

//     console.log(item);
    
// } )


// programming.forEach( (item,index,array) => {

//     console.log(item,index,array);
    
// } )

const myCoding = [

    {
        languageName: "Javascript",
        languageFileName: "js"
    },

    {
        languageName: "Python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {

   console.log(item.languageName)
//    console.log(item.languageFileName)
   
})


const values = programming.forEach( (item) => {

    // console.log(item);
    return item
    
})

// console.log(values);


// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num % 2 == 0 )

// In JavaScript, the return statement is necessary within a function to explicitly send back a value to the caller. When you use methods like filter, map, or reduce, these methods rely on the callback function to return a value that determines how the method behaves.

// const newNums = myNums.filter( (num) => {

//     return num % 2 == 0
// } )


// console.log(newNums);

// same work using for each

// const newNums = []

// myNums.forEach( (num) => {

//     if(num % 2 == 0){

//         newNums.push(num)
//     }
// })

// console.log(newNums);


const books = [
    {
        title: "To Kill a Mockingbird",
        genre: "Fiction",
        publish: 1960,      // Year of publication
        edition: 1999       // Edition year (different from publish year)
    },
    {
        title: "1984",
        genre: "Dystopian",
        publish: 1949,
        edition: 1983       // Edition year (different from publish year)
    },
    {
        title: "The Great Gatsby",
        genre: "Classic",
        publish: 1925,
        edition: 2004       // Edition year (different from publish year)
    },
    {
        title: "The Catcher in the Rye",
        genre: "Fiction",
        publish: 1951,
        edition: 1991       // Edition year (different from publish year)
    },
];

// console.log(books);


let userBooks = books.filter( (bk) => bk.genre === 'Classic')
userBooks = books.filter( (bk) => {
    return bk.publish > 1950 && bk.genre === 'Fiction'
})
// console.log(userBooks);

// The map method in JavaScript is used to create a new array by applying a given function to each element of an existing array. It iterates over the array, applies the function to each element, and returns a new array containing the results.

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNumbers = myNumbers.map( (num) => num + 10)
// const newNumbers = myNumbers.map( (num) => {return num + 10})

// Chaining

const newNumbers = myNumbers
                    .map( (num) => num * 10)
                    .map( (num) => num + 1)
                    .filter( (num) => num >= 40 )
// console.log(newNumbers);


const booksobj = [
    { title: "To Kill a Mockingbird", genre: "Fiction", publish: 1960 },
    { title: "1984", genre: "Dystopian", publish: 1949 },
    { title: "The Great Gatsby", genre: "Classic", publish: 1925 }
];

const titles = booksobj.map(function(book) {
    return book.title;
});

// console.log(titles); // Outputs: ["To Kill a Mockingbird", "1984", "The Great Gatsby"]


const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,currVal){
     
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal

// },0)

// same in arrow function

// const myTotal = myNums.reduce( (acc, currVal) => acc + currVal )

// console.log(myTotal);

const shoppingCart = [

    {
        itemName: "JS Course",
        price: 6999
    },

    {
        itemName: "GoLang Course",
        price: 8999
    },

    {
        itemName: "PHP Course",
        price: 10999
    },

    {
        itemName: "Python Course",
        price: 13999
    }
]

const totalBill = shoppingCart.reduce( (acc,item) => acc + item.price,0)

console.log(totalBill);

