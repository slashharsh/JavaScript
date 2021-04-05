//Function
// Basic
function basicPrint(name) {
    console.log(name);
    return 0;
}

basicPrint("slashharsh")

// Local and Global scopes of a Fucntion

var myGlobalScope = 100

function checkScope(number) {
    myGlobalScope += 151;
    console.log(myGlobalScope);
    var myLocalScope = 200; // It is local only if there is "var"
}

checkScope(myGlobalScope)

// console.log(myLocalScope); this line will give error!

//When we have local and global with same name in a function then, local takes precedence over global

// Return from a fucntion 

function returnVal(num) {
    return num * 3;
}

console.log(returnVal(4));

// Assiging a return value to a variable

function returnAssign(num) {
    return num / 5;
}

newAge = returnAssign(5)
console.log(newAge);

// Queue 
function nextOne(arr, item) {

    arr.push(item);
    return arr.shift();

}

var array = [1, 2, 3, 4, 5]

console.log("Before:" + JSON.stringify(array));
console.log(nextOne(array, 6));
console.log("After:" + JSON.stringify(array));

// Boolean values

function boolean() {
    return true;
}
console.log(boolean());