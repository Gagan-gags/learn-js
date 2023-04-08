/**** Section 6👉 Control Statement - 
 * 
 * 1️⃣If...Else */
// The if statement executes a statement if a specified condition is truthy. 
// If the condition is falsy, another statement can be executed.

// var tomr = 'sunny';
// if(tomr == 'rain'){
//     console.log('take raincoat'); // if false this statment the will go in else statement  if true the execute same 
// }else{
//     console.log('no need to take a raincoat');
// }

// Write a program taht works out wheather 
// if a given year is leap year or not ?

// var year = 2022;
// debugger
// if(year % 4 ===0){
//     if(year % 100 === 0){
//             if(year % 400 === 0){
//                 console.log("This is year " + year + " leap year");
//             }else{
//                 console.log("This is year" + year + " is not a leap year");
//             }
//     }else{
//         console.log("This is year " + year + " leap year");
//     }
// }else{
//     console.log("This is year" + year + " is not a leap year");
// }


// What is truthy and falsy values in Javascript?

// we have total 5 falsy values in javascript
// 👉 0,"",undefined,null,NaN,false** is false anyway

// if(score = 0){
//     console.log("omg, we loss the game");
// }else{
//     console.log("yey, we won the game");
// }

// 2️⃣Conditional (ternary) operator

// The conditional (ternary) operator is the only JavaScript operator 
// that takes three operands
// variablename = (condition) ? value1:value2;
// var age;
// if(age >= 18){
//     console.log("you are eligible to vote")
// }else{
//     console.log("you are not eligible to vote")
// }

// var age = 17;
// console.log((age >= 18) ? "you are eligible to vote" : "you are not eligible to vote");


// 3️⃣ switch Statement
// Evaluates an expression, matching the expression's value to a 
// case clause, and executes statements associated with that case.

// 

// 1st without break statment 
// Find the Area of circle, triangle and rectangle?
// var area =  "rectangle" ;
// var PI = 3.142, l=5, b=4, r=3;

// if(area == "circle"){
//     console.log("the area of the area circle is : " + PI*r**2);
// }else if(area == "triangle"){
//     console.log("the area of the area triangle is : " + (l*b)/2);
// }else if(area == "rectangle"){
//     console.log("the area of the area rectangle is : " + (l*b));
// }else{
//     console.log("Please enter a valid data");
// }
// use to short condition with switch statement 

// var area =  "rectangle" ;
// var PI = 3.142, l=5, b=4, r=3;

// switch(area){
//     case 'circle':
//         console.log("the area of the area circle is : " + PI*r**2);
//         break;
//     case 'triangle':    
//         console.log("the area of the area triangle is : " + (l*b)/2);
//         break;
//     case 'rectangle':  
//         console.log("the area of the area rectangle is : " + (l*b));  
//         break;
//    default:
//     console.log("Please enter a valid data");
// }

// 🤗break
// Terminates the current loop, switch, or label 
// statement and transfers 
// program control to the statement following the terminated statement


// 🤗continue
// Terminates execution of the statements in the current iteration of the 
// current or labeled loop, and continues execution of the loop with the 
// next iteration.

// 4️⃣ While Loop Statement
// The while statement creates a loop that executes a specified statement 
// as long as the test condition evaluates to true. 

// var num = 0;
// // block scope 
// while (num <= 2000){ // when the value is ture thenafter while loop enter execute the code 
//     console.log(num);// infinit loop
//     num++;
// }

// 5️⃣ Do-While Loop Statement

// var num = 20;
// do{
//     console.log(num);
//     num++;
// }while(num <= 10);
// // when the condition is not check and true then it will not showing the execute code 
// // first execute code and then after check the condition:


// 6️⃣ For Loop 

// for (initializer; condition; iteration){
//     //code to be executed
// }

// for (var i = 0; i <= 10; i++){
//     debugger;
//     console.log(i);
// }


// 😀 6: challenge Time 🏁
// JavaScript program to print table for given number (8)?

// for (var num = 1; num <= 10; num++){
//     var tableOf = 10;
//     console.log(tableOf + " * " + num + " = " + tableOf * num);
// }

