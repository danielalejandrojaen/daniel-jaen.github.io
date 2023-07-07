// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function (value) {
    return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function(value) {
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
}


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, number) {
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

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = (array, number) => {   
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

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function(array, value) {
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


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function(array, value) {
    //if array.includes value ternary operator true false
    if (array.includes(value) ? true : false) {
        //return true
        return true;
        // else
    } else {
        //return false
        return false;
    }
}


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = (collection, func) => {
    //if collection is an array
    if (Array.isArray(collection)) {
        //loop through the collection array
        for (let i = 0; i < collection.length; i++) {
            //call func with the arguments element ind and collection
            func(collection[i], i, collection);
        }
        //else if collection is an obj
    } else if (typeof collection === 'object') {
        //loop through the object using a for in loop,
        for (let key in collection) {
            //call func with the arguments  value, prop key, and collection
            func(collection[key], key, collection);
        }
    }
  
}


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = function(array) {
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


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
// _.filter = (array, func) => {
// //     //create an output arr
// //     let output = [];
// //     for (let i = 0; i < array.length; i++) {
// //         func(array[i], i, array) 
// //             return 
// //         }
// //     }
// // }
_.filter = (array, func) => {
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
};

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = (array, func) => {
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
    return output;
};

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = (array, func) => {
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

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = (collection, func) => {
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
 
}


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = (array, prop) => {
    //loop through the array of objs
    for (let i = 0; i < array.length; i++) {
        //return map with array, func with params of element, ind and array, 
        return _.map(array, function(element, index, array) {
            //return element prop
            return element[prop];
        });
    }
 }


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = (collection, func) => {
    if (func === undefined) {
        //loop through the collection
        for (let i = 0; i < collection.length; i++) {
            //if collection[i] is falsey
            if (!collection[i]) {
                //return false
                return false;
            }
        }
        //return true
        return true;
    }
    //create an output
    let output = [];
    //if collection is an array
    if (Array.isArray(collection)) {
        //loop through the collection array
        for (let i = 0; i < collection.length; i++) {
            //push the func with params of collection[i], i and collection (element index and collection)
            output.push(func(collection[i], i, collection));
        }
        //return output
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
    }
    //if output includes false
    if (output.includes(false)) {
        //return false
        return false;
    }
    //return true
    return true;


}


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = (collection, func) => {
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
            }
        };
        //return false
        return false;
    };
    //if func is not given return true if at least one element is truthy
  
};



/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = (array, func, seed) => {
let result;
//if seed is undefined
if (seed === undefined) {
    //assign seed to array[0]
    result = array[0];
    //start at one as we're moving past from the 0 index
    for (let i = 1; i < array.length; i++) {
        result = func(result, array[i], i);
        }
    } else {
        //assign seed to result
        result = seed;
        //loop through array
        for (let i = 0; i < array.length; i++) {
            result = func(result, array[i], i);
        }
    }   
    return result;
};

//using reduce to return the sum of all the values in the array
// var example = _.reduce([1, 2, 3], function(accumulator, current) {
//     return accumulator + current;
// }, 0);// -> 6
// // // | seed value
// console.log(example);
//map, filter and reduce all take in a collection and have a callback func
//map => [1, 2] => [2, 4] (array)
//filter => [1, 2, 3] => [2] (array)
//reduce => iterates through an input array, calling a callback function to accumulate a single return


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = (obj1, ...obj2) => {
    //loop through obj2 with a for loop because
    for (let i = 0; i < obj2.length; i++) {
        //loop through obj2[i]
        for (let key in obj2[i]) {
            //assign obj1[key] to obj2[i][key]
            obj1[key] = obj2[i][key];
        }
    }
    //return obj1
    return obj1;
}


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
