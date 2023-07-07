'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;
/**
 * identity: function takes in an input val and returns it unchanged
 * @param {*} value : Function takes in any input val
 * 
 * @returns {*}: Function  returns input value unchanged.
 */
const identity = (value) => {
    //return value unchanged
    return value;
}
module.exports.identity = identity;

/**
 * typeOf: Function takes in an input value and returns the type of the input value as a string
 * @param {*} value : Function takes in any input value
 * 
 * @returns {String}: Function  returns the type of the input value as a string. 
*/
const typeOf = (value) => {
     //if type of val eqs number
     if (typeof value === 'number') {
        //return number
        return 'number';
        //else if typeof val eqs string
    } else if (typeof value === 'string') {
        //return string
        return 'string';
        //else if isarray is truthy and val !== null and !val instanceof Date
    }  else if (Array.isArray(value) && value !== null && !(value instanceof Date)) {
        //return array
        return 'array';
        //else if typeof val = obj & val != null & !val instanceofdate
    } else if (typeof value === 'object' && value !== null && !(value instanceof Date)) {
       //return object
        return 'object';
        //else if typeofval === 'boolean'
    } else if (typeof value === 'boolean') {
        //return boolean
        return 'boolean';
        //else if typeof val === undefined
    } else if (typeof value === 'undefined') {
        //return undefined
        return 'undefined';
        //else if val == null and val != undefined
    } else if (value === null && value !== 'undefined') {
        //return null
        return 'null';
    } else if (typeof value === 'function') {
        //return function
        return 'function';
        //else if val instanceof date = true and val != null
    } else if (value instanceof Date && value !== null) {
        //return date
        return 'date';
    }
}
module.exports.typeOf = typeOf;
 
/**
 * first: Function that takes in an Array and a Number and returns the first <number> items of <array>
 * @param {Array, Number}: Function takes in an array and a number
 * 
 * @returns {Array}: Function returns the first <number> items of <array>
 */
const first = (array, number) => {
    //if array is not an array or number is less than 0
    if (!Array.isArray(array) || number < 0) {
        //return an empty array
        return [];
        //else if typeof number is not a number
    } else if (typeof number !== 'number') {
        ///return the first index of the array
        return array[0];
        ///else if number is greater than the length of the array
    } else if (number > array.length) {
        //return array
        return array;
    }
    //return the first number of items in the array
    return array.slice(0, number);
}
module.exports.first = first;

/**
 * last: Function that takes in an Array and a Number and returns the last <number> items of <array>
 * @param {Array, Number}: Function takes in an array and a number
 * 
 * @returns {Array}: Function returns the last <number> items of <array>
 */
const last = (array, number) => {
     //if array is not an array or number is less than 0
     if (!Array.isArray(array) || number < 0) {
        //return an empty array
        return [];
        //else if typeof number is not a number
    } else if (typeof number !== 'number') {
        ///return the last index of the array
        return array[array.length - 1];
        ///else if number is greater than the length of the array
    } else if (number > array.length) {
        //return array
        return array;
    }
    //return the last number of items in the array by using slice with a neg number to begin from the end
    return array.slice(-number);
}
module.exports.last = last;

/**
 * indexOf: Function that takes in an Array and a Value and returns the index of <array> that is the first occurrance of <value>
 * @param {Array, Value}: Function takes in an array and a value
 * 
 * @returns {Number}: Function returns the index of <array> that is the first occurrance of <value>
 */
const indexOf = (array, value) => {
      //loop through the array
      for (let i = 0; i < array.length; i++) {
        //if array index i = value
        if (array[i] === value) {
            //return the index which is just i not bracket as that would link the data in the index
            return i;
        } 
    }
    //outside the loop return -1
    return -1
}
module.exports.indexOf = indexOf;

/**
 * contains: Function that takes in an Array and a Value and returns true if <array> contains <value> and false if not
 * @param {Array, Value}: Function takes in an array and a value
 * 
 * @returns {Boolean}: Function returns true if <array> contains <value> and false if not
 */
const contains = (array, value) => { 
    //if array.includes value ternary operator true false
    if (array.includes(value) ? true : false) {
        //return true
        return true;
        // else
    } else {
        //return false
        return false;
    }
};
module.exports.contains = contains;

/**
 * unique: Function that takes in an Array and returns a new Array with duplicates removed
 * @param {Array} collection: Function takes in an array
 * 
 * @returns {Array}: Function returns a new Array with duplicates removed
 */
const unique = (array) => {
    //create our return arr
    let output = [];
    //loop through our input array
    for (let i = 0; i < array.length; i++) {
        //if indexOf array and arr ind i is eq to 1
        if (_.indexOf(array, array[i]) === i) {
            //push array ind i to output
            output.push(array[i]);
        }
    }
    //return output
    return output;
}
module.exports.unique = unique;

/**
 * filter: Function that takes in an Array and a Function and returns a new Array with only values that return true when passed to the <function>
 * @param {Array} collection: Function takes in an array
 * @param {Function} action: Function designed to filter through an array using a boolean
 * 
 * @returns {Array}: Function returns a new Array with only values that return true when passed to the <function>
 */
const filter = (collection, action) => {
    //create an output arr
    let output = [];
    // loop through the array
    for (let i = 0; i < array.length; i++) {
        //if func array element + index + array is true
        if (func(array[i], i, array)) {
            //push arr ind i(element) to the output
            output.push(array[i]);
    }
}
//return output
return output;
}
module.exports.filter = filter;

