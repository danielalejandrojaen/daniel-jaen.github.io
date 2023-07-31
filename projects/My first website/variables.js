/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable. We also have access to let and const which are block scoped and cannot be hoisted. These were introduced in ES6.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName; //const myName  //let myName

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// 4. Hoisting //
// Hoisting in JS is where variables and function declarations are moved to the top of their scope before code execution.
// This means that you can use a variable before it is declared.
// Hoisting only works with var and function declarations, not let and const.

/*
DATA TYPES: 
1. Number - any number, including decimals and negatives
2. String = any character or group of chars enclosed in quotes (single or double)
3. Boolean - true or false
4. Array - a collection of data enclosed in [square brackets] and separated by commas
5. Object - a collection of data in (key: value) pairs enclosed in {curly braces} and separated by commas
6. Function - a block of executable code designed for a specific task that we use to help our workflow
7. undefined - no value assigned but declared
8. null - no value assigned and not declared
9. NaN - not a number
10. Infinity and -Infinity - basically a number that is too large or too small to be represented in JS
*/
let number = 1; //number
let string = "hello"; //string, can be enclosed in single quotes or backticks
let boolean = true; // boolean can be true or false
let array = [1, "hello", true]; //array, populated by different datatypes inside of square brackets and separated by commas
let object = {key1: "value1", key2: "value2"}; //object, populated by key val pairs inside of curly braces and separated by commas

function myFunction() { //function, block of executable code designed for a specific task
    return "hello"; //executable code that returns a string
}
//we can also declare functions as an expression with var, let or const
let myFunction2 = function() {
    return "hello";
}
//since es6 we are also able to use arrow functions
let myFunction3 = (string) => {
    return string; //returns the string passed in
}

let undefinedVar; //undefined, declared but not assigned
let nullVar = null; //null, declared and assigned null since we can't exemplify undefined and not assigned
let notANumber = NaN; //NaN, not a number
let infinity = Infinity; //Infinity 
let negativeInfinity = -Infinity; //-Infinity

//Simple(primitive) vs Complex Data Types
//Simple data types are immutable, so they cannot be changed once created
//Complex data types are mutable, so they can be changed after creation
//Simple data types are copied by value, complex data types are copied by reference
//for example:
let a = 1;
let b = a; //b is now equal to 1
a = 2; //a is now equal to 2
console.log(a); //prints 2 since we reassigned a and it is immutable
console.log(b); //prints 1 since we copied a by value and b is immutable
//complex data types are copied by reference
let c = [1, 2, 3];
let d = c; //d is now equal to [1, 2, 3]
c.push(4); //c is now equal to [1, 2, 3, 4]
console.log(c); //prints [1, 2, 3, 4] since we pushed 4 into c
console.log(d); //prints [1, 2, 3, 4] since we copied c by reference and d is mutable

//Operators
//1. Assignment operators - assign values to variables

let x = 5; //assigns 5 to x using the assignment operator =

//2. Arithmetic operators - perform arithmetic on numbers

let y = x + 5; //assigns 10 to y using the addition operator +, also works with -, *, /, %, ++, --

//3. Comparison operators - compare values and return true or false

if (x === 5) { //checks if x is equal to 5 using the strict equality operator ===, also works with !=, >, <, >=, <=
    console.log(true); //prints true
}

//4. Logical operators - combine expressions and return true or false

if (x === 5 && y === 10) { //checks if x is equal to 5 and y is equal to 10 using the logical AND operator &&, also works with ||, !
    console.log(true); //prints true
}

if (x === 5 || y === 5) { //checks if x is equal to 5 OR y is equal to 5 using the logical OR operator ||
    console.log(true); //prints true
}

if (x !== 10) { //checks if x is NOT equal to 10 using the logical NOT operator !== (aka bang operator) (strict inequality operator)
    console.log(true); //prints true
}

//5. Unary operators - only takes one operand (unary means one)

let z = -x; //assigns -5 to z using the negation operator -, also works with typeof, and !

if (!z) { //checks if z is falsy using the logical NOT operator !
    console.log(true); //prints true
}

//6. Ternary operator - takes three operands and is the only JS operator that takes three operands

let result = (x === 5) ? true : false; //assigns true to result if x is equal to 5, otherwise assigns false


//String Manipulation
//Strings can be manipulated with operators and methods

//Operators
//1. Concatenation operator - concatenates strings together
let string1 = "hello";
let string2 = "world";
let string3 = string1 + string2; //assigns "helloworld" to string3

//2. String length - returns the length of a string
let stringLength = string3.length; //assigns 10 to stringLength because "helloworld" has 10 characters

//3. Bracket notation - returns the character at the specified index
let character = string3[0]; //assigns "h" to character because "h" is at index 0

