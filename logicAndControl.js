// Conditionals

/* 
    A way for a programmer to check if an expression is true.
    It can also check for falseness
    It can execute code when the condition is met but also when the condition is not met.
    It can even execute that checks for another condition altogether.
    The fundamental function of a conditional is to check for truthiness.

    Syntax:

    if ( conditional ) {
        run this code if TRUE
    }
*/

let light = "on"

if (light) {
    console.log("The light is on")
}

// Falsy values
/* 
    - false
    - 0
    - null
    - undefined
    - NaN
    - "", '', `` (any empty string)
*/

let temperature = 60;

if (temperature >= 70) {
    console.log("It's a nice summer day")
} else if (temperature >= 60) {
    console.log("It's probably spring")
} else if (temperature < 60) {
    console.log("It's definitely winter")
}

// Logical Operators NOT AND OR

/* 
    AND Operator (&&)
        - true if both values return true
    OR Operator (||)
        - true if one of the values returns true
    NOT Operator (!)
        - flips the resulting logical operation
*/

console.log(5 < 10 && 7 < 10) // true; both sides are true
console.log(5 < 1 && 7 < 10) // false; left is false, right is true

console.log(5 < 10 || 7 < 10) // true; both of the sides is true

console.log( 11 > 10 || 7 > 10) // true; one of the sides is true

console.log(5 < 1 || 7 > 10) // false; neither side is true

console.log( !(5 < 10) ) // false; 5 is less than 10 (true) but the NOT (!) operator flips the statement to false.

// Using Logical Operators

let weather = "cloudy"

temperature = 70

if (temperature >= 70 || weather == "sunny") {
    console.log("We'll go hiking")
} else if (temperature >= 70 && weather == "raining") {
    console.log("We'll stay home")
} else {
    console.log("We've not accounted for this situation")
}

// ! Challenge

/* 
    Set a variable of age and give it a number of your choice.
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log "sorry, you're too young to do anything."
    If the age is at least 18, "You can vote!"
    If the age is at least 21, "You can drink!"
    If the age is at least 25, "You can rent a car!"
*/

let age = 21

if (age >= 25) {
    console.log("You can rent a car")
} else if (age >= 21) {
    console.log("you can drink")
} else if (age >= 18) {
    console.log(" you can vote")
} else {
    console.log("sorry not able to do anything")
}

// Ternaries

let fName = "Paul"

if (fName === "Paul") {
    console.log("I think he's an instructor")
} else {
    console.log("May be a student actually.")
}

/* 
    Syntax: if (condition) { do something } else { ... }
    Ternary Syntax: condition ? something if true : something if false
*/ 

fName === "Paul" ? console.log("Instructor") : console.log("Student")

let hero = "Batman"
let villain = "Ridler"

hero == "Batman" && villain == "Ridler"
    ? console.log("What has a head and a tail but no body?")
    : hero == "Batman" && villain == "Joker"
    ? console.log("Why so serious?")
    : hero == "Batman" && villain == "Kiteman"
    ? console.log("What does Kiteman do?")
    : console.log("stop")

// EOD Wrap up

/* 
    * What is the default return value of a function?
        ? undefined
    * What are ternaries primarily used for?
        ? if else statements to check if something has a null or undefined
    * How would I make a conditional check if a value is falsey?
        ? use a NOT (!) operator
    * Can I give an arrow function more than one parameter?
        ? yes, just gotta make sure to wrap params in ( )'s
*/

// * What does this code do?

let adjustTemperature = temp => { temperature = temp + 20 }
adjustTemperature(90) // reassigns global variable's temperature value to whatever temp argument is + 20

// * What does this code do?

let turnLightBasedOnTemp = temp => {
    temp > 65 ? light = true : light = false
}
turnLightBasedOnTemp(64) // this will reassign light variable's value based on the temp that's passed as an argument.

// * How would you change above function to make it shut light off only if the light is first on?

function x() { }

let isInstructor = false;

if (isInstructor != true) {
    console.log("The value is falsey")
}

console.log(x())