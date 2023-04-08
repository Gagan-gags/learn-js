/**** Section 4👉 Data Types in JavaScript ****/

//Six Data types that are premitives,
// undefined:typeof instance === "undefined"
// Boolean:typeof intsance === "boolean"
// Number:typeof intsance === "number"
// String:typeof intsance === "string"
// bigInt:typeof intsance === "bigint"
// Symbol:typeof intsance === "symbol"


// var myName = "Gagan kuMR"; // string
// console.log(typeof(myName));

// var myAge =35; // number
// console.log(typeof(myAge));

// var iAmGagan = false; // boolean
// console.log(iAmGagan);
// console.log(typeof(iAmGagan));

// DataTypes Practice

// console.log(55 + "20"); // string concate togather

// console.log(9 - "5"); // string concate togather // bug
// console.log("Java " + "script"); // string concate togather for one space  output: java script

// console.log("  " + " "); // blank string ouput nothing

// console.log("  " + "0"); // output 0

// console.log("gagan " - "kumar"); // output NaN

// console.log(true + true); // output 2 true=0; false=0;

// console.log(false - true); // output -1 true=0; false=0;

// ========================================================

// 🙋‍👨‍🏫 Interview Question 1 🙋‍👨‍🏫
// Difference between null vs undefined? 

// var iAmNull = null;
// // console.log(iAmNull); // output will come = null  because of value assign the null 
// console.log(typeof(iAmNull)); // output will come = object  because of value assign the null 


// var iAmStandBy;
// console.log(iAmStandBy); // output will come = undefined because of not assign any value  

// var iAmStandBy;
// console.log(typeof(iAmStandBy)); // output will come = undefined because of not assign any value  

// 🙋‍👨‍🏫  Interview Question 2 🙋‍👨‍🏫
// What is NaN?

// NaN is a property of the global object. 
// In other words, it is a variable in global scope.
// The initial value of NaN is Not-A-Number.

// var myPhoneNumber = 7807536265;
// var myName = "Gagan kumar";
// console.log(isNaN(myPhoneNumber));
// console.log(isNaN(myName));

// NaN === NaN;
// Number.NaN ===NaN;
// isNaN(NaN);
// isNaN(Number.NaN);
// Number.isNaN(NaN);

// console.log(Number.isNaN(NaN));


