const assert = require('assert');

const run = (A, B) => {

  /**
   * We know that segments are sorted by their end point.
   * So we can use a greedy approach anc start checking that that the start of a segment is greater
   * than the end of the previous one.
   */
  const solution = (A, B) => {
    if(A.length <= 1) return A.length;

    const N = A.length;
    let count = 1;
    let prevEnd = B[0];

    for (let i = 1; i < N; i++) {
      if(A[i] > prevEnd) {
        count += 1;
        prevEnd = B[i];
      }
    }

    return count;
  }

  return solution(A, B);
}

assert.equal(run([1, 3], [4, 5]), 1);
assert.equal(run([1, 3, 7, 9, 9], [5, 6, 8, 9, 10]), 3);
assert.equal(run([0, 2, 100], [0, 50, 1000]), 3)
assert.equal(run([1, 3], [2, 5]), 2);
assert.equal(run([], []), 0);
assert.equal(run([1], [2]), 1);
assert.equal(run([1, 2], [1, 2]), 2);