// The “while” loop
// The while loop has the following syntax:
// A single execution of the loop body is called an iteration. The loop in the example above makes three iterations.


// while (condition) {
//   // code executed
//   // so-called "loop body"
// }

// While the condition is truthy, the code from the loop body is executed.

// For instance, the loop below outputs i while i < 3:

// let i = 0;
// while (i < 3) { 
//   alert( i );
//   i++;
// }
// shows 0, then 1, then 2
// A single execution of the loop body is called an iteration. The loop in the example above makes three iterations.

// The “do…while” loop
// The condition check can be moved below the loop body using the do..while syntax:

// do {
//     // loop body
// } while (condition);
// let i = 0;
// do {
//     i++;
// } while (i < 3);
// console.log(i);
// The “for” loop
// for (begin; condition; step) {
//     // ... loop body ...
// }
// for (let i = 10; i < 10; i++){
//     console.log(i);
// }
// ========================================================

// The "for..in" loop
// To walk over all keys of an object, there exists a special form of the loop: for..in. 
// This is a completely different thing from the for(;;) construct that we studied before.

// The syntax:
// for (key in object) {
//   // executes the body for each key among object properties
// }

// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//   };
//   for (let users in user) {
//     // keys
//     console.log( users );  // name, age, isAdmin
//     // values for the keys
//     console.log( user[users] ); // John, 30, true
//   }

//   let codes = {
//     "49": "Germany",
//     "41": "Switzerland",
//     "44": "Great Britain",
//     // ..,
//     "1": "USA"
//   };
  
//   for (let code in codes) {
//     console.log(code); // 1, 41, 44, 49
//   }

// print even number in given array
// Function `printEven()` prints all the even numbers of a 2D array using for loops and ‘%’ operator.

// function printEven(arr){
//     for(var i=0; i<arr.length; i++){
//         if(arr[i]%2==0){
//             console.log(arr[i]); // print even number
//         }
//     }
// }
// var arr = [13,23,12,45,22,48,66,100]
// printEven(arr);

// 4. Write a JS code to delete all occurrence of element in given array
// Function `deleteElement()` deletes all the occurrence of element from the given array.
// function deleteElement(arr, ele){
//     for(var i=0; i<arr.length; i++){
//         if(arr[i]==ele){
//             arr.splice(i,1); // Delete element from an array 
//         }
//     }
//     return arr;
// }
// var arr = [44,55,33,66,44,44,88,99,22,44,33,66,44,44,88,99];
// arr = deleteElement(arr, 44);
// console.log(arr); //

// 5. Write a JS code to demonstrate Async loop
// For loop consisting of setTimeout() function to print loop variable 5 times in asynchronous way.

// for (var i=0; i<10; i++){
//     setTimeout(()=>console.log(i), 2000);
// }

// Write a JS code to find the power of a number using for loop
// Function numPower() to returns power of number for provided exponential value using for loop.

// function numPower(num, pow){
//     var res=1; // return 1b for pow = 0
//     for(var i=0; i<pow; i++){
//         res = res*num; 
//     }
//     return res;
// }
// console.log(numPower(8, 3));
// 7. Write a JS code to print a pattern using for loop
//    Function printPattern() is used to print a pattern for a given range using nested for loop.

// function printPattern(range){
//     for(var i=0; i<range; i++){
//         var str="";
//         for(var j=0; j<=i; j++){
//             str += j+" ";
//         } 
//         console.log(str);
//     }
// }
// printPattern(15);

// find the largest number in an array 
// var arr = [122, 35, 36, 45, 85, 200, 600, 50, 20]
// var largest = arr[0];
// for(var i=0; i<arr.length; i++){
//     largest = arr[i]>largest ? arr[i]:largest; //Check largest number
// }
// console.log(largest);

// find the smallest number in an array 
// var arr = [122, 35, 36, 45, 85, 200, 600, 50, 20, 5]
// var smallest = arr[0];
// for(var i=0; i<arr.length; i++){
//     smallest = arr[i]<smallest ? arr[i]:smallest; //Check largest number
// }
// console.log(smallest);

