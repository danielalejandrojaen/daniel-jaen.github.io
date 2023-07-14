// // Capitalize All
// // Create a function capitalizeAll that takes in a string and return that string where every word is capitalized.

// // capitalizeAll('what did you expect'); // => 'What Did You Expect'
// // capitalizeAll('capitalize all the words!'); // => 'Capitalize All The Words!'


// // const capitalizeAll = (str) => {
// //     //need to store the split string into a new array, separating each word by space so we can loop through each word
// //     let splitStr = str.split(' ');
// //     //need to store the new string into a new array
// //     let newStr = [];
// //     //now loop through each word in the spplit array
// //     for (let i = 0; i < splitStr.length; i++) {
// //         // push the first letter of each word to uppercase, then add the rest of the word to the new array using slice
// //         newStr.push(splitStr[i][0].toUpperCase() + splitStr[i].slice(1));
// //     }
// //     //return the new array as a string using join 
// //     return newStr.join(' ');
// // }
// // //test log
// // console.log(capitalizeAll('the quick brown fox jumps over the lazy dog'))

// // Create a function isBalanced that takes in two arrays of numbers.
// //  It should return true if the sum of all the numbers in the first array is greater than the sum of the numbers in the second array and false if not.
// const isBalanced = (arr1, arr2) => {
//     let sum1 = 0;
//     let sum2 = 0;
//     //loop through the first arr
//     for (let i = 0; i < arr1.length; i++) {
//         //add each number to sum1
//         sum1 += arr1[i];
//     }
//     //loop through the second arr
//     for (let i = 0; i < arr2.length; i++) {
//         //add each number to sum2
//         sum2 += arr2[i];
//     }
//     if (sum1 > sum2) {
//         return true
//     } else {
//         return false
//     }
// // }

// const partition = (arr, func) => {
//     let newArr = [];
//     let newArr2 = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (func(arr[i])) {
//             newArr.push(arr[i]);
//         } else {
//             newArr2.push(arr[i]);
//         }
//     }
//     return [newArr, newArr2];
    
// }

const pants = {
    waist: '15in', //measure flat
    rise: 'NA',//the gooch seam to the top
    hip: 'NA', //thigh ish area from left to right
    inseam: 'NA' //measure from the bottom seam of the pant let all the way to the crotch area

}

const shorts = {
    waist: 'NA', //if stretchy, measure with no stretch, then to a comfortable stretch not overdoing it and measure the difference
    rise: 'NA', //gooch seam intersection to the top
    hip: 'NA', //widest part usually
    inseam: 'NA' // can do but not necessary
};

const skirt = {
    waist: 'NA', //one corner to the end
    length: 'NA', // top to bottom in middle
    hip: 'na' //widest section, NOTE if skirt is stretchy, no hip measurement just hip and length
}

const joggers = {
    waist: 'NA', //lay flat, note diff in comfortable stretch to no stretch
    rise: 'NA',
    hip: 'NA', //widest part
    inseam: 'NA' //
}

const dress = {
    pit2Pit: 'na', //legit the pit to pit, also chest measurement 
    waist:  'na', //waist area more towards the middle
    hip: 'na', //widest part
    length: 'na' //top to bottom, some say top of the shoulder strap to bottom, if dress has backline that goes higher, sometimes people do that, specify where you're measuring from

}

const buttonDowns = {
    length: 'NA', //can be from neck back to front bottom or otherwise, specify in comment
    waist: 'NA', //center
    pit2Pit: 'NA', //pit2pit
    arm: 'NA' //long sleeve inseam measurement if folded and not normally, make sure to unfold
}


///////////////////// PROBLEM #2 ///////////////////////
/*
Directions: Create a function called printPodcastAndProducer that will recursively iterate through podcasts and print the podcast and producer like so "The Big Picture - Ringer Podcast Network".
/*
The Big Picture - Ringer Podcast Network
//  name        -        producer
*/

// const printPodcastAndProducer = (array, index=[]) => {
//     //base case
//     if (index === array.length) {
//         return;
//     }
//     //recursive case
//     console.log(`${array[index].name} - ${array[index].producer}`);
//     return printPodcastAndProducer(array, index + 1);
//   } 
//   REPLIT 07/11   
/////////////// BOOTCAMP WEEK 4 - DAY 2 ////////////////
///////////////// RECURSION PRACTICE ///////////////////

