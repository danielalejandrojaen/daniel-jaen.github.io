// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  //base
  //if n is negative return null
  if (n < 0) {
    //return null
    return null;
    
  } else if(n === 0) {
    //return 1
    return 1;
  };
  //recursion
  //return n * factorial n - 1
  return  n  * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  //base
  //if array is empty return 0
  if (array.length === 0) {
    //return 0
    return 0;
  };
  //recursion
  //return array[0] + sum(array.slice(1))
  return array[0] + sum(array.slice(1)); 
};



// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
// var arraySum = function(array) {

// };

// 4. Check if a number is even.
var isEven = function(n) {
  //base
  //if n is 0 return true, ie if n is even (no modulo)
  if (n === 0) {
    //return true for evens
    return true;
  //if n is 1 return false ie if n is odd
  } else if (n === 1) {
    //return false
    return false;
  };
  //recursion
  //if n is less than 0
  if (n < 0) {
    //return isEven(n + 2) we add 2 to n to get to 0 or 1 for our neg nums
    return isEven(n + 2);
  };
  //if n is greater than 0, we subtract 2 to get to 0 or 1 for our pos nums
  //return isEven(n - 2)
  return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  //base
  if (n === 0) {
    return 0;
  }
  //recursion
  if (n < 0) {
    return n + 1 + sumBelow(n + 1);
  }
  return n - 1 + sumBelow(n - 1);
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  //BASE
  //if x and y are equal return empty array or if there are no integers in range, return empty array
  if (x === y || x === y - 1 || x === y + 1) {
    return [];
  };
  
  //recursion

  //if x is less than y
  if (x < y) {
    //return using bracket notations because we are returning an array with concat and recurse range(x + 1, y) using y as the base case
    return [x + 1].concat(range(x + 1, y));
    //else if x is greater than y
  } else if (x > y) {
    //return using bracket notations because we are returning an array with concat and recurse range(x - 1, y) using y as the base case
    return [x - 1].concat(range(x - 1, y));
  }


};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  //base
  //if exp is 0 return 1
  if (exp === 0) {
    return 1;
  };
  //recursion 
  //if exp is less than 0
  if (exp < 0) {
    //doesnt work but this is a bonus so whatever
    return 1 / (base * exponent(base, -exp - 1));
  } else {
    return base * exponent(base, exp - 1);
  }
  //if exp is greater than 0
  //return base * exponent(base, exp - 1)
  
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  //base
  //if n === 1 return true as base case 
  if (n === 1) {
    return true;
  }
  //recursion
  
  if (n < 1) {
    return false;
  }
  return powerOfTwo(n / 2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  //base
  //if string is empty return empty string
  if (string === '') {
    return '';
  }
  //recursion
  //return reverse(string.slice(1)) + string[0]
  return reverse(string.slice(1)) + string[0];
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  //base
  //if string is empty return true
  if (string === '') {
    return true;
  }
  //recursion
  //if string[0] is not equal to string[string.length - 1] return false
  if (string[0].toLowerCase() !== string[string.length - 1].toLowerCase()) {
    return false;
  }
  //return palindrome(string.slice(1, string.length - 1)) and replace 
  return palindrome(string.slice(1, string.length - 1).replace(/\s+/g, '').toLowerCase());
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
var multiply = function(x, y) {
 
  if (x === 0 || y === 0) {
    return 0;
  }

  if (x < 0) {
   
    return -y + multiply(x + 1, y);
  }
 
  return y + multiply(x - 1, y);
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  //base
  //if str1 && str2 are empty return true as in at the end of the string
  if (str1 === '' && str2 === '') {
    //return true to exit
    return true;
  }
  //recursion
  //if str1[0] is not equal to str2[0] return false
  if (str1[0] !== str2[0]) {
    return false;
  }
  //return func slicing each str
  return compareStr(str1.slice(1), str2.slice(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  //base
  //if str is empty return empty arr
  if (str === '') {
    return [];
  }
  //recursion
  //return the first letter of the string array split by character and concat the rest of the string recursing through the function
  return str[0].split('').concat(createArray(str.slice(1)));
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  //base 
  // if arr is empty return empty arr
  if (array.length === 0) {
    return [];
  }
  //recursion
  //return the last ele of the arr and concat the rest of the arr while recursing through the func
  return [array[array.length - 1]].concat(reverseArr(array.slice(0, array.length - 1)));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  //base
  //if length is 0 return empty arr
  if (length === 0) {
    return [];
  }
  //recursion 
  //return the val and concat passing i the buildlist func to recurse through the func  
  return [value].concat(buildList(value, length - 1));

};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  //base
  //if arr is empty return 0
  if (array.length === 0) {
    return 0;
  }
  //recursion
  //if the first ele is eq to the val return 1 + the rest 
  if (array[0] === value) {
    return 1 + countOccurrence(array.slice(1), value);
  }
  //return the rest of the arr slicing 
  return countOccurrence(array.slice(1), value);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  //base
  if (array.length === 0) {
    return [];
  }
  //recursion
  //return the callback of the first ele and concat the rest of the arr recursing through the func
  return [callback(array[0])].concat(rMap(array.slice(1), callback));
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  //base
  //if n is less than 0 return null
  if (n < 0) {
    return null;
  }
  //if n is less than or equal to 1 return n
  if (n <= 1) {
    return n;
  }
  //recursion
  //return n-1 + n-2 as you recurse through the func, adding the previous two nums
  return nthFibo(n - 1) + nthFibo(n - 2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  //base
  //if input is empty return empty arr
  if (input.length === 0) {
    return [];
  }
  //recursion
  //return the first ele of the input arr capitalized, and concat the rest of the arr while recursing through the func
  return [input[0].toUpperCase()].concat(capitalizeWords(input.slice(1)));
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  //base
  //if arr is empty return empty arr
  if (array.length === 0) {
    return [];
  }
  //recursion
  //return the first ele of the arr's first ele capitalized + the slice of the arr, and concat the rest of the arr while recursing through the func
  return [array[0][0].toUpperCase() + array[0].slice(1)].concat(capitalizeFirst(array.slice(1)));
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, ind = 0, obj = {}) {
  //base
  //if the index is ==== to the length of str return obj
  if (ind === str.length) {
    return obj;
  }
  //recursion
  //each index of the str  is assigned to the obj and the value is incremented by 1
  obj[str[ind]] = (obj[str[ind]] || 0) + 1;
  //return  the str, index + 1, and the obj
  return letterTally(str, ind + 1, obj);

};
// console.log(letterTally('potato', {})); //why is this not passing even though it works

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  //base
  //if list is empty return empty arr
  if (list.length === 0) {
    return [];
  }
  //recursion
  //if the first ele of the list arr is not eq to the second ele, return the first ele of the arr and concat the rest of the arr while recursing through the func
  if (list[0] !== list[1]) {
    return [list[0]].concat(compress(list.slice(1)));
  } else {
    return compress(list.slice(1));
  }
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  //base 
  //if array is empty return empty arr
  if (array.length === 0) {
    return [];
  }
  //recursion
  //if first ele of the arr does not eq 0 
  if (array[0] !== 0) {
    //return first ele of arr and concat the rest of the arr while recursing through the func
    return [array[0]].concat(minimizeZeroes(array.slice(1)));
  } else {
    //else if first ele of arr eq 0 and second ele of arr does not eq 0
    if (array[0] === 0 && array[1] !== 0) {
      //return first ele of arr and concat the rest of the arr while recursing through the func
      return [array[0]].concat(minimizeZeroes(array.slice(1)));
    } else {
      //else if first ele of arr eq 0 and second ele of arr eq 0
      return minimizeZeroes(array.slice(1));
    }
  }


};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var count = 0;
var alternateSign = function(array) {
  //base
  //if array is empty return empty arr
  if (array.length === 0) {
    return [];
  }
  //recursion
  //increment count from 0 to 1
  count++;
  //init currind to first element of the arr
  let currInd = array[0];
  //if count is odd
  if (count % 2 !== 0) {
    //if the currInd is negative
    if (currInd < 0) {
      //return currInd * -1 so that it flips to being positive
      return [currInd * -1].concat(alternateSign(array.slice(1)));
    } else {
      //else if it's already positive, just return
      return [currInd].concat(alternateSign(array.slice(1)));
    }
    //else if count is even
  } else if (count % 2 === 0) {
    //if currInd is positive
    if (currInd > 0) {
      //return currInd * -1 so that it flips to being negative
      return [currInd * -1].concat(alternateSign(array.slice(1)));
    } else {
      //else if it's already negative, just return
      return [currInd].concat(alternateSign(array.slice(1)));
    }
  }
};
// console.log(alternateSign([-2,-7,-8,3,-1,4]));

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  //create a table to store the numbers and their word conversion
  const numsTable = {
    '0' : 'zero',
    '1' : 'one',
    '2' : 'two',
    '3' : 'three',
    '4' : 'four',
    '5' : 'five',
    '6' : 'six',
    '7' : 'seven',
    '8' : 'eight',
    '9' : 'nine'
  }
  //base
  //if str is empty return empty string
  if (str === '') {
    return '';
  }
  //recursion
  //if the first ele of the str is a number 
  if (!isNaN(parseInt(str[0]))) {
      //return the first ele of the str converted to a number and concat the rest of the str while recursing through the func 
      const convertedNum = numsTable[str[0]];
      return convertedNum.concat(numToText(str.slice(1)));
  } else {
    //else if the first ele of the str is not a number
    //return the first ele of the str and concat the rest of the str while recursing through the func
    return str[0].concat(numToText(str.slice(1)));
  }
};
// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
