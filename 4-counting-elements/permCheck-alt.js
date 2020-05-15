const assert = require('assert');

const run = (A) => {

  /**
   * Find the max value in the array. If the length is smaller than the max then there is no way it can be a permutation.
   * Create the count array and finally iterate to check if there is any item with zero value which indicates absence
   */
  const solution = (A) => {
    const N = A.length;
    const max = Math.max(...A);

    if(N < max) return 0;

    const count = Array(N).fill(0);

    for (let i = 0; i < A.length; i++) {
      count[A[i] - 1] = 1;
    }

    for (let i = 0; i < count.length; i++) {
      if(count[i] === 0) return 0;
    }

    return 1;
  }

  return solution(A);
}

assert.equal(run([1, 1]), 0);
assert.equal(run([1, 1, 1]), 0);
assert.equal(run([4, 1, 3, 2]), 1);
assert.equal(run([4, 1, 3]), 0);
assert.equal(run([1]), 1);
assert.equal(run([2]), 0);