/**
 * reject: Function designed to take in an Array to loop through and call a Function on each element of the Array to return the falsy values in a new Array
 * @param {Array} collection: Function takes in an array that it is going to loop through
 * @param {Function} action: Function designed to filter through an array using boolean logic
 * 
 * @returns {Array}: Function returns a new array with the falsy boolean values
 */
const reject = (array, action) => {
   //create an output
   let output = [];
   //loop through the array
   for (let i = 0; i < array.length; i++) {
       //if func array element + index + array is false
       if (!func(array[i], i, array)) {
           //push arr ind i(element) to the output
           output.push(array[i]);
       }
   }
   //return output outside the loop
   return output;
};
module.exports.reject = reject;

/**
 * partition: Function designed to take in an Array to loop through and call a Function on each element of the Array to return both the truthy and the falsy values in their own respective Arrays.
 * @param {Array} collection: Function takes in an array that it will loop through
 * @param {Function} action: Function designed to filter through an array using boolean logic
 * 
 * @returns {Array}: Function returns a new array with both the truthy and falsy values in their own arrays
 */
const partition = (array, action) => {
    //create an output
    let output = [];
    //create a truthy arr
    let truthy = [];
    //create a falsy arr
    let falsy = [];
    //loop through the arr
    for (let i = 0; i < array.length; i++) {
        //if func array ele + ind + array is true
        if (func(array[i], i, array)) {
            //push arr ind i to truthy
            truthy.push(array[i]);
            //else push it to falsy
        } else {
            falsy.push(array[i]);
        }
    }
    //return truthy and falsy in an array output
    return [truthy, falsy];
};
module.exports.partition = partition;

/**
 * map: Function designed to take in a Collection and a Function and return a new Array with the results of calling <function> on each element of the <collection>
 * @param {Array or Object} collection: Function takes in an array or object that it will loop through
 * @param {Function} action: Function designed to map through the array or object using it's element, index and collection as arguments
 * 
 * @return {Array}: Function returns a new array with the result of calling the function on each element of the <collection>
 */
const map = (collection, action) => {
       //if collection is an array
       if (Array.isArray(collection)) {
        //create our output array
        let output = [];
        //loop through the collection array
        for (let i = 0; i < collection.length; i++) {
            //push the func with params of collection[i], i and collection (element index and collection)
            output.push(func(collection[i], i, collection));
        }
        //return output
        return output;
    }
    //if type of collection === object
    if (typeof collection === 'object') {
        //create output
        let output = [];
        //loop through collection obj with for in loop
        for (let key in collection) {
            //push the func with the element index and coll to the output arr
            output.push(func(collection[key], key, collection));
        }
        //return output
        return output;
    }
};
module.exports.map = map;

/**
 * pluck: Function designed to take in an Array of Objects and a Property to return an Array containing the value of <property> for every element in the <array>
 * @param {Array} collection: Function takes in an array of objects
 * @param {String} property: Function takes in a string that is a property of the objects in the array
 * 
 * @return {Array}: Function returns a new array containing the value of <property> for every element in the <array>
 */
const pluck = (array, property) => {
    //loop through the array of objs
    for (let i = 0; i < array.length; i++) {
        //return map with array, func with params of element, ind and array, 
        return _.map(array, function(element, index, array) {
            //return element prop
            return element[prop];
        });
    }
}
module.exports.pluck = pluck;

/**
 * every
 * 
 */
const every = (collection, action) => {
}

/**
 * some: Function designed to take in a Collection and a Function and return true if at least one element in the <collection> returns true when passed to the <function>
 * @param {Array or Object} collection: Function takes in an array or object to loop through
 * @param {Function} action: Function designed to filter through the array or object using boolean logic with the element, index and collection as arguments
 * 
 * @return {Boolean}: Function returns true if at least one element in the <collection> returns true when passed to the <function>, false if all elements return falseand if no <function> is passed return true if at least one element is truthy
 */
const some = (collection, action) => {
    //if typeof func is not a function
    if (typeof func !== 'function') {
        //loop through coll
        for (let i = 0; i < collection.length; i++) {
            //if coll[i] is true
            if (collection[i]) {
                //return true
                return true;
            }
        }
        //else return false
        return false;
    };
    //if collection is an array
    if (Array.isArray(collection)) {
        // loop through coll arr
        for (let i = 0; i < collection.length; i++) {
            //if func with params of coll[i], i and coll is true
            if (func(collection[i], i, collection)) {
                //return true
                return true;
            }
        };
        //return false
        return false;
    }
    //if collection is an obj
    if (typeof collection === 'object') {
        //loop through the call obj
        for (let key in collection) {
            //if func with element, index and coll is true
            if (func(collection[key], key, collection)) {
                //return true
                return true;
            };
        };
        //return false
        return false;
    };
};
module.exports.some = some;

/**
 * reduce:
 */


/**
 * extend: Function designed to take in an Object and an unlimited amount of other Objects and return the first Object with all the properties of the other Objects
 * @param {Object} object: Function takes in an object so it can add properties to it
 * @param {Object} ...objects: Function takes in an unlimited amount of objects to add their properties to the first object
 * 
 * @return {Object}: Function returns the first object with all the properties of the other ...objects
 */
const extend = (object, ...objects) => {
    //loop through obj2 with a for loop because
    for (let i = 0; i < obj2.length; i++) {
    //loop through obj2[i]
    for (let key in obj2[i]) {
        //assign obj1[key] to obj2[i][key]
        obj1[key] = obj2[i][key];
     };
  };
//return obj1
return obj1;
};
module.exports.extend = extend;