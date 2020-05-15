const assert = require('assert');

const run = (A) => {

  /**
   * Current the expected sum from 1..n where n = A.length + 1; this equals to (n * (n + 1) // 2)
   * Find the sum of the items in the array. 
   * The answer is the difference
   */
  const solution = (A) => {
    const N = A.length + 1;
    const sum = A.reduce((s, item) => s + item, 0);
    const expectedSum = Math.round(N * (N + 1) / 2)

    return expectedSum - sum;
  }

  return solution(A);
}

assert.equal(run([2, 3, 1, 5]), 4);