//4. String interpolation - allows us to insert variables into strings
let string4 = `${string1} ${string2}`; //assigns "hello world" to string4, we use `` instead of "" or '' to interpolate, when placing variables in the string we use ${variableName}

//Methods

//1. toUpperCase() - returns the string in all uppercase
let upperString = string4.toUpperCase(); //assigns "HELLO WORLD" to string5

//2. toLowerCase() - returns the string in all lowercase
let lowerString = string4.toLowerCase(); //assigns "hello world" to string6

//3. split() - splits the string into an array of substrings
let splitString = string4.split(" "); //assigns ["hello", "world"] to splitString, we pass in the character we want to split the string on as an argument aka space in this case

//4. slice() - returns a portion of the string
let slicedString = string4.slice(0, 5); //assigns "hello" to slicedString, we pass in the starting index as 0 and ending index as 5 as arguments

//5. replace() - replaces a specified value with another value in a string
let replacedString = string4.replace("hello", "goodbye"); //assigns "goodbye world" to replacedString, we pass in the value we want to replace as the first argument and the value we want to replace it with as the second argument

//6. indexOf() - returns the index of the first occurrence of a specified value in a string
let indexOfString = string4.indexOf("hello"); //assigns 0 to indexOfString, we pass in the value we want to find the index of as an argument

//7. lastIndexOf() - returns the index of the last occurrence of a specified value in a string
let lastIndexOfString = string4.lastIndexOf("hello"); //assigns 0 to lastIndexOfString, we pass in the value we want to find the last index of as an argument which is the same as indexOfString in this case

//8. charAt() - returns the character at a specified index in a string
let charAtString = string4.charAt(0); //assigns "h" to charAtString, we pass in the index we want to find the character at as an argument

//9. charCodeAt() - returns the unicode of the character at a specified index in a string,(less common) unicode is a unique number for each character
let charCodeAtString = string4.charCodeAt(0); //assigns 104 to charCodeAtString, we pass in the index we want to find the unicode of as an argument

//10. trim() - removes whitespace from both sides of a string
let whiteSpaceStr = "    hello world    ";
let trimString = whiteSpaceStr.trim(); //assigns "hello world" to trimString, we call the trim method on whiteSpaceStr which removes the whitespace from both sides of the string

//11. includes() - checks if a string contains a specified value and returns a boolean (true or false)
let includesString = string4.includes("hello"); //assigns true to includesString, we pass in the value we want to check if the string contains as an argument

//12. startsWith() - checks if a string starts with a specified value and returns a boolean (true or false)
let startsWithString = string4.startsWith("world"); //assigns false to startsWithString, we pass in the value we want to check if the string starts with as an argument, which would be hello in this case

//13. endsWith() - checks if a string ends with a specified value and returns a boolean (true or false)
let endsWithString = string4.endsWith("world"); //assigns true to endsWithString, we pass in the value we want to check if the string ends with as an argument, which would be world in this case

//14. repeat() - returns a new string with a specified number of copies of an existing string
let repeatedString = string4.repeat(2); //assigns "hello worldhello world" to repeatedString, we pass in the number of copies we want as an argument

//15. concat() - concatenates two or more strings together
let concatString = string1.concat(string2); //assigns "helloworld" to concatString, we pass in the string we want to concatenate as an argument

//16. match() - searches a string for a match against a regular expression, and returns the matches as an array
let matchString = string4.match(/hello/g); //assigns ["hello"] to matchString, we pass in the regular expression we want to match as an argument, we use / / to create a regular expression, g means global which means it will match all occurrences of the regular expression

//17. search() - searches a string for a specified value and returns the position of the match
let searchString = string4.search("hello"); //assigns 0 to searchString, we pass in the value we want to search for as an argument

//there are plenty more string methods, these are just some of the most common ones, you can find more at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

//Control Flow

//Control flow is the order that the computer executes code in
//This is important because we want to make sure our code is executed in the correct order, and we can control the flow of our code with conditionals and loops
const controlFlowX = (x) => {
        //Conditionals allow us to execute code based on a condition
    if (x === 5) { //if logic chain begins with if x is equal to 5
        return "x is equal to 5"; //return "x is equal to 5"
    } else if (x === 6) { //we use else if's to continue the chain of logic, so  if x is equal to 6
        return "x is equal to 6"; //return "x is equal to 6"
    } else { //final else statement to catch all other cases(defualt case)
        return "x is not equal to 5 or 6"; //return "x is not equal to 5 or 6"
    }
}
controlFlowX(5); //returns "x is equal to 5"
controlFlowX(6); //returns "x is equal to 6"
controlFlowX(7); //returns "x is not equal to 5 or 6"

