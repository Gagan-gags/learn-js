// In programming languages we often say "An object is an instance of a class".
// This means that, using a class, I can create many objects and they all share mehtods and properties.
// For example :  Person is an object : and its properties are "Name, color, height, sex(male, female),"
// Students is an object : and its properties are , "name, age, class, biodata()"
// Players is an object : and its properties are , "name, age, class, game, biodata()"
// Dancers is an object : and its properties are , "name, age, class, danceform, biodata()"

// javascript classes, introduced in ECMAscript 2015, are primarimly 
//  syntactical sugar over Javascript's exxisting protoype-based inheritance.

//  A class is a type of function, but instead of using the keyword function to initiate it, 
//  we use the keyword class, and the properties are assigned a constructor() method.

// for OOPs
// A class is a user defined blueprint or ptototype from which objects are created. 
// It represented the set of properties or methods that common to all objects of one type.

//  Object– An Object is a unique entity that contains properties and methods. For example “car” is a real life Object, which has some characteristics like color, type, model, horsepower and performs certain actions like drive. The characteristics of an Object are called Properties in Object-Oriented Programming and the actions are called methods. An Object is an instance of a class. Objects are everywhere in JavaScript, almost every element is an Object whether it is a function, array, or string. 

// Object, property, and method
// Class
// Encapsulation
// Abstraction
// Reusability/inheritance
// Polymorphism
// Association
// Aggregation
// Composition


// class Students{
//     constructor(name, age, cls){
//         this.myname = name;
//         this.myage = age;
//         this.mycls = cls;
//     }
//     // intance method 
//     biodata(){
//         return(`Hi My name is ${this.myname}. I am ${this.myage} year old and i am in class ${this.mycls}`);
//     }
// }
// class Players extends Students{
//     constructor(name, age, cls, game) {
//         super(name, age, cls);
//         this.mygames = game;
//     }
//     play_biodata(){
//         return `${super.biodata()}. I am player of ${this.mygames} `;
//     }
// } 
// // inherit the students properties of players 
// let obj1 = new Players('Vikas',26, 'MCS', 'Football' );
// console.log (obj1.play_biodata());


// using a object literal
// Defining object
    // let person = {
    //     first_name:'Mukul',
    //     last_name: 'Latiyan',
    //     //method
    //     getFunction : function(){
    //         return (`The name of the person is
    //         ${person.first_name} ${person.last_name}`)
    //     },
    //     //object within object
    //     phone_number : {
    //         mobile:'1234567890',
    //         landline:'6789'
    //     }
    // }
    // console.log(person.getFunction());
    // console.log(person.phone_number.landline);


// Using an Object Constructor: 

// //using a constructor
// function person(first_name,last_name){
//     this.first_name = first_name;
//     this.last_name = last_name;
// }
//  //creating new instances of person object
//  let person1 = new person('Mukul','Latiyan');
//  let person2 = new person('Rahul','Avasthi');
  
//  console.log(person1.first_name);
//  console.log(`${person2.first_name} ${person2.last_name}`);

// ********************************************** //
// use in big projects like react project , angular and vue

// OOP object oriented programing  ES6 version
// coding methodolgy/style/pattern
// . code moire modular and reusable 
// . well organised code 
// . easier to debug

// what is class and objects:
// types of method :
//  constructor , prototyoe , static
class student{
    constructor(name, age ){
        this.myname = name;
        this.myage = age;
    }
    hello(){
        console.log(`hello ${this.myname} your age is ${this.myage} `);
    }
    static staticMethod(){
        console.log("hello static method");
    }
}
let a = new student("Akashay kumar", 25);
let b = new student("Gagan kumar", 34);
a.hello();
b.hello();
student.staticMethod();






