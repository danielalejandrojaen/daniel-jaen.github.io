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
