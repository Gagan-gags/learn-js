/**** Section 5👉 Arithmetic operators in JavaScript ****/

// 1️⃣Assignment operators
// An assignment operator assigns a value to its left operand 
// based on the value of its right operand. 
// The simple assignment operator is equal (=)


// var x = 15;
// var y = 15;
// console.log("Is both the x and y are equal" + x == y);

// I will tell you when we will see es6
// console.log('Is both the x and y are equal + ${x == y}');


// 2️⃣Arithmetic operators
// An arithmetic operator takes numerical values 
// (either literals or variables) as their operands and 
// returns a single numerical value.

// var a = 5;
// var b = 20;
// c =  a + b;
// console.log(c);

// var a = 5;
// var b = 20;
// c =  a - b;
// console.log(c);

// var a = 20;
// var b = 20;
// c =  a / b;
// console.log(c);

// var a = 5;
// var b = 20;
// c =  a - b;
// console.log(c);

// console.log(" Remainder operator" + 30%3);


// 🙄Increment and Decrement operator
// Operator: x++ or ++x or x-- or --x
// If used postfix, with operator after operand (for example, x++), 
// the increment operator increments and returns the value before incrementing.

// var num = 15;
// var newNum =  num++ + 5;
// console.log(num);
// console.log(newNum);

// // Postfix increment operator means the expression is evaluated 
// // first using the original value of the variable and then the 
// // variable is incremented(increased).

// var num = 15;
// var newNum =  ++num + 5; 
// console.log(num);
// console.log(newNum);


// Prefix increment operator means the variable is incremented first and then 
// the expression is evaluated using the new value of the variable.


// 3️⃣Comparison operators
// A comparison operator compares its operands and 
// returns a logical value based on whether the comparison is true.

// var a = 30;
// var b = 20;

// // equal (==)
// console.log(a !== b);

// // equal (==)
// console.log(a != b);
// greater than and greater less than
// console.log(a >= b);
// console.log(a =< b);


// 4️⃣ Logical operators
// Logical operators are typically used with Boolean (logical) values; 
// when they are, they return a Boolean value.

// var a = 30;
// var b = -20;

// Logical AND (&&)
// The logical AND (&&) operator (logical conjunction) for a set of 
// operands is true if and only if all of its operands are true.

// console.log(a > b && b > -40 && b < 0);


// Logical OR (||)
// The logical OR (||) operator (logical disjunction) for a set of 
// operands is true if and only if one or more of its operands is true.

// console.log((a > b) || (b > -40) || (b < 0));


// Logical NOT (!)
// The logical NOT (!) operator (logical complement, negation) 
// takes truth to falsity and vice versa.

// console.log(!((a>0) || (b<0)));


// 5️⃣ String Concatenation(operators)
// The concatenation operator (+) concatenates two string values together, 
// returning another string that is the union of the two operand strings.


// console.log("Hello World"); // output will : helloworld 

// console.log("Hello " + "World"); // output will : hello world 

// var myName = "Gagan";
// console.log(myName + " Kumar");
// console.log(myName + " Gagan Kumar");


// 😳 4 Challenge Time 
// What will be the output of 3**3? 
// What will be the output, when we add a number and a string?
// Write a program to swap two numbers?
// Write a program to swap two numbers without using third variable?

//sol 1: 
// console.log(3**2); // 3*3 = 9
// console.log(9**2); // 9*9 // = 81 exponentiation operator (**)
// console.log(10 ** 5); 

// sol 2:
// console.log(5 + "kumar"); output 5kumar


// sol 3:
var a = 5;
var b = 10;

// var c = b;
// b = a;
// a = c;

//output will b=5; a=10

// console.log("the value of a is " + a);
// console.log("the value of a is " + b);

// sol 4 :

// Write a program to swap two numbers without using third variable?

// var a = 5;
// var b = 10;

// //output will b=5; a=10
// a = a+b; // a = 15 
// b = a-b; // b = 5
// a = a-b  // a = 10

// console.log("the value of a is " + a);
// console.log("the value of a is " + b);


// 🙋‍👨‍🏫 Interview Question 4 🙋‍👨‍🏫
// What is the Difference between == vs === ?

// sol: 1 

var num1 = 5;
var num2 = '5';
console.log(typeof(num1));
console.log(typeof(num2));
console.log(num1 == num2); // only chck the equal statement between two statement 
console.log(num1 === num2); //check the equal typeof operator statment


