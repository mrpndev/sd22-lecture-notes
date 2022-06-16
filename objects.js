// Objects

/* 
    Object - container for values in JavaScript Object Notation format (JSON)
    - exists as a string
    - has properties and methods
        - .property
        - .method()
    - has .this keyword
*/

// ? Object Literal Creation

let abby = {
    species: "dog",
    color: "brown",
    spayed: true,
    breed: "mutt",
    weight: 40,
    favoriteActivity: "chasing squirrels"
}

// ? Object Property & Value Access

console.log(abby) // shows us entire object with all key:value pairs
console.table(abby) // displays object in a table format
console.log(abby.species) // access property values abby.species returns "dog"
console.log(abby["color"]) // access object using keys

let returnKeys = Object.keys(abby) // returns an array of all properties/keys of our object literal
console.log(returnKeys)

let returnValues = Object.values(abby) // returns an array of all properties/keys of our object literal
console.log(returnValues)

// ? Property & Value Creation

// Create an onbject mcmChair with property of frame; frameFinish; cushion; upholstery

let mcmChair = {
    frame: "",
    frameFinish: undefined,
    cushion: undefined,
    upholstery: "leather"
}

mcmChair.frame = "stainless chrome" // value reassignment
mcmChair["frameFinish"] = "chrome" // value reassignment

mcmChair["newKey"] = undefined // property creation

mcmChair.newKey2 = undefined // property creation

// ! Property creation requires a value be assigned.

console.log(mcmChair)

let netflix = {
    id: 9,
    likes: 932,
    name: "The Good Place",
    seasonInfo: {
        season1: {
            numberOfEpisodes: 5,
            episodeInfo: [
                { episode: 1, episodeName: "Pilot"},
                { episode: 2, episodeName: "Flying"},
                { episode: 3, episodeName: "Tahani Al-Jamil"},
                { episode: 4, episodeName: "Jason Mendoza"},
                { episode: 5, episodeName: "Category 55 Emergency"},
            ]
        },
        season2: {
            numberOfEpisodes: 6,
            episodeInfo: [
                { episode: 1, episodeName: "Everything is Great"},
                { episode: 2, episodeName: "Dance Dance Resolution"},
                { episode: 3, episodeName: "Team Cockroach"},
                { episode: 4, episodeName: "Existential Crisis"},
                { episode: 5, episodeName: "The Trolley Problem"},
            ]
        }
    }
}

// Console log me the episodeName property of season2 episode 1
console.log(netflix.seasonInfo.season1.episodeInfo[1].episodeName)

// Assign a property called total seasons to the object with a value of what the total seasons are
// add a season 3 that looks just like seasons 1 & 2
// assign episodeInfo property to season 3 with an array with two episodes.

netflix.totalSeasons = 2
netflix.seasonInfo.season3 = {
    numberOfEpisodes: 2,
    episodeInfo: [
        { episode: 1, episodeName: "First One"},
        { episode: 2, episodeName: "Second One"}
    ]
}
console.log(netflix)

// ? Deletion

console.log(mcmChair)

delete mcmChair.newKey2 // deletes a property from an object

// ! Dangerous - future access compromised and error-prone

// Instead

mcmChair.newKey = null // reassign to null instead

console.log(mcmChair.newKey)

console.log(parseFloat("5"))

// Creating Methods

/* 
    Method is a function attached to an object as a property.
*/

let dog = {
    name: "Bentley",
    color: "fawn",
    age: 8,

    speak: function() {
        console.log(`Bark! ${this.name} ${this.color}`)
    },

    sit() {
        console.log("Sat down.")
    },

    getName() {
        console.log(`Hello, my name is ${this.name}`)
    },

    getBreed(breed) {
        console.log(`Hello, my name is ${this.name} and I'm an ${breed}`)
    },

    beQuiet: () => {
        console.log(`${age}, you're too old not to listen.`)
    }
}
let age = 42
let name = "Whatever"
dog.speak()
// dog.sit()
dog.getName()
dog.getBreed("Old English Bulldog")
dog.beQuiet()

