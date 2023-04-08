/**** Section 7👉 Arrays in JavaScript  ****/

// When we use var, we can stored only one value at a time. 
// An array is an object that can store multiple values at once. 
// For example, const words = ['hello', 'world', 'welcome']; Here, words is an array. 

// var person1 = "Amit";
// var person2 = "vishal";
// var person3 = "Shubham";

// var myFriends = [
//     'ramesh',22,male,
//     'arjun',20, male,
//     'vishal', true, 52
// ];

// When we feel like storing multiple values in one variable then 
// instead of var, we will use an Array.

// In JavaScript, we have an Array class, and 
// arrays are the prototype of this class. 

// example 🏁
// array is index number start with 0 'zero'

// var myFriends = [
//     'ramesh',22, male, // lower index or lower boundary
//     'arjun',20, male,  //
//     'vishal',true, 52 // upper index or upper boundary
// ];

//what we will do the method use:

// Traversal of an array ;
// searching and filter in an array ;
// how ro sort and compare an array ;
// how to insert , ADD , replace, and delete element in array(CRUD Operations) ;
// Map(), reduce(), Filter ;


// 1️⃣ Array Subsection 1 👉 Traversal in array✌ 
// navigate through an array

// if we want to get the single data at a time and also 
// if we want to change the data 

// var myFriends = [
//     'ramesh', // lower index or lower boundary
//     'arjun',  
//     'vishal',
//     'arjun',  
//     'vishal',
//     'arjun',  
//     'vishal',
//     'arjun',  
//     'vishal',
//     'arjun',  
//     'vishal',
//     'Gagan'// upper index or upper boundary
// ];

// console.log(myFriends[myFriends.length - 1]);

// // if we want to check the length of elements of an array 

// console.log(myFriends.length);

// we use for loop to navigate 
// var myFriends = ['ramesh', 'arjun' ,'vishal', 'gagan'];

// // for loop
// for(var i = 0; i<myFriends.length; i++){
//     console.log(myFriends[i]);
// }

// After ES6 we have for..in and for..of loop too 

// for in loop
// The for..in loop in JavaScript allows you to iterate over all property keys of an object.
// The for in loop iterates over a person object
// Each iteration returns a key (x)
// The key is used to access the value of the key
// The value of the key is person

// for in loop are using for index of an array 
// var myFriends = ['ramesh', 'arjun' ,'vishal', 'gagan'];

//     for(let elements in myFriends){
//         console.log(elements);
//     }

// for of loop 
// iterable - an iterable object (array, set, strings, etc).
// element - items in the iterable

// for of loop are using for particalar array of an element
// var myFriends = ['ramesh', 'arjun' ,'vishal', 'gagan'];

//     for(let elements of myFriends){
//         console.log(elements);
//     }

 // Array.prototype.forEach() 🙋‍♂️
// Calls a function for each element in the array.

// The forEach() method calls a function for each element in an array.
// The forEach() method is not executed for empty elements.

// var myFriends = ['ramesh', 'arjun' ,'vishal', 'gagan'];

// myFriends.forEach(function (element, index, array) { // call backfunction use 
//     console.log(element + " index : " + index + " " + array);
// });

//using fat arrow function

// var myFriends = ['ramesh', 'arjun' ,'vishal', 'gagan'];

// myFriends.forEach((element, index, array) => { // call backfunction use 
//     console.log(element + " index : " + index + " " + array);
// });


// 2️⃣ Array Subsection 2 👉 Searching and Filter in an Array 

// Array.prototype.indexOf() 🙋‍♂️

// Returns the first (least) index of an element within the array equal 
// to an element, or -1 if none is found. It search the element from the 
// 0th index number 


// var myFriendNames = ["manoj", "arjun" , "Thapa", "subham", "pradeep", "kumar", "amit", "ravinder", "gagan"];

// console.log(myFriendNames.indexOf("Thapa", 6)); // farward search


// Array.prototype.lastIndexOf() 🙋‍♂️
// Returns the last (greatest) index of an element within the array equal 
// to an element, or -1 if none is found. It search the element last to first

// var myFriendNames = ["manoj", "arjun" , "Thapa", "subham", "pradeep", "kumar", "amit", "ravinder", "gagan"];

// console.log(myFriendNames.lastIndexOf("amit")); // backward search




// Array.prototype.includes() 🙋‍♂️
// Determines whether the array contains a value, 
// returning true or false as appropriate.

// var myFriendNames = ["manoj", "arjun" , "vishal", "subham", "pradeep", "kumar", "amit", "ravinder", "gagan"];
// console.log(myFriendNames.includes("vishal")); // just searching the value true and false, if the element find then the output will be true else false


// Array.prototype.find() 🙋‍♂️

// arr.find(callback(element[, index[, array]])[, thisArg])

// Returns the found element in the array, if some element in the 
// array satisfies the testing function, or undefined if not found.
// Only problem is that it return only one element

// const prices = [200,300,350,400,450,500,600];


// const findElem = prices.find((currVal) => {
//     currVal < 400;
// });

// // console.log(findElem);
// console.log(prices.find((currVal) => currVal < 400) );


// Array.prototype.findIndex() 🙋‍♂️

// Returns the found index in the array, if an element in the 
// array satisfies the testing function, or -1 if not found.


// console.log(  prices.findIndex((currVal) => currVal > 1400 )  ); // find the index value


// Array.prototype.filter() 🙋‍♂️

// Returns a new array containing all elements of the calling 
// array for which the provided filtering function returns true.

// const prices = [200,300,350,400,450,500,600];

// // price < 400
// const newPriceTag = prices.filter((elem, index) => {
//   return elem < 400;
// })
// console.log(newPriceTag);

//============================================

// 3️⃣ Array Subsection 3 👉 How to sort an Array

// Array.prototype.sort() 🙋‍♂️

// The sort() method sorts the elements of an array in place and 
//returns the sorted array. The default sort order is ascending, built 
//upon converting the elements into strings, 
// then comparing their sequences of UTF-16 code units values.

// const months = ['March', 'Jan', 'Feb', 'April', 'Dec' , 'Nov'];

// console.log(months.sort()); // ssorting

let numbers = [0, 1 , 2, 3, 10, 20, 30 ];
numbers.sort();
console.log(numbers);

// const array1 = [1, 30, 4, 21, 100000, 99];
// console.log(array1.sort());

// However, if numbers are sorted as strings, 
// "25" is bigger than "100", because "2" is bigger than "1".

// Because of this, the sort() method will produce an incorrect 
// result when sorting numbers.

// 😀7: challenge Time 🏁

// 1: How to Sort the numbers in the array in ascending (up) and descending (down) order?
// compareFunction	Optional. 
// A function that defines an alternative sort order. The function should return a negative, zero, or positive value, depending on the arguments, like:
// function(a, b){return a-b}

///for asecnding order 
// array1.sort(function(a,b){
//     console.log(a,b);
//     if(a>b){
//         return 1;
//         // b comes first and then a 
//     }
//     if(a<b){
//         // a comes first and then b 
//         return -1;
//     }
//     if(a==b){
//         // No changes
//         return 0;
//     }
// });
// console.log(array1);

//      1 .map()
//      2 .reduce()
//      3 .filter()
// 4 .includes()
// 5 .find()
//      .splice()
//      .slice()
//      .split
//      .push()
//      .forEach
//      .sort()
//      .indexOf
//      .findIndex()

//  oops -- obejct orient programing






