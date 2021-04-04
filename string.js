console.log("----- Strings-----")

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
var myStr4 = "First Line"
myStr4 += " Second Line"
console.log(myStr4)


// Variable inside a Strings
var collegeName = "CIT"
var line = "I am in " + collegeName + " College!"
console.log(line)

// length of string
var firstname = "Harsh M"
console.log(firstname.length)

// Bracket Notation to get first character of stings

console.log(firstname[0])

// String is immutable
// value of whole string can be chnaged but not a character can be altered

var newStr = "Lavascript"

// var newStr[0] = "J"  <-- not possible but below is

newStr = "Javascript"

// Bracket notation to find Nth Character in Strings
// example n= 3 letter
console.log(firstname[2])

// Bracket notation to find last Character
lastletter = firstname[firstname.length - 1];
console.log(firstname[firstname.length - 1])

// to find Nth from last character in string
var n = 3 // to find the third last letter
console.log(firstname[firstname.length - n])


