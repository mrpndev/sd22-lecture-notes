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

// Inheritance
// Extends

/* 
    Extends creates a class that is a child of another (parent) class.
*/

// class Car {
//     constructor(make, model, year, transmission) {
//         this.make = make
//         this.model = model
//         this.year = year
//         this.transmission = transmission
//     }

//     greetCar() {
//         return `Welcome to your ${this.year} ${this.make} ${this.model}`
//     }

//     greetDriver(driver) {
//         return `Hello, ${driver}, your ${this.make} is looking sick!`
//     }

//     modifyMake(make) {
//         this.make = make
//     }
// }

class Options extends Car {
    // constructor needs parameters to be inherited from the parent class
    constructor(
        make,
        model,
        year,
        transmission,
        hasLeather,
        hasComfortAccess,
        hasSportPackage
    ) {
        // allows access to properties and methods of parent class
        super(make, model, year, transmission)
        this.hasLeather = hasLeather
        this.hasComfortAccess = hasComfortAccess
        this.hasSportPackage = hasSportPackage
    }

    isCPO(currentYear) {
        let result = currentYear - this.year
        return result >= 6
            ? `Your ${this.model} is out of warranty`
            : "Your warranty is still active"
    }
}

let porsche911 = new Options("Porsche", "911", 2017, "PDK", true, true, false)

console.log(porsche911.isCPO(2025))

// Challenge

/* 
    Extend the House class with one called ASale
    Sale should have properties:
        appraisalValue (int)
        listPrice(int)
        agent(str)
        isListed(bool)
    Create a method which calculates the difference between appraisalValue and the listPrice
    Add condition that will check if list is 20% higher than appraisal.
        If true, not worth it
        If false, say good deal
        The return should also include the difference between the two values

*/

class Sale extends House {
    constructor(
        address,
        bedrooms,
        bathrooms,
        appraisalValue,
        listPrice,
        agent,
        isListed
    ) {
        super(address, bedrooms, bathrooms)
        this.appraisalValue = appraisalValue
        this.listPrice = listPrice
        this.agent = agent
        this.isListed = isListed
    }

    decisionMaker() {
        let difference = 1.2 * this.appraisalValue
        let pricedDifference = this.listPrice - this.appraisalValue
        return this.listPrice > difference
            ? `Not worth it. List price is ${pricedDifference} more than appraisal`
            : `Worth looking at. List price is only ${pricedDifference} more than appraisal`
    }
}

let myHouse = new Sale("430 N Park Ave", 1, 1, 290000, 310000, "Tom Stemlar", false)

console.log(myHouse.decisionMaker())

class DateFormatter extends Date {
    getFormattedDate() {
        const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ]
        return `${this.getDate()} - ${months[this.getMonth()]} - ${this.getFullYear()}`
    }
}

console.log(new DateFormatter("June 17, 2022").getFormattedDate())



