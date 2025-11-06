// 1. Create one block using {} and declare variables using let, const, and var.
// 2. Then, try to reassign these variables within the curly braces {}. Check for any erros that may occur.
// 3. Next, try to reassign the same variables outside the block {} and check if assignment outside the scope of variable where the variables are assigned can be done or not.

// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
    // Block scope
    var blockVar = "I'm a block-scoped var";
    let blockLet = "I'm a block-scoped let";
    const blockConst = "I'm a block-scoped const";
    blockVar = "I'm a reassigned block-scoped var";
    console.log(blockVar); // Output: "I'm a reassigned block-scoped var"
    blockLet = "I'm a reassigned block-scoped let";
    console.log(blockLet); // Output: "I'm a reassigned block-scoped let"
    blockConst = "I'm a reassigned block-scoped const";
    console.log(blockConst); // Throws TypeError because const can not be reassigned.

}

// Global scope
globalVar = "I'm a reassigned global variable";
console.log(globalVar); // Output: "I'm a reassigned global variable"
globalLet = "I'm a reassigned global variable, but scoped with let";
console.log(globalLet); // Output: "I'm a reassigned global variable, but scoped with let";
globalConst = "I'm a reassigned global constant";
console.log(globalConst); // Throws TypeError because const can not be reassigned.

// Block scope
console.log(blockVar); // Output: "I'm a block-scoped var"
console.log(blockLet); // Throws ReferenceError
console.log(blockConst); // Throws ReferenceError

// This function is used to explore how function-scoped variable work
function show() {
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
}
show();

console.log(functionVar); // Throws ReferenceError
console.log(functionLet); // Throws ReferenceError
console.log(functionConst); // Throws ReferenceError