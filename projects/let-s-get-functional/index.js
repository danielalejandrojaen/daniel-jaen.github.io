// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar'); 

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *  You will need to have run npm init and npm install
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
    }, array[0]);
    return oldest.name;
};


var youngestCustomer = function(array) {
    //create youngest var and use reduce to find youngest
    let youngest = _.reduce(array, function(accumulator, current) {
        //if acc age (which is first cust) is less than current age (which is second cust) return acc as the younger of the two
        if (accumulator.age < current.age) {
            //return acc as younger of the two
            return accumulator;
            //else return current as the younger of the two.
        } else {
            return current;
        }
        //set acc to array[0] so seed is first customer
    }, array[0]);
    //return youngest (filtered) customer's name
    return youngest.name;
};

var averageBalance = function(array) {
};


var firstLetterCount = function(array, letter) {
    //filter arr to find cust with names that start with letter input
    let firstLetter = _.filter(array, function(customer) {
        //return true if first letter of name is equal to letter input both lowercase to match
        return customer.name[0].toLowerCase() === letter.toLowerCase();
    });
    //return length of the filtered arr
    return firstLetter.length;
};

var friendFirstLetterCount = function(array, customer, letter) {
    //create var to hold the friends arr
    let friends = [];
    //loop through the array 
    for (let i = 0; i < array.length; i++) {
        //if the name of the customer matches the customer input
        if (array[i].name === customer) {
            //set the friends var to the friends arr  to be filtered through
            friends = array[i].friends;
        }
    }
    //filter the friends arr to find the friends that start with the letter input
    let firstLetter = _.filter(friends, function(friend) {
        //return true if first letter of name is equal to letter input both lowercase to match
        return friend.name[0].toLowerCase() === letter.toLowerCase();
    });
    //return length of the filtered arr
    return firstLetter.length;

}

var friendsCount = function(array, name) {
    //create var to hold the friends arr output
    let friends = [];
    //loop through the array
    for (let i = 0; i < array.length; i++) {
        //loop through the friends arr
        for (let j = 0; j < array[i].friends.length; j++) {
            //if the name of the friend matches the name input
            if (array[i].friends[j].name === name) {
                //push the name of the customer to the friends arr
                friends.push(array[i].name);
            }
       }
    }
    //return the friends arr
    return friends;
}

var topThreeTags = function(array) {
    
  
}


var genderCount = function(array) {
    //using .filter method filter males
    let males = _.filter(array, (customer) => {
        return customer.gender === 'male';
    }); //using .filter method, filter females
    let females = _.filter(array, (customer) => {
        return customer.gender === 'female';
    }); //using .filter method, filter non-binary
    let nonBinary = _.filter(array, (customer) => {
        return customer.gender === 'non-binary';
    });
    //using .reduce count the # of males
    let maleCount = males.reduce((acc, curr) => {
        return acc + 1;
    }, 0);
    //using .reduce, count the # of females
    let femaleCount = females.reduce((acc, curr) => {
        return acc + 1;
    }, 0);
    //using reduce, count the # of non-Binary customers
    let nonBinaryCount = nonBinary.reduce((acc, curr) => {
        return acc + 1;
    }, 0);
    //return an object with the counts
    return {
        male: maleCount,
        female: femaleCount,
        'non-binary': nonBinaryCount
    }
}


// Create a function called updateSubscription that takes in two parameters - object and 
// updates. object represents a single subscription object; updates represents an array of arrays, where each subarray contains a property to update and a value to assign to that property. This function should use this updates array to access the necessary properties on the input object and assign the new values. updateSubscription should return the input object after modifying it.

let updateSubscription = function(object, updates) {
    //loop through the updates arr
    for (let i = 0; i < updates.length; i++) {
        //loop through the object
        for (let key in object) {
            //if the key matches the first element of the subarray
            if (key === updates[i][0]) {
                //assign the value of the second element of the subarray to the key
                object[key] = updates[i][1];
            }
        }
    }
    //return the object
    return object;
}

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
