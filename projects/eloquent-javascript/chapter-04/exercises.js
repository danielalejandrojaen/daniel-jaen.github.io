////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step = 1) {
  //create output arr
  let output = [];
  //if start === end return empty array
  if (start === end) {
    return output;
  }
  // if step is greater than 0, loop incrementing by step
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      //push i to output
      output.push(i);
    }
    //else loop decrementing by step 
  } else {
    for (let i = start; i >= end; i += step) {
      output.push(i);
    }
  }
  return output;
}
// console.log(range(1, 10));

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i]; 
  }
  return sum;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  //create output arr
  let output = [];
  //loop through the arr
  for (let i = 0; i < array.length; i++) {
    //unshift so that the last element is first
    output.unshift(array[i]);
  }
  //return output
  return output
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  for (let i = 0; i < array.length; i++) {
    array.splice(i, 0, array.pop());
  }
  return array;

}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  let rest = null;
  //because we're approaching building outward, 
  //create a reverse for loop
  for (let i = array.length - 1; i >= 0; i--) {
    rest = {value: array[i], rest: rest}; //rest is just a key, being assigned to null at 0 it
    //at 2nd iteration, the rest key will be assigned to the value from the first iteration {value: 3, rest: null}
  }
  return rest;
}
// console.log(arrayToList([1, 2, 3]));
/*
should approach by building out from 3,
{
  value: 1,
  rest: {
    value 2,
    rest: {
      value: 3,
      rest: null
    }
  }
}
*/
////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, output = []) {
  //base
  if (list.rest === null) {
    output.push(list.value);
    return output;
  };

  //recursion
  output.push(list.value);

  return listToArray(list.rest, output);
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, list) {
  //create a new list with the element as the value and list as the rest
  return {value: element, rest: list};
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, n) {
  //base
  if (n === 0) {
    return list.value;
  }
  if (list.rest === null) {
    return undefined;
  }
  //recursion
  //decrement n by 1 each time with list.rest as the new list which will eventually reach 0
  return nth(list.rest, n - 1);
}
// //example
// let example = {
//   value: 1,
//   rest: {
//     value: 2,
//     rest: {
//       value: 3,
//       rest: null
//     }
//   }
// }

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
  //determine if x & y are NOT obj aka if its a simple data type
  if (typeof x !== 'object' && typeof y !== 'object') {
    //if it is, strict eq works
    return x === y;
  }
  //determine if x OR y is not an obj
  if (typeof x !== 'object' || typeof y !== 'object') {
    //if it is, return false
    return false;
  }
  //create arrays of each inputs keys
  let xKeys = Object.keys(x);
  let yKeys = Object.keys(y);
  //easy to catch if arrays have diff lengths so deep eqs can't be true
  if (xKeys.length !== yKeys.length) {
    return false;
  }
  //iterate to determine if array keys match and values at keys match
  for (let i = 0; i < xKeys.length; i++) {
    //if ykeys does not incl xkeys i or if the values at the keys are not equal
    if (!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[xKeys[i]])) {
      return false;
    }
  }
  return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
