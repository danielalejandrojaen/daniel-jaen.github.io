// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

    
    /*
    I: string data type 
    O: the same string, but reversed order
    C: n/a
    E: n/a
    */
   
  function reverseString(input) {
      // YOUR CODE GOES BELOW HERE //
      
      //first init a var to store the input as an array.

      var inputArr = input.split('');

      //create an empty array called newInputArr
      var newInputArr = [];

      //loop through the array using a for let loop beginning at the end of the array, stopping @ 0, decrementing

      for (var i = inputArr.length - 1; i >= 0; i--) {
        //store the contents of the inputArr array in the newInputArr using the .push method
        newInputArr.push(inputArr[i]);
      }
      //return the newInputArr joined by nothing
      return newInputArr.join('');
      
      // YOUR CODE GOES ABOVE HERE //
  }
  console.log(reverseString('The quick brown fox jumps over the lazy dog'))

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}