// const podcasts = [
//     { // 0
//       name: "How Did This Get Made",
//       category: "Comedy",
//       producer: "Earwolf",
//       downloads: 5
//     },
//     { // 1
//       name: "Slowburn",
//       category: "News/Documentary",
//       producer: "Slate",
//       downloads: 10
//     },
//     { // 2
//       name: "Comedy Bang Bang",
//       category: "Comedy",
//       producer: "Earwolf",
//       downloads: 3
//     },
//     { // 3
//       name: "Southlake",
//       category: "News/Documentary",
//       producer: "NBC News",
//       downloads: 8
//     },
//     { // 4
//       name: "The Big Picture",
//       category: "TV/Film",
//       producer: "Ringer Podcast Network",
//       downloads: 15
//     }
//   ];
  
  
//   ///////////////////// PROBLEM #1 ///////////////////////
//   /*
//   Directions: Create a function called getDownloadTotal that takes in an array of podcasts and outputs the total number of downloads.
//    */
  
//   //when iteratting through an arr, make sure to only do something to the zero index in the recursive portion
  
//   const getDownloadTotal = (array, index=0) => {
//     //base
//     if (array.length === 0) {
//       return index;
//     }
//     //recursion
//     //only do something to the zero index
//     //update default param += the first indexes .downloads prop
//     index += array[0].downloads;
    
//     return getDownloadTotal(array.slice(1), index);
//   }
// //   console.log(getDownloadTotal(podcasts));
  
  
//   ///////////////////// PROBLEM #2 ///////////////////////
//   /*
//   Directions: Create a function called printPodcastAndProducer that will recursively iterate through podcasts and print the podcast and producer like so "The Big Picture - Ringer Podcast Network".
//   /*
//   The Big Picture - Ringer Podcast Network
//   //  name        -        producer
//   */
  
//     const printPodcastAndProducer = (array, index=0) => {
//         //base
//         if (index === array.length) {
//             return;
//         }   
//         //recursive
//         console.log(`${array[0].name} - ${array[0].producer}`);
//         return printPodcastAndProducer(array.slice(1), index);
//     }
//         // printPodcastAndProducer(podcasts);
//         //first recursion
//         // console.log(`${array[0].name} - ${array[0].producer}`);
//         // return printPodcastAndProducer(array.slice(1), index);
//         // so index is 0, and we're slicing the array from 1 to the end, so we're only going to be looking at the first index of the array, which is the second object in the array, and we're going to be looking at the name and producer of that object
//         //second recursion
//         // console.log(`${array[0].name} - ${array[0].producer}`);
//         // return printPodcastAndProducer(array.slice(1), index);
  
  
  
  
//   ///////////////////// PROBLEM #3 ///////////////////////
//   /*
//   Directions: Create a function called tenPlusDownloads that will recursively iterate through podcasts and print the podcast names plus their download numbers ONLY if the podcast has 10 or more downloads.
//   - example: tenPlusDownloads(podcasts) => LOGS
//   "Slowburn - 10 downloads"
//   "The Big Picture - 15 downloads"
//    */
  
//   const tenPlusDownloads = (array, index = 0) => {
//     //base
//     //if index is equal to the length of the array, return to exit
//     if (index === array.length) {
//         return;
//     };
//     //recursion, use if logic if the first index of the array has 10 or more downloads, then console.log the name and downloads
//     if (array[0].downloads >= 10) {
//         //log the name and downloads using backticks and interpolation
//         console.log(`${array[0].name} - ${array[0].downloads} downloads`);
//     };
//     //return tenPlusdownloads bc recursion and pass array.slice (1), to the index
//     return tenPlusDownloads(array.slice(1), index);
// };
//   tenPlusDownloads(podcasts);
  
//   // create a function called getPodcast that takes in an array of podcasts and a target podcast name. This function should return the podcast object matching the input name. It should return 'no podcast found' if no name matches.
  
//   const getPodcast = (array, name) => {
//     //base
//     if (array.length === 0) {
//         return 'no podcast found';
//     };
//     //recursion
//     if (array[0].name === name) {
//         return array[0];
//     } else {
//         return getPodcast(array.slice(1), name);
//     }
//   }
//     console.log(getPodcast(podcasts, 'Slowburn'));
// //     //base
// //     if (array[0].name !== name) {
// //         return 'no podcast found';
// //     }
// //     if (array.length === 0) {
// //         return;
// //     };
// //     //recursion
// //     if (array[0].name === name) {
// //         return array[0];
// //     } else {
// //         return getPodcast(array.slice(1), name);
// //     }
// //   }
// //     console.log(getPodcast(podcasts, 'The Big Picture'));
  
  
  
