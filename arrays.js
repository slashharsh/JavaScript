// Arrays in JavaScript

var array = ["Harsh", 21];
console.log(array[0]+ "'s age is "+array[1]);

// Nested arrays (Multidimensional Arrays)
var nestedArray = [["Harsh", 17],["Harsh",21]];
console.log(nestedArray[0][1]);

// Array access with index 
console.log(nestedArray[0][0]+" age is "+ nestedArray[1][1])

// Modify arrays with index

nestedArray[0][1] = 21

console.log("Correction! Age of "+ nestedArray[0][0] + " is "+ nestedArray[0][1]
);

// PUSH operation in array

nestedArray[0].push(21)
console.log(nestedArray);
console.log(nestedArray[0].length); //length of first inside array
console.log(nestedArray.length); //total length

// POP operation

nestedArray[0].pop() // element (0,3) is deleted

// SHIFT Operation (removes Element from begining)
console.log(nestedArray)
nestedArray.shift() // [harsh, 21] will be removed
console.log(nestedArray);

// Manipulation of Arrays using UNSHIFT
// ADD element to the begining of the array

nestedArray.unshift(["Sameep",24])
console.log("The Array is "+ nestedArray);
