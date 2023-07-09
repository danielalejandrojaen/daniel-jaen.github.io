
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(size) {
//loop through size times 
  for (let i = 0; i < size; i++) {
    //log '#' repeated i + 1 times
    console.log('#'.repeat(i + 1));
  }

}
// ////////////////////////////////////////////////////////////////////////////////
// // fizzBuzz ////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  // loop through 100 times starting at 1
  for (let i = 1; i < 16; i++) {
    //if i divided by 3 and 5 has no remainder
    if (i % 3 === 0 && i % 5 === 0) {
      //log fizzbuzz
      console.log('fizzbuzz')
      //if i divided by 3 has no remainder
    } else if (i % 3 === 0) {
      //log fizz
      console.log('fizz')
      //if i divided by 5 has no remainder
    } else if (i % 5 === 0) {
      //log buzz
      console.log('buzz')
      //if none of the above are true
    } else {
      //log i
      console.log(i);
    }
    
  }  
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(size) { 
  
  //create output array
  let output = [];
  //create string converted variable
  let strConverted;
  //create hash variable
  let hash = '#';
  //create space variable
  let space = ' ';
  //loop through lines in outer loop 8 times
  for (let lines = 1; lines <= size; lines++) {
    //second loop for characters up to the size param
    for (let chars = 1; chars <= size; chars++) {
      //if the line + character result div by 2 has no remainder
      if ((lines + chars) % 2 === 0) {
        //output . push space 
        output.push(space);
      } else {
        //output . push hash
        output.push(hash);
      }
      //if chars === size ( ie if chars is at the end of the size param)
      if (chars === size) {
        //push a new line
        output.push('\n');
      }
    }
  }
  //log the output joined  together
  console.log(output.join(''));
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
