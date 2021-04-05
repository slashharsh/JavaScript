// If Statement

function yesOrno(val) {
    if (val / 5 == 1) {
        return "Valid!"
    }
    else {
        return "Try Again!"
    }
}
console.log(yesOrno(55));

// Equality Operator ==
// Strict Equality Operator === 
// that means 7 === "7" False
// but 7 == "7" true
// InEquaility Operator != 
// Strict InEquaility Operator !==

// In Strict that does not convert the type and compare as it is 
// but in not strict it converts the type and then compare

function eqOperators(a, b) {
    if (a == b) {
        return "Equal!"
    }
    else if (a === b) {
        return "No!"
    }
}

console.log(eqOperators(4, "4"));
console.log(eqOperators(4, 4));


// Less than <
// Less than or equal <=
//Greater than >
//Greater than or equal >=

// Logical operators
//AND operator && 
// OR operator || 

// Note : Once it checked for a condition it doesnt check other one
//example
function orderCheck(num) {
    if (num < 10) {
        return "Less than 10"
    }
    else if (num < 5) {
        return "Less than 5"
    }
}
console.log(orderCheck(4));
// Output is Less than 10 
// thats above line's proof


// Switch Statements

function switchStatements(value) {
    switch (value) {
        case 1: val = "A";
            break;
        case 2: return "B";
    }
    return val;
}
console.log(switchStatements(1));