//We can also use switch statements to control the flow of our code
const controlFlowY = (y) => {
    switch (y) { //switch statement begins with switch and then the variable we want to check
        //we use cases to check for specific values, so if y is equal to 5
        case 5: //case 5 is the first case we want to check
            return "y is equal to 5"; //return "y is equal to 5"
        case 6: //case 6 is the second case we want to check
            return "y is equal to 6"; //return "y is equal to 6"
        default: //default case to catch all other cases
            return "y is not equal to 5 or 6"; //return "y is not equal to 5 or 6"
    }
}
controlFlowY(5); //returns "y is equal to 5"
controlFlowY(6); //returns "y is equal to 6"
controlFlowY(7); //returns "y is not equal to 5 or 6"


//Loops allow us to execute code multiple times
//We use loops when we want to iterate over data structures like arrays and objects

//There are three main types of loops, for loops, while loops, and for in loops

//For loops are the most common type of loop
const controlFlowLoop = (collection) => {
            //start;    //stop;    //increment
    for (let i = 0; i < collection.length; i++) { //for loop that starts at index 0, runs as long as i is less than the length of y, and increments i by 1 each time
        console.log(collection[i]); //prints each element in y to the console
    }
}
//you can also loop backwards through an array
const controlFlowLoopBackwards = (collection) => {
            //start;    //stop;    //increment
    for (let i = collection.length - 1; i >= 0; i--) { //for loop that starts at the last index of y, runs as long as i is greater than or equal to 0, and decrements i by 1 each time
        console.log(collection[i]); //prints each element in y to the console
    }
}

//While loops are used when we don't know how many times we want to loop
const controlFlowWhileLoop = (collection) => {
    let i = 0; //we declare i outside of the loop
    while (i < collection.length) { //while i is less than the length of y
        console.log(collection[i]); //prints each element in y to the console
        i++; //increment i by 1 each time
    }
}

//For in loops are used to iterate over objects
const controlFlowForInLoop = (object) => {
    for (let key in object) { //for in loop that iterates over object, where key is the key of each key value pair in object
        console.log(object[key]); //prints each value in object to the console
    }
}

//Functions

//Functions can be broken down into two parts, declaration and invocation

//Declaration is when we create a function

function declaration() { //in the syntax for a function declaration, we use the function keyword followed by the name of the function, and then parentheses for our parameters, and then curly braces
    return "hello world"; //we can return a value from a function using the return keyword, this can also be any block of executable code
}

//Invocation is when we call a function
declaration(); //we call a function by using the function name followed by parentheses, we can also pass in arguments to the function if the function has parameters

//Parameters are placeholders for arguments in a function

function add(num1, num2) { //num1 and num2 are parameters for the add function
    return num1 + num2; //returns the sum of num1 and num2
}
add(1, 2); //we pass in 1 and 2 as ARGUMENTS to the add function, resulting in a return value of 3. 
//Arguments are the actual values that are passed into a function

//Functions can also be assigned to variables

const addFunction = function(num1, num2) { //we assign the add function to the addFunction variable
    return num1 + num2;
}
addFunction(1, 2); //returns 3, we call the addFunction variable just like we would call a function since addFunction points to the add function

//Functions can optionally take inputs and optionally return a single value, we specify what we want to return using the return keyword

//function scope refers to the variables that are accessible inside of a function
//variables declared inside of a function are only accessible inside of that function
//variables declared outside of a function are accessible inside of that function

//Closures are functions that have access to variables outside of their scope
//closures are created every time a function is created
//closures have access to three scopes, their own scope, the scope of the function they are nested in, and the global scope

//for example
const closureEx = () => {
    let x = 5; //x is declared in the scope of closureEx, so it is accessible in closureEx but not in the global scope
    const closure = () => { //closure is declared in the scope of closureEx, so it has access to the x variable in closureEx
        let y = 6; //y is declared in the scope of closure,
        return x + y; //closure has access to x, so it can return x + y as 5 + 6
    }
    return closure(); //we return the closure function, which returns x + y, it is very important to note that we are returning the closure function, not the return value of the closure function
    //if we were to return the return value of the closure function, we would have to invoke the closure function, like so return closure();
}

//Higher order functions are functions that take in other functions as arguments or return functions as values
//Higher order functions are very useful for abstraction and code reusability

const higherOrderFunction = (func) => { //higherOrderFunction takes in a function as an argument
    return func(); //higherOrderFunction returns the function that it takes in
}

//Callbacks are functions that are passed into other functions as arguments
//Callbacks are used in higher order functions to execute code

const callback = () => { //callback is a function that we will pass into higherOrderFunction
    return "hello world"; //callback returns "hello world"
}
higherOrderFunction(callback); //we pass the callback function into higherOrderFunction, which returns "hello world"
