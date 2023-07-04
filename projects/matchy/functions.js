/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(array, string) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].name === string) {
            return array[i];
        }
    }
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement) {
    for (let i = 0; i < animals.length; i++) {
        if(animals[i].name === name) {
            animals[i] = replacement
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name) {
    for (let i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
            animals.splice(i);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal) {
    //starting with conditional logic, if animal name and species length are greater than 0
    if (animal.name.length > 0 && animal.species.length > 0) {
        //for loop to iterate through animals array
        for (let i = 0; i < animals.length; i++) {
            //if animals array name is = to animal passed name
            if (animals[i].name === animal.name) {
                //return
                return;
            }
        }
        //outside of the loop, push animal into animals array
        animals.push(animal);
    }
  
}
/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
