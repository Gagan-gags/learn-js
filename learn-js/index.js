//*** Section 3 Values and variables in Javascript

// Naming Variables: rules and best practices
// The first character must be a letter or an underscore(_) or an dollar($), You can't use number as the first character.
// The rest of the variable name can including any letter , any number or the underscore. Can't use  any other characters, including spaces.
// vaiable names are the case senstive.
// no limit to the lenght of the variable 

// var _my__Name = 'javascript Learning';
// var my_Age = 34;
// console.log(my_Age);

// Naming practice *********
// var _myName = "Java learn"; valid
// var 1myName = "Testing Number"; not valid
// var _1my_Name = "testing with underscore"; valid
// var $myName = "testing wit dollar"; valid
// console.log($myName);

/**** Section 4👉 Data Types in JavaScript ****/

//Six Data types that are premitives,
// undefined:typeof instance === "undefined"
// Boolean:typeof intsance === "boolean"
// Number:typeof intsance === "number"
// String:typeof intsance === "string"
// bigInt:typeof intsance === "bigint"
// Symbol:typeof intsance === "symbol"

// var myName = "55";
// console.log(typeof(myName));

// var myAge = 55;
// console.log(typeof(myAge));

// check for type of boolean
// var myName = true;
// console.log(myName);
// console.log(typeof(myName));

//bigint will check later
//sybmol will check later

// console.log(10 + "20");
// console.log(10 - "20"); // bug
// console.log("Learn" - "javascript"); // Output NaN Not a number

// console.log(true - false); // 1

//🙋‍👨‍🏫 Interview Question 1 🙋‍👨‍🏫
// Difference between null vs undefined? 

// var iamnull = null;
// console.log(iamnull); // output will null 
// console.log(typeof(iamnull));
//2nd javscript bug


// var iamStandBy;
// console.log(iamStandBy); // output will undefined  
// console.log(typeof(iamStandBy));



// 🙋‍👨‍🏫 Interview Question 2 🙋‍👨‍🏫
// What is NaN?

// NaN is a property of a global object.
// In other words, it is variable in global scope.
// The initial value of NaN is Not-A-Number.

// var myName = "Gagan Kumar";
// var myPhoneNumber = 7807035525;

// console.log(isNaN(myName));
// console.log(isNaN(myPhoneNumber));

// if(isNaN(myName)){
//     console.log("Please enter a valid number");
// }

// NaN practice

// NaN === NaN;
// Number.NaN === NaN;
// isNaN(NaN);
// isNaN(Number.NaN);
// Number.isNaN(NaN);

// console.log(Number.isNaN(NaN));

//* Expression and Operators *//
// Assignment operators
// Arithmetic operators
// Comparison oprators
// Logical oprators
// String operators
// conditional (ternary) operators

// 1️⃣Assignment operators
// An assignment operator assigns a value to its left operand 
// based on the value of its right operand. 
// The simple assignment operator is equal (=)

// var x = 5; 
// var y = 5;

// console.log("is both the x and y are equal or not" + x == y );

// I will tell you when we will see es6
// console.log(`Is both the x and y are equal : ${x == y}`);


// 2️⃣Arithmetic operators
// An arithmetic operator takes numerical values 
// (either literals or variables) as their operands and 
// returns a single numerical value.

// console.log(3+3);
// console.log(10-5);
// console.log(20/5);
// console.log(5*6);

// console.log("Remainder Operator " + 27%4);


// 🙄Increment and Decrement operator
// Operator: x++ or ++x or x-- or --x
// If used postfix, with operator after operand (for example, x++), 
// the increment operator increments and returns the value before incrementing.

// var num = 15;
// var newNum = num++ + 15;
// console.log(num);
// console.log(newNum);

// var num = 15;
// var newNum = num-- - 5;
// console.log(num);
// console.log(newNum);

// If used prefix, with operator after operand (for example, ++x), (prefix)
// the increaments operator Increaments and return the value after increamenting.

// var num = 15;
// var newNum = ++num;
// console.log(num);
// console.log(newNum);

// prefix increament operator means the variable increament first and then 
// the expression is evaluated usign new value of the variable.

// var num = 15;
// var newNum = --num + 5;
// console.log(num);
// console.log(newNum);

//=================================
// 3️⃣Comparison operators
// A comparison operator compares its operands and 
// returns a logical value based on whether the comparison is true.

// var a = 20;
// var b = 30;
// // Equal (==)
// console.log(a == b);

// var a = 20;
// var b = 15;
// // Not Equal (=/=)
// console.log(a != b);

// Greater than >

// var a = 20;
// var b = 30;
// // Greater than >
// console.log(a > b);

// Less than <

// var a = 20;
// var b = 30;
// // Less than <
// console.log(a < b);

// 4️⃣ Logical operators
// Logical operators are typically used with Boolean (logical) values; 
// when they are, they return a Boolean value.

// var a = 30;
// var b = -20;

// Logical AND (&&)
// The logical AND (&&) operator (logical conjunction) for a set of 
// operands is true if and only if all of its operands are true.

// console.log(a > b && b > 0);


// console.log((a > b) || (b > 50) || (b > 0));


// Logical OR (||)
// The logical OR (||) operator (logical disjunction) for a set of 
// operands is true if and only if one or more of its operands is true.

// console.log( !((a > 0) || (b < 0)) );


// Logical NOT (!)
// The logical NOT (!) operator (logical complement, negation) 
// takes truth to falsity and vice versa.


// 5️⃣ String Concatenation(operators)
// The concatenation operator (+) concatenates two string values together, 
// returning another string that is the union of the two operand strings.


// console.log("hello " + " world") // helloworld "two string values together"




