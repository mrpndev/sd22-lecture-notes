// Classes

/* 
    Templates or blueprints for creating objects.

    They encapsulate data with code. JS is a prototype-based language that also has access to OOP principles.

    Classes are considered special functions and therefore can be defined as:
    - Class Declaration
    - Class Expression
*/

class Teacher {
    // class method for creation and initilization of a class object
    constructor(name, subject, tenure, isPolyglot) {
        this.name = name
        this.subject = subject
        this.tenure = tenure
        this.isPolyglot = isPolyglot
    }

    // Class body
}

// Creating new instance of Teacher class

let pNiemczyk = new Teacher("Paul", "software dev", 2022, true)
// Creates new instance of a Teacher class using new operator.
// Creates an object that is a copy of Teacher class with our defined constructors
console.log(pNiemczyk)

pNiemczyk.subject = "Physics" // reassigns our class instance subject property

// Creating objects for every teach is laborious.
// Class gives us an easy template to reuse over and over again.

// Class Expression

let House = class {
    constructor(address, bedrooms, bathrooms) {
        this.address = address
        this.bedrooms = bedrooms
        this.bathrooms = bathrooms
    }
}
console.log(new House)

let $1007OrangeSt = new House("1007 Orange St", null, 2)

console.log($1007OrangeSt)

// Class Methods

/* 
    Method is a function that lives inside of a class that can be reused on any class instance.
*/

class Car {
    constructor(make, model, year, transmission) {
        this.make = make
        this.model = model
        this.year = year
        this.transmission = transmission
    }

    greetCar() {
        return `Welcome to your ${this.year} ${this.make} ${this.model}`
    }

    greetDriver(driver) {
        return `Hello, ${driver}, your ${this.make} is looking sick!`
    }

    modifyMake(make) {
        this.make = make
    }
}

let maserati = new Car("Maserati", "GranTurismo S", 2015, "auto")

console.log(maserati.greetCar())
console.log(maserati.greetDriver("Paul"))
maserati.modifyMake("Porsche")
console.log(maserati)

// Challenge

/* 
    Create a class object called Avnegers. It will have properties of name, superpower, age, isDead, keyMovie

    Create an instance of that object with the superhero name and its properties

    ? Create a method that console logs the name and keyMovie together

    ! SPICEY MODE

    Create a method that takes the name of hte superhero and checks it against two arrays: one with teamCap and one with teamStark and returns which team the superhere is on as part of Civil War
*/

class Avengers {
    constructor(name, superpower, age, isDead, keyMovie) {
        this.name = name
        this.superpower = superpower
        this.age = age
        this.isDead = isDead
        this.keyMovie = keyMovie
    }

    instanceHero() {
        return `${this.name} starred in ${this.keyMovie}`
    }

    whichTeam() {
        let teamCap = ["Steve Rogers", "Captain America", "Bucky", "Wanda", "Hawkeye", "AntMan"]
        let teamStark = ["Tony Stark", "Vision", "War Machine", "Black Panther", "Black Widow", "Natasha Romanoff"]
        if (teamCap.includes(this.name)) {
            return `${this.name} is Team Captain`
        } else if (teamStark.includes(this.name)) {
            return `${this.name} is team Stark`
        } else {
            return `${this.name} is not in either of our arrays.`
        }
    }
    
}

let deadpool = new Avengers("Wade Wilson", "regeneration", 800, false, "Deadpool")

let ironMan = new Avengers("Tony Stark", "rich", 30, true, "Iron Man")

console.log(ironMan.whichTeam())

class Circle {

    constructor(radius) {
        if (typeof radius === "number") {
            this.radius = radius
        } else {
            throw "Your parameter needs to be a number"
        }
    }

    circumference() {
        return (2 * Math.PI * this.radius).toFixed(2)
    }

    area() {
        return (this.radius**2 * Math.PI).toFixed(2)
    }
}

let x = new Circle(2)

console.log(x.circumference())
console.log(x.area())

class Pizza {
    constructor(toppings) {
        if (toppings.includes("pineapple")) {
            throw "Get outta here before nonna whoops yo a**"
        } else {
            this.toppings = toppings    
        }
    }
}

let p = new Pizza(["potato"])
console.log(p)

// Factory Functions

/* 
    Functions that accept data and return new instance of a Class back to you.

    Good for modifying the data coming in for instance.
*/

function circleFromDiameter(diameter) {
    return new Circle(diameter / 2)
}

let newCircle = circleFromDiameter(5)

console.log(newCircle.area())

// Static Factory Methods

// does not require instantiation with a "new" operator

class CircleStaticFactoryFx {

    static createCircleUsingDia(diameter) {
        return new CircleStaticFactoryFx(diameter / 2)
    }

    constructor(radius) {
        if (typeof radius === "number") {
            this.radius = radius
        } else {
            throw "Your parameter needs to be a number"
        }
    }

    circumference() {
        return (2 * Math.PI * this.radius).toFixed(2)
    }

    area() {
        return (this.radius**2 * Math.PI).toFixed(2)
    }
}

let diaCircle = CircleStaticFactoryFx.createCircleUsingDia(20)
console.log(diaCircle)