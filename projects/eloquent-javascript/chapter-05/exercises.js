// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(arr) {
  //create var to hold the flattened arr
  let flattened = [];
  //loop through the arr 
  for (let i = 0; i < arr.length; i++) {
    //if the element is an array
    if (Array.isArray(arr[i])) {
      //loop through the array
      for (let j = 0; j < arr[i].length; j++) {
        //push the element to the flattened arr
        flattened.push(arr[i][j]);
      }
    } else {
      //push the element to the flattened arr
      flattened.push(arr[i]);
    }
  }
  //return the flattened arr
  return flattened;

}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//takes an array, a test func, an update func, and a body func
function loop(array, test, update, body) {
  //loop through the array using the test func to determine when to stop and the update func to update the value
  for (let value = array; test(value); value = update(value)) {
    //invoke the body func on the value
    body(value);
  }

}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(values, test) {
  //loop through the values arr
  for (let i = 0; i < values.length; i++) {
    //if the test func input returns false
    if (!test(values[i])) {
      //return false
      return false;
    }
  }
  //return true
  return true;

}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(text) {
  //create a var obj to hold the count of each direction
  let count = {
    ltr: 0,
    rtl: 0,
    ttb: 0
  };
  //loop through the text
  for (let i = 0; i < text.length; i++) {
    //if the char code is greater than 127 at the index
    if (text.charCodeAt(i) > 127) {
      //add to the rtl count
      count.rtl++;
      //else if the charcode at the current index is 10
    } else if (text.charCodeAt(i) === 10) {
      //add to the ttb count
      count.ttb++;
    } else {
      //add to the ltr count
      count.ltr++;
    }
  }
  //if the ltr count > rtl count
  if (count.ltr > count.rtl) {
    //return ltr
    return 'ltr';
  } else if (count.rtl > count.ltr) {
    //return rtl
    return 'rtl';
  } else {
    //return ttb
    return 'ttb';
  }
  
  
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
