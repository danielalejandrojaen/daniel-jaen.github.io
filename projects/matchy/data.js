/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a variable named animal and assign it to an empty obj

var animal = {};
//using dot notation, give animal a property named species with a value of any animal species
animal.species = "Cat";
//using bracket notation give animal a property called name with a value of your animals name
animal['name'] = 'Scrango';
//using either notation, give animal a property called noises with a val of empty array
animal.noises = [];
//print your animal obj to the console by adding console.log(animal)
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//create a var named noises and assign it to an empty array
var noises = [];
//using bracket notation give noises its first element a string 
noises[0] = 'Meow';
//using an array func add another noise to end of noises
noises.push('Chirp');
//using unshift add another noise to the array
noises.unshift('Trill');
//using bracket syntax add another element tot he end of noises
noises[noises.length] = 'Purr';
//console log the length of noises
console.log(noises[noises.length]);
//console log the last element in noises
console.log(noises[noises.length - 1]);
//console log the whole array
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//
//assign the noises prop on animal to our new noises array
animal['noises'] = noises;
//using any syntax add another noise to the noises 
animal.noises.push('Hiss');
//log animal
console.log(animal)

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a var named animals and assign it to an empty array
var animals = []
//push our animal that we created to animals
animals.push(animal);
//console log animals 
console.log(animals);
//create a var called duck and assign it to the data 
var duck = {
  species: 'duck',
  name: 'Jerome',
  noises: [
    'quack',
    'honk',
    'sneeze',
    'woosh'
  ]
}
//push duck to animals

animals.push(duck);

//console log animals

console.log(animals);

//create two new animal obj with a species a name and two sounds
var horse = {
  species: 'horse',
  name: 'Bingus',
  noises: [
    'Neigh',
    'Bray'
  ]
}
var bat = {
  species: 'bat',
  name: 'Barry',
  noises: [
    'screech',
    'chirp'
  ]
}
//add to animals
animals.push(horse);

animals.push(bat);

//log animals 
console.log(animals);

//log the length of animals

console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//choose a data strucure for this list of friends, we chose an array as it seems best to represent a list of items for this purpose 
var friends = []

//write a function called getRandom that takes animals arr  ay and returns 

function getRandom(array) {
  //return math.random and pass the array to it
  return Math.floor(Math.random() * array.length);
}
var randInd = getRandom(animals);
friends.push(animals[randInd].name)

console.log(friends);

animals[randInd]['friends'] = friends;

console.log(friends);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}