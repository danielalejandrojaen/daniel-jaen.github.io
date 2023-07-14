// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar'); 

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./daniel-jaen.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    let males = _.filter(array, function(customer) {
        return customer.gender === 'male'; //returns true if customer is male
    }); // [<male>, <male>, <male>]
 return males.length;
};

const femaleCount = function(array) {
    let filterFemales = _.filter(array, function(customer) { //returns array of females
        return customer.gender === 'female';
    });
    //using reduce to count the number of females
    let countFemales = _.reduce(filterFemales, function(accumulator, current) {
        //
        return accumulator + 1;
    }, 0);
    return countFemales;
};

var oldestCustomer = function(array) {
    let oldest = _.reduce(array, function(accumulator, current) {
        if (accumulator.age > current.age) {
            return accumulator;
        } else {
            return current;
        }
    });
};


var youngestCustomer;

var averageBalance; //skip till monday

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
