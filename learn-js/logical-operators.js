// There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing). 
// Here we cover the first three, the ?? operator is in the next article.

// || (OR)

// The “OR” operator is represented with two vertical line symbols:
// In classical programming, the logical OR is meant to manipulate boolean values only. 
// If any of its arguments are true, it returns true, otherwise it returns false.

// for example

// For instance, the number 1 is treated as true, the number 0 as false:
"use strict";

// let hour = 8;

// if (hour < 9 || hour > 18) {
//   console.log(hour);
// }

// Exmaple 2:
// let gettingHours = new Date().getHours();
// let actualHours = (gettingHours < 0 || gettingHours < 7)
// if (gettingHours < 10 || gettingHours < 18){
//     console.log('office is open')    
// } else{
//     console.log('office is closed')    
// }


// Exmaple 3:
// function currentDate(){
//     // let monthNames = [ "January", "February", "March", "April", "May", "June",
//     // "July", "August", "September", "October", "Novebmer", "December" ];
//     let weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'] [new Date().getDay()];                       

//     let today = new Date();
//     // let dd = today.getDate();
//     // let mm = monthNames[today.getMonth()];
//     // let yyyy = today.getFullYear();
//     let day = weekdays[today.getDay()];

//     today = 'Date is : ' + dd + '-' + day + '-' + mm + '-' + yyyy; 
// }

// console.log(weekdays[today.getDay()]);

// && (AND)
// The AND operator is represented with two ampersands &&:

// In classical programming, AND returns true if both operands are truthy and false otherwise:

// alert( true && true );   // true
// alert( false && true );  // false
// alert( true && false );  // false
// alert( false && false ); // false

// An example with if:
// let hour = 12;
// let minute = 30;

// if (hour == 12 && minute == 30) {
// console.log( 'The time is 12:30' );
// }

// AND “&&” finds the first falsy value

// Evaluates operands from left to right.
// For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
// If all operands have been evaluated (i.e. all were truthy), returns the last operand.

// In other words, AND returns the first falsy value or the last value if none were found.

// ! (NOT)
// The boolean NOT operator is represented with an exclamation sign !.

// The syntax is pretty simple:

// The operator accepts a single argument and does the following:

// Converts the operand to boolean type: true/false.
// Returns the inverse value.
