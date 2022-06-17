// APIE

/* 
    * Abstraction
    * Polymorphism
    * Inheritance
    * Encapsulation
*/

// Encapsulation

const fido = {
    name: "fido",
    color: "brown",

    describe() {
        return `Hello! My name is ${this.name}, and I am ${this.color}`
    }
}

// Uses data within encapsulated space
console.log(fido.describe())

// Goes out of encapsulation
console.log(`Hello! My name is ${fido.name}, and I am ${fido.color}`)

// Inheritance

// Please see class extends lesson.

// Abstraction

// Hides away complexity (ex: .length or .includes)

class Rectangle {
    constructor(height, width) {
        this.height = height
        this.width = width
    }

    area() {
        return this.height * this.width
    }
}

const shape = new Rectangle(10, 8)

console.log(shape)

function showArea(shape) {
    return `This shape's area is ${shape.area()}`
}

showArea(shape)

// Polymorphism

// Data shares the same shape (Ex: two extended classes share one parent class)