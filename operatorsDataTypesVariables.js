// This is a single line comment.

/*
    This is a multi line comment.

    I can have multiple lines.
*/

// Variables

/*
    Containers that store data in memory.
    * variable declaration
        * allowing the memory space to be reserved
        * declarations start with let, var, or const
        * declarations cannot start with a number, or most characters other than $ or _
        * default value is undefined (apart from const)
        * weakly typed language (no need to declare data type)
    * variable initilization
        * assigning a value to our variable    
*/

// (1)  (2)  (3)  (4)
let firstName = "Paul";
console.log(firstName);

// 1. variable declaration
// 2. variable's identifier
// 3. assignment operator
// 4. value initialization

let lastName;
console.log(lastName);

lastName = "Niemczyk";
console.log(lastName)

let age = 31
console.log(age)
// ! Old, you will enounter it but use let instead.

// const isInstructor = false
// console.log(isInstructor)
// isInstructor = true;
// console.log(isInstructor)

// ! Const must always be declared AND initialized.

const isInstructor = true;
console.log(isInstructor)

// let age = 46;
// console.log(age)
// ! SyntaxError: Identifier has already been declared.
// ! Common problem. Variable declaration can only happen once in scope.

// Best Practices for Variables
/*
    * Be concise (ex: firstName instead of myusersfirstname)
    * Be specific (ex: getValue instead of i)
    * Utilize camelCase, snake_case, PascalCase, or skewer-case
    * You can use nocase and SCREAMING_CASE
    * Think of a variable as a name that points to a value (ex: let snack = "apple")
*/

// Assigning Variables to Other Variables

let sisterName = "Agnes";
console.log(sisterName)
let mySiblings = sisterName

// Equal and Strict Equal Operators

/*
    Comparison Operators ( == and === ) are used to check if the values to the left and right of the operator are equal.
*/

console.log(5 == 5);

console.log(3 == 5);

// Equality comparison operator checks if values of the expression are the same. Ex:

console.log( 2 == "2" ) // return true

// Strict equality comparison operator checks if values AND data types of both sides of the expression are true.

console.log( 2 === "2" ) // return false

// ! MORNING CHALLENGE !

/*
    Set 7 to 8 variables:
    fName; lName; houseNumber; aptNumber (if applicable); street; city; state; post code; and concatenate them together to create your address stamp.
    Assign all of these values to console log to a new variable called myAddress
*/

let fName = "Paul";
let lName = "Niemczyk";
let houseNumber = 139;
let street = "McKim Ave";
let city = "Indianapolis";
let state = "IN";
let postCode = "06201"

let myAddress = fName + " " + " " + lName + " " + houseNumber + " " + street + " " + city + " " + state + " " + postCode
console.log(myAddress)

// Template Literal or String Interpolation

let myAddressTemplateLiteral = `My address is: ${fName} ${lName} ${houseNumber} ${street} \n ${city} ${state}, ${postCode}`

// ? \n -- works as a line break

console.log(myAddressTemplateLiteral)

