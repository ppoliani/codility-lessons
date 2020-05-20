const assert = require('assert');

const run = (A, K) => {

  /**
   * Do K times the following:
   *   - iterate through A and swap the item at 0 with the item at j + 1 as long as j + 1 doesn't cross the limit of the array
   */
  const solution = (A, K) => {
    const swap = (A, i, j) => {
      [A[i], A[j]] = [A[j], A[i]]
    }

    const N = A.length;
    for (let i = 0; i < K; i++) {
      for (let j = 0; j < A.length; j++) {
        const index = (j + 1) > N - 1 ? 0 : j + 1;
        swap(A, 0, index);
      }
    }

    return A;
  }

  return solution(A, K);
}

assert.deepEqual(run([3, 8, 9, 7, 6], 3), [9, 7, 6, 3, 8]);
assert.deepEqual(run([0, 0, 0], 1), [0, 0, 0]);
assert.deepEqual(run([1, 2, 3, 4], 4), [1, 2, 3, 4]);
assert.deepEqual(run([], 5), []);
