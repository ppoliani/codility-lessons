const assert = require('assert');

const run = (A) => {

  /**
   * Similar to max slice problem but we use  Math.max(maxEnding + A[i], A[i]); 
   * instead of  Math.max(maxEnding + A[i], 0);
   */
  const solution = (A) => {
    const N = A.length;
    let maxEnding = A[0];
    let maxSlice = maxEnding;

    for (let i = 1; i < N; i++) {
      maxEnding = Math.max(maxEnding + A[i], A[i]);
      maxSlice = Math.max(maxSlice, maxEnding);
    }

    return maxSlice;
  }

  return solution(A);
}

assert.equal(run([3, 2, -6, 4, 0]), 5);
