// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    //using Array.isArray method, we pass the value to it and use condit logic
    if (Array.isArray(value)) {
        //if its truthy, return true, 
        return true;
    } else {
        //else return false
        return false;
    }

    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    //if the values type === object, AND value does not = null AND isArray evals to false AND instance of evals to false
  if (typeof value === 'object' && value !== null && !Array.isArray(value) && !(value instanceof Date)) {
    //return true
    return true
    //else return false
  } else {
    return false;
  }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    //if isarray evals truthy OR typeof val eqs object AND val does not eq null AND val does not eq instanceof Date
    if (Array.isArray(value) || typeof value === 'object' && value !== null && !(value instanceof Date)) {
        //return true
        return true;
        //else return false
    } else {
        return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    //if type of val eqs number
    if (typeof value === 'number') {
        //return number
        return 'number'
        //else if typeof val eqs string
    } else if (typeof value === 'string') {
        //return string
        return 'string'
        //else if isarray is truthy and val !== null and !val instanceof Date
    }  else if (Array.isArray(value) && value !== null && !(value instanceof Date)) {
        //return array
        return 'array'
        //else if typeof val = obj & val != null & !val instanceofdate
    } else if (typeof value === 'object' && value !== null && !(value instanceof Date)) {
       //return object
        return 'object'
        //else if typeofval === 'boolean'
    } else if (typeof value === 'boolean') {
        //return boolean
        return 'boolean'
        //else if typeof val === undefined
    } else if (typeof value === 'undefined') {
        //return undefined
        return 'undefined'
        //else if val == null and val != undefined
    } else if (value === null && value !== 'undefined') {
        //return null
        return 'null'
    } else if (typeof value === 'function') {
        //return function
        return 'function'
        //else if val instanceof date = true and val != null
    } else if (value instanceof Date && value !== null) {
        //return date
        return 'date';
    }
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
