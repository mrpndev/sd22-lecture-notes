// Scope & Hoisting

/* 
    Scope is used to determine how information in different blocks of code can be accessed.

    Five types of scope:
        - Global
        - Block
        - Function
        - Module
        - Lexical
*/

// Global Scope

/* 
    Outertab most scope. Window object when we're talking about client (browser). JS file when using Node.js.

    Accessible from every other scope.
*/

let globalScopeVar = "This is the global scope variable."

// Function Scope

/* 
    Accessible only inside of the function.
*/

function scope() {
    let fxsv = "This is a var inside of a function scope"
}

scope()

// console.log(fxsv) // Reference Error - we cannot access function scope out of global scope.

// Block Scope

/* 
    Can be anywhere there are { }

    Block scope can be put anywhere.
*/

{
    let bsv = "Block scope variable."
    console.log(bsv)
}

// console.log(bsv) // Reference Error - we cannot access block scope from global scope.

// Block scope inside of a function scope

function y() {
    let fxsv = "Function scope variable"
    for (i = 0; i <= 10; i++) {
        console.log(fxsv)
    }
    {
        let bsv = "Block scope inside function scope."
    }
    // console.log(bsv) // Reference Error - cannot access block from function scope
}

y()

// Lexical Scope

/* 
    Variables are accessible by the position of them nested within the function scope. Inner fx scope can access outer function scope.
*/

function outerFx() {
    // outer scope
    let ofxv = "Outer fx scope variable"

    function innerFx() {
        // inner scope
        console.log(ofxv)
    }
    console.log("Outer scope fx console.log")
    return innerFx()
}

outerFx()

// Module Scope

/* 
    Module scope encapsulates objects nested inside of other modules or files and allows us to use them in other files (Think import/export)
*/

// Hoisting

/* 
    JavaScript gets read top to bottom and left to right. It's an interpreted language 

    JS interpreter runs the code twice. First, it looks for any VARiable and function declarations and hoists them, aka provides them memory allocation. This is done on the declaration side ONLY.

    The second pass, the interperet reads initialization values and expressions and executes the code.

*/

let name = "Paul Niemczyk"
console.log(name)


// console.log(student) // Returns undefined
var student = "David Roos"

console.log("---------------------------")
function run() {
    var foo = "Foo"
    let bar = "Bar"
    console.log(foo, bar)
    {
        var moo = "Moooo"
        let baz = "Bazz"
        console.log(moo, baz)
    }
    // console.log(baz)
    console.log(moo, "<---- it works!")
    // ^ works because var is scoped to the immediate fx scope
    // let doesn't because it's scopped to the immediate block scope
}
run()


// Function expression example:

// fxpression() // ReferenceError - invoking before it has been declared.
let fxpression = function() {
    console.log("This is a fx expression")
}
fxpression()

// Function declaration example:

fxDeclaration()
function fxDeclaration() {
    console.log("This is a fx declaration")
}

/* 
    The above example works because function declarations, just like VARiables are hoisted.

    ! This is bad! Don't use this pattern!!!!
*/

/* 

    JS objects NOT hoisted:
        - let variables
        - const variables
        - fx expressions
        - classes
*/


{
    var person = "Paul"
    
}

console.log(person)
