const assert = require('assert');

const run = (A) => {
  /**
   * Iterate once and set counter 1 to each item we see and store in a Map
   * When the count is already 1 then simply remove it from the Map. 
   * The single element in the Map at the end of the iteration is the answer
   */
  const solution = (A) => {
    const items = {};

    for (let i = 0; i < A.length; i++) {
      if(items[A[i]] === undefined) items[A[i]] = 1;
      else if(items[A[i]] === 1) delete items[A[i]];
    }

    return Number(Object.keys(items)[0]);
  }

  return solution(A);
}

assert.equal(run([9, 3, 9, 3, 9, 7, 9]), 7);
