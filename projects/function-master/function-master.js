//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

const { toUpper } = require("lodash");

function objectValues(object) {
    return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    return Object.keys(object).join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function valuesToString(object) {
    //create a new string array to push the values of the object into
    let newString = [];
    //loop through the obj
    for (let key in object) {
        //if type of key is a string
        if (typeof object[key] === 'string') {
            //push the value of the key into the new string 
            newString.push(object[key]);
        }
    }
    //return the newstring joined by ' '
    return newString.join(' ');
    
}
//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
        return 'array'
    } else {
        return 'object'
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    let newstring = '';
    for (let i = 0; i < string.length; i++) {
        newstring = string.charAt(0).toUpperCase() + string.slice(1);
    }
    return newstring;   
}
//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //going to take a string of words and return a string with all words capitalized
    //begin splitting each word into its own index of an array
    let newArr = string.split(' ');
    // console.log(newArr);
    //loop through the new array
    for (let i = 0; i < newArr.length; i++) {
        //capitalize the first letter of each index
        newArr[i] = newArr[i].charAt(0).toUpperCase() + newArr[i].slice(1);
    }
    //join the array back into a string
    return newArr.join(' ');
}
//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    //loop through the keys in object
    for (let key in object) {
        //if key === name
        if (key === 'name') {
            //return welcome concat object[key].charAt(0) to select first index and .toUppercase to capitalize it + object[key].slice + '!'
            return 'Welcome ' + object[key].charAt(0).toUpperCase() + object[key].slice(1) + '!';
        }
    }

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    if (object.name && object.species) {
        return object.name[0].toUpperCase() + object.name.slice(1) + ' is a ' + object.species[0].toUpperCase() + object.species.slice(1);
    }
}
//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    let newString = [];
    if (Array.isArray(object.noises) && object.noises.length > 0) {
       for (let i = 0; i < object.noises.length; i++) {
            newString.push(object.noises[i]);
       }
       return newString.join(' ');
    } else {
        return 'there are no noises'
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    //split the string by word by splitting with a param of ' '
let splitStr = string.split(' ');
//loop through the split string using .length now that its an array
for (let i = 0; i < splitStr.length; i++) {
    //if splitstr index i includes the word param
        if (splitStr[i].includes(word)) {
            //return true
            return true;
        }
    }
    //return false by default outside the loop
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    //using the push method, push name into the friends array in object targeted by dot notation
    object.friends.push(name);
    //return obj
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    //loop through the friend object with a for in loop NOT for of as its not an array 
    for (let friend in object) {
        //if object.friends includes name param
        if (object.friends.includes(name)) {
            //return true
            return true
        }//exit
    }  //the loop
    //return false
 return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    //create the return arr
    let returnArr = []
    /* REMEMBER
    the data being passed is an array of objects ie
    var data = [
        {name: "Jimmy", friends:["Sara", "Liza"]},
        {name: "Bob", friends:[]},
        {name: "Liza", friends: ["Jimmy"]},
        {name: "Sara", friends: ["Jimmy"]}
      ];
    */
   //loop through the array
    for (let i = 0; i < array.length; i++) {
        //using if statement if array index i (targets the specific index of data) bracket [friends] targets the friends prop of that data (ie friends array)
        //does NOT include the name being passed
        let iName = array[i]['name'];//dec these variables for simplicity
        let iFriends = array[i]['friends'];
        if (!iFriends.includes(name) && iName !== name) {
            //push the result to the return array
            returnArr.push(iName);
        }
        //return returnArr outside of loop
    }
    return returnArr;
}
// console.log(nonFriends('Jimmy', data));
//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    // Should take an object, a key and a value. Should update the property <key> on
    //  <object> with new <value>. If <key> does not exist on <object> create it.",  
    //loop through the object
    for (let prop in object) {
        //if the prop === key ie it exists
        if (prop === key) {
            //reassign the prop to value
            object[prop] = value;
        } else {
            //else if the prop does not exist
            object[key] = value;
        }
    }
    //return the object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    // "removeProperties() : Should take an object and 
    // an array of strings. Should remove any properties on 
    // <object> that are listed in <array>", function(assert){
    //     var data = {a: "one", b: "two", "hokey": false};
    //     removeProperties(data, ["a","hokey"]);
    //     assert.deepEqual(data, {b: "two"});
    
    //loop through the object first, 
    for (let key in object) {
        //loop through the array
        for (let i = 0; i < array.length; i++) {
            //if the key = array index i
            if (key === array[i]) {
                //delete the key
                delete object[key];
            }
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    //should take an array and return an array with all the duplicates removed
    
    //create a new array
    let newArr = [];
    //loop through  array
    for (let i = 0; i < array.length; i++) {
        //if the new array does NOT include the array index i meaning the value
        if (!newArr.includes(array[i])) {
            //push the array index i to the new array
            newArr.push(array[i]);
        }
    }
    //return the new array
    return newArr;

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}