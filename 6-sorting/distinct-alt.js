const assert = require('assert');

const run = (A) => {

  /**
   * Order all items and iterate once checking the consecutive values
   */
  const solution = (A) => {
    const N = A.length;
    const sorted = A.sort((a, b) => a - b);
    let count = Math.min(N, 1);
    
    for (let i = 1; i < sorted.length; i++) {
      if(sorted[i] !== sorted[i - 1]) count += 1;
    }

    return count;
  }

  return solution(A);
}

assert.equal(run([2, 1, 1, 2, 3, 1]), 3);
