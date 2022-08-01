// Array Destructuring

/* 
    An ability for a dev to pull the data out of one array and insert it into another.
*/

let wines = ["Rose", "Cabernet Sauvingon", "Riesling", "Bordeaux", "Gamay Noir"]

// Spread Operator

/* 
    Extrapolates all elements from an array to a brand new array.

    Must be unpacked into a new array [...] <- spread operator


*/

let newWines = [...wines]
console.log(newWines)

newWines[0] = "Beaujolais"
console.log(wines)
console.log(newWines)

let whiteWines = ["Rose", "Riesling", "Chardonnay"]
let redWines = ["Pinot Noir", "Red Blend", "Cabernet Sauvignon"]

let allWines = [...whiteWines, ...redWines]
console.log(allWines)

// Rest Operator

let germanCars = ["BMW", "Porsche", "Mercedes", "Audi"]

let allCars = ["Maserati", "Ferrari", ...germanCars]
console.log(allCars)

function addNums(x, y, ...otherNums) {
    // otherNums is an array of infinite additional arguments
    console.log(x, y, otherNums)
    // if we want to change from arr to values, we:
    console.log(x, y, ...otherNums)
}

addNums(5, 7, 3, 6, 7, 8, 9, 10)

// Array Destructure

/* 
    Allows you to extrapolate array values into variables
    Does it in a single line.
    You can skip values by simply inserting a comma [ , ]
*/
let [ unreliable, expensive, , rowdy, ...rest ] = allCars
console.log(unreliable)
console.log(expensive)
console.log(rowdy)
console.log(rest)

// Challenge

/* 
    Create an array with a list of states that you've visted

    Unpack your favorite states into their individual variables. Unpack the rest of the states into a meh array
*/

let myStates = ["Illinois", "Indiana", "Wisconsin", "Michigan", "New York", "Oklahoma", "Missouri", "Florida", "Georgia", "Tennessee"]

let [illinois, , wisconsin, michigan, , , , florida, ...meh] = myStates
console.log(wisconsin)
console.log(florida)

// we need an interator and a conditional to append states that are not the ...rest of the myStates array
// if we keep line 71 as is, var meh only has values of Georgia and Tennessee.
myStates.forEach(i => {
    let prohibited = [illinois, wisconsin, michigan, florida, ...meh]
    if (!prohibited.includes(i)) {
        meh.push(i)
    }
})

console.log(meh)


// Object Destructuring, Spread, and Rest

let request = {
    headers: {
        contentType: "application/json",
        token: "mytippytoptoken",
    },
    body: {
        status: "User created",
        json: {
            "name": "Paul",
            "email": "paul@email.com"
        }
    },
    date: ["2022", "08", "01"]
}

let { headers, body } = request

console.log(headers, body)

// How to get nested property destructured out of an object?

// let { 
//     headers: {
//         contentType: reqContentType
//     },
//     body: {
//         json: reqJson
//     }
// } = request

// console.log(reqContentType, reqJson)

let { headers: { contentType }, body: { json } } = request

console.log(contentType, json)

// Loop Destructure

const users = [
    {
        name: "Paul",
        email: "paul@uprighted.com",
        age: 20
    },
    {
        name: "Robyn",
        email: "porschefan@gmail.com",
        age: 22
    },
    {
        name: "Lane",
        email: "lsmith@gmail.com",
        age: 25
    }
]

// Destructuring in Loops

for (let { name, age } of users) {
    console.log(`Hi, I'm ${name} and I'm ${age} years old.`)
}

// Destructure operator

// Spread syntax benefit:
// We can clone and update objects in an IMMUTABLE way.
// This means original object is unaffected.

let Paul = {...users[0]}

console.log(Paul)


