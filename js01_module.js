/**
 * variable
 * 5 things to declare variable
 */

// var=> anything can assign with var unlike int , float .
//defined variable 
var weight = 38 ;
var price = 34.00 ;
var year = 1995;

// if any variable doesn't assign any value it will print or show an undefined value  
var age ;// undefined 


// printing 
console.log(age);
console.log(price);


// value of variable will be changed according to last assign value
var test = 100; 
test = 512; 
console.log(test);


//data types 
/**
JavaScript has 8 Datatypes
    String
    Number
    Bigint
    Boolean
    Undefined
    Null
    Symbol
    Object
*/


// how to get what type of variable
console.log(typeof test);

//string
var name = "shaikat";
var address = "67 no. nilambor dhaka ";
console.log(name);
console.log(address);


//boolean type
var isRich = true;
//how to print boolean variable value
console.log(isRich);

//number
var price = 555 ;


// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");


//var vs let 
//var is function scoped and let is block scoped.


// variable naming convention 

var MyName ="shaika"; // pascal case
var myName ="shaika"; // camel case
var my_name ="shaika"; // snake case