//   ///////////////////// PROBLEM #4 ///////////////////////
//   /*
//   Directions: Create a function called getPodCategories that recursively iterates through podcasts and returns a new array of only the podcast categories with no duplicates.
//   **HINT: How can we use the includes method and a default parameter? 
//   **HINT: Consider how to use the array.includes() method to determine if there are duplicates
//    */ // ["Comedy", "News/Documentary", "TV/Film"]

//     const getPodCategories = (array, output = []) => {
//         //base
//         if (array.length === 0) {
//             return output;
//         };
//         //recursion
//         //if the output array doesn't include the first index of the array, then push the first index of the array into the output array
//         if (!output.includes(array[0].category)) {
//             output.push(array[0].category);
//         };  
//         //return the function with the array sliced from 1 to the end, and the output array
//         return getPodCategories(array.slice(1), output);
//     };
  
  
  
  
//   ///////////////////// PROBLEM #5 ///////////////////////
//   /*
//   Directions: Create a function called removeStars that will takes in a string with "*" in it. This function should recursively iterate through the string and output a new string with no "*".
//   **HINT: Use a default varaible in your solution.
//   removeStars('***Alex***') => "Alex"
//    */
  
  
  
  
  
  
  
let app = {};
// DO NOT REMOVE CODE ABOVE /////////////////////////



// REPLIT 07/12
/////////////////////////////////////////////////////
////////////// BOOTCAMP WEEK 4 - DAY 3 //////////////
////////// forEach, map, filter Checkpoint///////////
/////////////////////////////////////////////////////

const patients = [
  {
    name: "Abe Froman",
    age: 56,
    gender: "male",
    preexistingConditions: ["Heart disease", "High cholesterol"],
    allergies: []
  },
  {
    name: "Kendall Roy",
    age: 40,
    gender: "male",
    preexistingConditions: ["Depression", "Drug addiction"],
    allergies: ["Peanuts", "Penicilin"]
  },
  {
    name: "Leslie Knope",
    age: 45,
    gender: "female",
    preexistingConditions: ["High blood pressure", "High cholesterol"],
    allergies: [],
  },
  {
    name: "Adira",
    age: 18,
    gender: "non-binary",
    preexistingConditions: ["Symbiont"],
    allergies: ["Pencilin"]
  },
  {
    name: "Dee Reynolds",
    age: 44,
    gender: "female",
    preexistingConditions: ["Heart disease", "High blood pressure", "Alcoholism", "Drug addiction"],
    allergies: []
  }
];

/////////////////// PROBLEM #1 //////////////////////
/*
Directions: Use the native filter function to return an array of only patients that have no allergies.
 */
let noAllergies = patients.filter(function(patient) {
    return patient.allergies === 0
});





/////////////////// PROBLEM #2 //////////////////////
/*
Directions: Use the native map function to return a new array where each value is a string of the patients name, age, gender, and the first preexisting condition in their preexisting conditions array like so: 
// name - age - gender - Drug addiction
[
"Abe Froman - 56 - male - Heart Disease", 
"Kendall Roy - 40 - male - Depression", 
...
]
 */

//arrow func way
const patientStrings = patients.map(patient => `${patient.name} - ${patient.age} - ${patient.gender} - ${patient.preexistingConditions}`);
// let patientStrings = patients.map(function(patient) {
//     return `${patient.name} - ${patient.age} - ${patient.gender} - ${patient.preexistingConditions}`
// });

// console.log(patientStrings);






/////////////////// PROBLEM #3 //////////////////////
/*
Directions: Use the native forEach function to add "Omicron exposure" to the preexistingConditions property for every patient.
 */

const addCondit = patients.forEach(patient => patient.preexistingConditions.push('Omicron exposure'));
// console.log(patients);


/////////////////// PROBLEM #4 //////////////////////
/*
Directions: Use the native higher order function filter to return an array of only patients who have "Drug addiction" as one of their pre-existing conditions.
**Hint: use the array.includes() method in your callback function
 */

const hasAddiction = patients.filter(patient => patient.preexistingConditions.includes('Drug addiction'));


// console.log(hasAddiction);



/////////////////// PROBLEM #5 //////////////////////
/*
Directions: Use the native filter function to return a new array only the patients who have no allergies AND high cholesterol.
 */
const noAllergiesHighChol = patients.filter(patient => patient.preexistingConditions.includes('High cholesterol') && patient.allergies.length === 0);
// console.log(noAllergiesHighChol)




/////////////////// PROBLEM #6 //////////////////////
/*
Directions: Use filter, map, and forEach to do the following -
 - return a new array of only the names of patients who have "High cholesterol" as one of their preexistingConditions and print the names of the patients to the console.
 */













  
  
   
  