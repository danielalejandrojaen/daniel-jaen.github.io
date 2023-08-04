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

//we can declare variables with 3 different keywords in javascript, var, let and const
//var is the es5 way of declaring variables, it is function scoped and can be hoisted (more on hoisting later), it is also globally scoped if it is not declared inside of a function
//let and const are the es6 way of declaring variables, they are block scoped meaning they cannot be referenced outside of the block of code in which they are scoped too, and cannot be hoisted
var myName; //const myName  //let myName

//let and const are very similar, the only difference is that const cannot be reassigned, while let can
//const can be though of as a constant variable that cannot be changed
const name = "Daniel"; //declaring a constant variable name and assigning it the string "Daniel" since it cannot be reassigned


/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. assignment , as myName is a var it can be reassigned
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// 4. var, let, const scopes   //
//var can be declared globally or locally, and can be reassigned

var globalVar = "hello"; //declaring a global variable with var

function functionScope() {
    var localVar = "hello"; //declaring a local variable with var
    console.log(globalVar); //prints "hello" to the console since globalVar is globally scoped, and can be accessed anywhere in the program 
    console.log(localVar); //prints "hello" to the console since localVar is locally scoped to the functionScope function, and can be accessed anywhere within the func
}
console.log(localVar); //throws a reference error since localVar is locally scoped to the functionScope function, and cannot be accessed outside of the function

//We can see global scope in action with var by declaring a variable outside of a function, and then accessing it inside of a function, but the same isnt true for function scoped variables

//let and const are block scoped, meaning they can only be accessed within the block of code in which they are declared

if (true) {
    let blockScoped = "hello"; //declaring a block scoped variable with let
    console.log(blockScoped); //prints "hello" to the console since blockScoped is block scoped to the if statement, and can be accessed anywhere within the if statement (block of code)
}
console.log(blockScoped); //throws a reference error since blockScoped is block scoped to the if statement, and cannot be accessed outside of the if statement (block of code)

//the same is true for const
if (true) {
    const blockScoped2 = "hello"; //declaring a block scoped variable with const
    console.log(blockScoped2); //prints "hello" to the console since blockScoped is block scoped to the if statement, and can be accessed anywhere within the if statement (block of code)
}
console.log(blockScoped2); //throws a reference error since blockScoped is block scoped to the if statement, and cannot be accessed outside of the if statement (block of code)


// 5. Hoisting //
// Hoisting in JS is where variables and function declarations are moved to the top of their scope before code execution.
// This means that you can use a variable before it is declared.
// Hoisting only works with var and function declarations, not let and const.


//declaring a function like this will hoist the function declaration to the top of the scope of the program
//this means that we can call the function before it is declared as when the code is executed the function declaration will be moved to the top of the scope
myFunction(); //prints "hello" to the console despite being called before it is declared due to hoisting

//the same is true for variables declared with var

var hoistedVar = "hello"; //declaring a variable with var will hoist the variable declaration to the top of the scope of the program, however the value will not be hoisted

//hoisting also occurs within functions, so we can call a variable declared with var before it is declared within a function
function hoistedFunction() {
    console.log(hoistedVar); //prints undefined to the console despite being called before it is declared due to hoisting
    var hoistedVar = "hello"; //this would move above the console.log(hoistedVar) line when the code is executed, however the value would not be hoisted so it would still print undefined, if this was declared with let or const it would throw an error
    console.log(hoistedVar); //prints "hello" to the console since it is declared and assigned before this line is executed
}
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

