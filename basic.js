console.log("Hello from Javascript")
// this is comment also this is /* ... */ comment

// Data Types  
/* undefined, null, boolean, string, symbol, number, and object */

var myname = "Harsh"  // Its Global
myname = "Mangal"

let myName = "Harsh Let" // In Scope

const pi = 3.14

console.log(myName + " " + myname)

// Assignments of values
var a = 1;
var b = 2;
var c = "I am "

a = a + 1; // also a++ also a--
b = b + 1;
c = c + "Harsh"

console.log(a, b, c)

// Basic Numeric Operations

var sum = 10 + 10;
var sub = 10 - 10;
var mul = 10 * 10;
var div = 10 / 10;
var reminder = 10 % 3;
console.log(sum, sub, mul, div, reminder)

// a = a+ 5 is similaar to a+=5 
// Same for subtraction also
// Same for multiplication also
// Even for division


// To print quote inside the strings
// can be done using escape sequences

var myStr = "This is \" Double Quote\" inside a \"Double Quote\" "
console.log(myStr)

// Also we can do by
var myStr2 = 'This is "Double Quote!"'
console.log(myStr2)

// Also using ` back quote we can give both single and double in a string
var myStr3 = `This is 'Single' and this is "Double" quote!`
console.log(myStr3)

// Concatentaing String with Plus Equals += Operator
var myStr4= "First Line"
myStr4+=" Second Line"
console.log(myStr4 )


// Variable inside a Strings
var collegeName= "CIT"
var line="I am in " + collegeName + " College!"
console.log(line)



