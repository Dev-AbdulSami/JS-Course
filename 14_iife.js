// Immediately Invoked Function Expression (IIFE)

// jo function Immediately call hojae
// global scope k pollution se problem hoti he sometimes, so us global scope ki declarations hen us k polltion ko remove krne k hum iife use krte hen.
// iife k functions ki execution ko hame stop bhi krna prta he

// (function one(){
//     console.log("DB CONNECTED");
// })()


// (function two(){
//     console.log("DB CONNECTED TWO");
// })()

// They show errors, is case me function call k bad semi colon lgana prega


// (function one(){
//     console.log("DB CONNECTED");
// })();


// (function two(){
//     console.log("DB CONNECTED TWO");
// })()


// (function one(){
//     console.log("DB CONNECTED");
// })();

// (function one(){
//     console.log("DB CONNECTED");
// })();

// ( () => {
//     console.log("DB CONNECTED TWO");
// })()


// ( (name) => {
//     console.log(`DB CONNECTED TWO ${name}`);
// })("Sam")

