// function getData() {
//     setTimeout(() => {
//         return "Some data"
//     }, 3000)
// }

// let data = getData()

// console.log(data)

// Callbacks

// function getData(callback) {
//     setTimeout(() => {
//         callback("some data")
//     }, 3000);
// }

// getData(function (data) { console.log(data) })

console.log("hello world")

// Promises

/* 
    * Promise is an object that may produce a singular value in the future.

    * Three States
        * Pending (unfinished)
        * Fulfilled (complete value result)
        * Rejected (error)
*/

function getData() {

    let result = new Promise((resolve, reject) => {

        let flag = true

        setTimeout(() => {
            if (flag) {
                resolve("some true data")
            } else {
                reject("rejected")
            }
        }, 3000)
    })
    console.log(result)
    return result
}


function traditionalFunction() {
    return "stuff"
}

let stuff = traditionalFunction()

getData()
    .then(data => console.log(data))
    .catch(function(error) { console.log(error) })

/* 
    * Create a new instance of a Promise. It takes resolve and reject as parameters for its callback.

    * Wrap it in in setTimeout() to simulate waiting for a resource.

    * resolve() or reject() the promise.

    * When returned, the getData() fx will return a Promise instead of a given string.

    * We use .then() and .catch() resolvers with callbacks which catch the Promise and extrapolate the information we want.
*/

// Async Await

async function asyncFxDeclaration() {

}

let asyncFxExpression = async function() {

}

let asyncArrowFunction = async () => { }

// Identical to regular function apart from one thing:
// ? Async functions always return a promise.

async function getName() {
    return "Paul"
}

getName().then(data => console.log(data))

// Await

async function extraData() {
    let infoFromGetData = await getData()
    // ! await waits for the data to come back from another asynchronous function before allowing this asynchronous function to execute its return
    console.log(`${infoFromGetData} + data from async function`)
}

extraData().then(data => console.log(data))