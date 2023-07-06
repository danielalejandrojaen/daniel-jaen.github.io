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
// }