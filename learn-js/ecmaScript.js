

// ************************************************************

// 👻 Now It's Time for Modern JavaScript 😍😍 

// 🙏🙏 Features of ECMAScript 2015 also known as ES6 🙏🙏

// Template String

// Default Arguments 

// Rest Oprator 

// Destructuring

// Oject properties

// Arrow function

// Spread Operator

// 1️⃣ LET VS CONST  vs  VAR

// var myName= "Gagan Kumar";
// console.log(myName);
// myName = "Kumar Gagan";
// console.log(myName);


// let myName= "Gagan Kumar";
// console.log(myName);
// myName = "Kumar Gagan";
// console.log(myName);


// const myName= "Gagan Kumar";
// console.log(myName);
// myName = "Kumar Gagan";
// console.log(myName); // we cannot change const variable 

// function biodata(){ // function scope
//     const myFirstName = "Gagan";
//     console.log(myFirstName);
//     if (true){// block scope
//         const myLastName = "Kumar"
//         console.log('inner' + myLastName); 
//         console.log('inner' + myFirstName);
//     }
//     console.log('innerouter' + myLastName);
// }

// biodata();

// Var =>  Function Scope
// let and const => block scope



// 2️⃣ Template literals (Template strings) 

// JavaScript program to print table for given number (8)?

// output :  8 * 1 =8 
        //   8 * 2 = 16(8*2)
        //   => 8 * 10 = 80 

        // for(let num = 1; num<= 10; num++){
        //     let tableOf = 12;
        //     console.log(`${tableOf} * ${num} = ${tableOf * num}`);
        // }

// 3️⃣  Default Parameters
// Default function parameters allow named parameters to be 
// initialized with default values if no value or undefined is passed.

// function mult (a,b = 5){
//     return a*b;
// }
// // console.log(mult(10)); // output not a number
// console.log(mult(2)); // output not a number


// 6️⃣ Fat Arror Function 

// Arrow functions are a short syntax
// Arrow functions allow us to use the fat arrow => operator to quickly define JavaScript functions, with or without parameters.
// 👻 Normal Way of writing Function  
// normal using 
// function sum(){
//     let a = 5; b = 10;
//     let sum = a+b;
//     return `the sum of two number is ${sum}`;
// }

// fat arrow function
// const sum = () => `the sum of two number is ${(a=5)+(b=10)}`;
// console.log(sum());

