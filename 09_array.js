// const myArr = [0,1,2,3,4,5]
// const students = ["Robert","Albert"]

// const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);

// myArr.push(6)
// console.log(myArr);

// myArr.pop()
// console.log(myArr);

// myArr.unshift(9)
// console.log(myArr);


// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(3));
// console.log(myArr.indexOf(2));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);

// console.log(typeof newArr);

const myArr = [0,1,2,3,4,5]
console.log(myArr);


// The slice() method can be used to create a copy of an array or return a portion of an array. It is important to note that the slice() method does not alter the original array but instead creates a shallow copy.

// const myArr1 = myArr.slice(1,3)
// console.log(myArr1);


// Unlike the slice() method, the splice() method will change the contents of the original array. The splice() method is used to add or remove elements of an existing array and the return value will be the removed items from the array.

// const myArr2 = myArr.splice(1,3)
// console.log(myArr);
// console.log(myArr2);

// console.log(myArr);

// https://www.freecodecamp.org/news/javascript-slice-and-splice-how-to-use-the-slice-and-splice-js-array-methods/

// const cities = ["Tokyo","Cairo","Los Angeles","Paris","Seattle"];

// const newCityArr = cities.slice(2);

// console.log("Original: ", cities)
// console.log("New: ", newCityArr)


// const cities = ["Tokyo","Cairo","Los Angeles","Paris","Seattle"];

// const newCityArr = cities.slice(1,2);

// console.log("Original: ", cities)
// console.log("New: ", newCityArr)


// const food = ['pizza', 'cake', 'salad', 'cookie'];
// const spliceArr = food.splice(1,2)
// console.log(spliceArr);

// const food = ['pizza', 'cake', 'salad', 'cookie'];
// console.log(food)
// food.splice(1,2,"burrito")

// console.log(food)


// [ 'pizza', 'cake', 'salad', 'cookie' ]
// [ 'pizza', 'burrito', 'cookie' ]


const marvel_heores = ["thor","Ironman","Spiderman"]
const dc_heroes = ["superman","flash","Aquaman"]

// marvel_heores.push(dc)
// console.log(marvel_heores[3]);
// console.log(marvel_heores[3][1]);


// const merge_heroes = marvel_heores.concat(dc_heroes)
// console.log(merge_heroes);

// spread operator

// const all_heroes = [...marvel_heores,...dc_heroes]
// console.log(all_heroes);


// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

// const real_array = another_array.flat(1)
// const real_array = another_array.flat(Infinity)

// console.log(real_array);


// console.log(Array.isArray("sami"));
// console.log(Array.from("sami"));

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1,score2,score3));
