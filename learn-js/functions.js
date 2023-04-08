// ************************************************************

/**** Section 5 👉 Functions in JavaScript ****/

// A JavaScript function is a block of code designed to perform a particular task.


//  1️⃣ Function Definition 

// Before we use a function, we need to define it. 

// A function definition (also called a function declaration, or function statement) 
// consists of the function keyword, followed by:

// The name of the function.
// A list of parameters to the function, enclosed in parentheses and separated by commas.
// The JavaScript statements that define the function, enclosed in curly brackets, {...}.

// function functionName( ){
//     // statement
// }

// function sum(){
//     var a = 10, b = 20;
//     var total = a+b;
//     console.log(total);
// }

// sum(); // function

// sum(20, 20);
// sum(50, 50);

// console.log( sum() );

// 2️⃣ Calling functions
// Defining a function does not execute it.
// A JavaScript function is executed when "something" invokes it (calls it).
//function Calling


// What is the difference between Function paramenters and Function Arguments::


// 3️⃣ Function Parameter vs Function Arguments  //
// Function parameters are the names listed in the function's definition. 
// Function arguments are the real values passed to the function.


// function sum(a, b){  // passign the parameters 
//     var total = a+b;
//     console.log(total);
// }

// sum();
// sum(20, 30); 
// sum(50, 50); 


// 🙋‍👨‍🏫 Interview Question 🙋‍👨‍🏫  

// Why Functions? 

// You can reuse code: Define the code once, and use it many times.
// You can use the same code many times with different arguments, 
// to produce different results.

  // OR

// A function is a group of reusable code which can be called anywhere 
// in your program. This eliminates the need of writing the same code 
// again and again.

// DRY => do not repeat yourself ;



// 4️⃣ Function expressions
// "Function expressions simply means 
// create a function and put it into the variable "

// function sum(a, b){  // passign the parameters 
//     var total = a+b;
//     console.log(total);
// }

// var funExp = sum(5, 10);
// funExp;

// 5️⃣ Return Keyword
// When JavaScript reaches a return statement, 
// the function will stop executing.

// Functions often compute a return value.
// The return value is "returned" back to the "caller"

// function sum(a, b){  // passign the parameters 
//     return total = a+b;
// }

// var funExp = sum(5, 10);
// funExp;
// console.log(funExp);


// 6️⃣ Anonymous Function

// A function expression is similar to and has the same syntax 
// as a function declaration One can define "named" 
// function expressions (where the name of the expression might 
// be used in the call stack for example) 
// or "anonymous" function expressions.

// var funExp = function(a, b){  // Anonymous Function
//     return total = a+b;
// }

// var sum = funExp(5, 15);
// var sum1 = funExp(20, 15);

// console.log(funExp);

// function name(parameter1, parameter2, ... parameterN) {
//   // body
//  }

// Local variables
// A variable declared inside a function is only visible inside that function.

// For example:

// function showMessage() {
//   let message = "Hello, I'm JavaScript!"; // local variable

//   alert( message );
// }


// showMessage(); // Hello, I'm JavaScript!

// alert( message ); // <-- Error! The variable is local to the function

// Outer variables
// A function can access an outer variable as well, for example:



// let userName = 'john smith';
// function showMessage(){
//   let userName = 'new name';
//   let message = 'heloo new user, ' + userName;
//   console.log(message); 
// }
// showMessage();
// console.log(userName);

// The outer variable is only used if there’s no local one.

// If a same-named variable is declared inside the function then it shadows the outer one. For instance, in the code below the function uses the local userName. The outer one is ignored:

// Global variables
// Variables declared outside of any function, such as the outer userName in the code above, are called global.

// Global variables are visible from any function (unless shadowed by locals).

// It’s a good practice to minimize the use of global variables. Modern code has few or no globals. Most variables reside in their functions. Sometimes though, they can be useful to store project-level data.

// Parameters
// We can pass arbitrary data to functions using parameters.

// In the example below, the function has two parameters: from and text.

// function showMessage(from, text){
//   console.log(from +': '+ text);
// }
// showMessage('Hello', 'Gagan');
// showMessage('john here', "What's up?"); // Ann: What's up? (**)

// When the function is called in lines (*) and (**), the given values are copied to local variables from and text. Then the function uses them.

// Here’s one more example: we have a variable from and pass it to the function. Please note: the function changes from, but the change is not seen outside, because a function always gets a copy of the value:

function showMessage(from, text){
  from = ' * ' + from + ' * ';
  console.log(from +': '+ text);
}
let from = 'John Here';
showMessage('Hello', 'Gagan');
// the value of "from" is the same, the function modified a local copy
console.log(from);

// When a value is passed as a function parameter, it’s also called an argument.
// In other words, to put these terms straight:

//  . A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).
//  . An argument is the value that is passed to the function when it is called (it’s a call time term).

