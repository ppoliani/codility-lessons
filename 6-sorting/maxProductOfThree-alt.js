const assert = require('assert');

const run = (A) => {

  /**
   * Sort in ascending order. The triple with the highest product can either be the product of the largest 3 numbers
   * or it can be the product of the first two multiplied by the largest number. The reason for the latter is that the first two 
   * can be two big negative numbers which multiplied will give a big positive number.
   */
  const solution = (A) => {
    const N = A.length;
    const sorted = A.sort((a, b) => a - b);

    const val1 = sorted[N - 1] * sorted[N - 2] * sorted[N - 3];
    const val2 = sorted[0] * sorted[1] * sorted[N - 1];

    return Math.max(val1, val2);
  }

  return solution(A);
}

assert.equal(run([-3, 1, 2, -2, 5, 6]), 60);
assert.equal(run([-5, 5, -5, 4]), 125);
