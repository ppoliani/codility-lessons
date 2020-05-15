const assert = require('assert');
const memoize = require('../helpers/memoize');

const run = (arr) => {
  const solution = (arr) => {
    let numOfZeros = 0;
    let numOfOnes = 0;
    let missedOnes = 0;
    let result = 0;
    let i = 0;

    while(i < arr.length) {
      if(arr[i] === 0) {
        numOfZeros += 1;
        missedOnes += numOfOnes;
      }
      else {
        numOfOnes += 1;
      }

      result = (numOfZeros * numOfOnes) - missedOnes;

      if(result > 1000000000) return -1;

      i++;
    }

    return result;
  }

  return solution(arr);
}

assert.equal(run([0, 1, 0, 1, 1]), 5);
