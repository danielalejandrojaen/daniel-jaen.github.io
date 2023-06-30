// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //

    //create a for loop going form 1 - 100

    for (let i = 1; i <= 100; i++) {
    
        //if i divided by 3 remainder 0 & same for 5
        if (i % 3 === 0 && i % 5 === 0) {
            //log fizzbuzz
            console.log("FizzBuzz");
            //else if i remainder 5 is 0
        } else if (i % 5 === 0) {
            //log buzz
            console.log('Buzz');
            //else if i % 3 is 0
        } else if (i % 3 === 0) {
            //log fizz
            console.log('Fizz');
        } else {
            //else log the number (this ensures our other conditions run over this one before beginning the loop)
            console.log(i);
        }
}
    //     if (i % 3 === 0) {
    //         console.log('Fizz');
    //     }

    //     if (i % 5 === 0) {
    //         console.log('Buzz');
    //     }

    //     if (i % 3 === 0 && i % 5 === 0) {
    //         console.log("FizzBuzz");
    //     }
    //     console.log(i);
    // }


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}