// Loops

const { type } = require("os")

/* 
    * Allow us to go over a block of code a determined amount of cycles. It's important to note that it is possible for us to write code without declaring an endpoint.

    * Loops allow us to repeat a process without rewriting a lot of code.
*/

// While Loop

/* 
    * Executed a statement inside of a code block provided that the condition continues to evaluate to true.

    * The condition is evaluated before executing the statement.
*/

let randInt = 70

while (randInt > 0) {
    // conditional checks if its true
    randInt = randInt - 1
    // we substract one from randInt and reassigning the value of said substraction to randInt
    console.log(randInt)
}

// This is an infinite loop.
// It's infinite because the condition never resolves to false (stop condition)

// while (true) {
//     randInt = randInt + 1
//     console.log(randInt)
// }

// For Loops

/* 
    * We have to setup our loop in a way where we can:
        * see where we are in a loop
        * consider the condition we run it against
        * note when we are done with that condition
*/

// Let's count to 100

//     start  ;   stop  ;  step
for (let i = 1; i <= 100; i++) {
    // block of code executed during each iteration
    console.log(i)
}

let longWord = "Supercalifragilisticexpialidocious"

//     start  ;   stop             ; step
for (let i = 0; i < longWord.length; i++) {
    // grab the index of each letter in longWord variable
    // i is the index of the word
    // console.log(longWord[i], i)
}

// For In Loops
// Great for anything index or number related

for (i in longWord) {
    console.log(i)
}

// For Of Loop
// Great for iterable objects

for (i of longWord) {
    // console.log(i)
}

/* 
    * For in and For of loops iterate for the length of the iterable (can't change it)
    * i is just a placeholder for the instance of iteration
*/

// Do While Loop
// First executes code in the do section while a condition remains true

let j = 0

do {
    console.log(longWord[j])
    j++
} while (j < longWord.length)

// Fizzbuzz Challenge

/* 
    Create an arrow function expression called fizzBuzz that takes one parameter. This parameter will take an amount of numbers that a loop within a function will iterate over. In the loop, have a condition that checks if:
    * a number is divisible by 3, print "Fizz"
    * a number is divisible by 5, print "Buzz"
    * a number is divisible by 3 & 5, print "FizzBuzz"
    * else print "Actual number is not divisible by 3, 5, nor both."
*/

// import { stdin, stdout} from "node:process"
let fizzBuzz = number => {

    if (!isNaN(number)) {
        // checks if number argument is a number data type
        for (let i = 0; i <= number; i++) {
            if (i % 15 === 0) {
                console.log("FizzBuzz")
            } else if (i % 3 === 0) {
                console.log("Fizz")
            } else if (i % 5 === 0) {
                console.log("Buzz")
            } else {
                console.log(`${i} is not divisible by 3 nor 5`)
            }
        }
    } else {
        console.log("Try again with a number!")
    }
    
}

// fizzBuzz(100)
process.stdin.on("data", fizzBuzz) // Inputs data from outside of node into our fizzbuz

