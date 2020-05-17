const assert = require('assert');

const run = (A) => {

  /**
   * The profit between day 1 and day 3 can be considered as profit between 
   * days 1, 2 plus profit between days 2 and 3. We can thus apply the max slice algorithm
   */
  const solution = (A) => {
    const N = A.length;
    let maxEnding = 0
    let maxSlice = 0;

    for (let i = 1; i < N; i++) {
      maxEnding = Math.max(maxEnding + A[i] - A[i - 1], 0);
      maxSlice = Math.max(maxSlice, maxEnding)
    }

    return maxSlice;
  }

  return solution(A);
}

assert.equal(run([23171, 21011, 21123, 21366, 21013, 21367]), 356);
assert.equal(run([10, 20, 30 , 40]), 30);
