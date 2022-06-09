// Functions

/* 
    Function is a block of reusable code that can take in parameters (doors), perform an action, and return the result.

    There are two types of functions:
        * function declarations
            * are hoisted
        * function expressions
            * are not hoisted
            * arrow function expressions
                * concise body
                * block body

    Functions have a default return statement of undefined unless explicitly specified.

    Function syntax:

    function fxName(parameter1, parameter2) {
        block of code to run
        return statement
    }
*/

function fxDeclaration() {
    return "This is a function declaration's return statement"
}

fxDeclaration()

// Function will not run until it is invoked (called)
// console.log(fxDeclaration())

let displayData = fxDeclaration()
console.log(displayData)

// console.log is used only to display info to the developer. It is not used to get tangible data out of the function

// return statements are data that we can capture and work with.

function greetUser(userName) {
    return `Good day, ${userName}`
}
//                      (1)
console.log(greetUser("Paul"))
// (1) argument - a value that is being passed thru a parameter.

// Functions can have zero or many parameters
// Parameters act as doors to let arguments inside of a function.

console.log(greetUser()) // return undefined because no parameter is given & default is undefined.

// Passing variables as arguments

let user1 = "Paul Niemczyk"
let user2 = "David Roos"
let user3;

console.log(greetUser(user1))
console.log(greetUser(user2))
console.log(greetUser(user3))

function capitalizeStrings(string) {
    return string.toUpperCase()
}

console.log(capitalizeStrings("Howard Miao"))

let howardsName = "Howie Miao"  // sets variable with string value

console.log(howardsName)

let howardsCaptializedName = capitalizeStrings(howardsName) // function takes variable howardsName as argument and returns uppercase version of it and assigns the return to howardsCapitalizedName variable.

console.log(howardsCaptializedName)
console.log(howardsName) // original variable is unchanged

// Function Expression

/* 
    Function expression utlizes a variable as a placeholder.
*/

let myDog = function(name, breed) {
    return `My dog, ${name} is a ${breed}`
}

console.log(myDog("Bentley", "Old English Bulldog"))

// Arrow Functions

/* 
    Introduced in ES6
    More concise way of writing functions.
    Arrow functions are created using function expressions ONLY
    They do not bind to .this or super
*/

// Concise Body Arrow Function

// Can only have one parameter if it's not enclosed by ()
// Can have implicit return statement ONLY without using { }

let greetEveryone = () => console.log("Hello Class!")
greetEveryone()

let greetPerson = name => console.log(`Hello, ${name}`)
greetPerson("Paul")

// Block Body Arrow Function

let sendEmail = (email, name) => {

    let greet = "What's up: "

    return `${greet}: ${name}:
    
    We've been trying to reach you about your car's \n
    extended warranty. Oh my dog, not this crap again! \n
    
    Sincerely, \n
    
    ${name}`
}

console.log(sendEmail("innocent@gmail.com", "Paul"))

// ! Challenge

/*
    Create an arrow function expression named tipCalculator.
    It will take a pre-tax bill, sales tax, and tip percentage as parameters.
    It will return a string interpolated bill total and tip amount.
*/

let tipCalculator = (preTax, salesTax, tipPercent) => {

    let billTotalTax = preTax + (preTax * (salesTax / 100) )
    let totalTip = billTotalTax * (tipPercent / 100)
    let total = billTotalTax + totalTip

    return `Your bill total is ${total.toFixed(2)} with a tip being ${totalTip.toFixed(2)}`
}

console.log(tipCalculator(100, 7, 20))

console.log("------------------------------------")
