const assert = require('assert');

const run = (A) => {

  /**
   * Sort the array of points. By sorting we manage to reduce the number of checks if a 
   * triple is triangle from 3 to a single check. 
   * We don't don't need to check all three A[P] + A[Q] > A[R], A[Q] + A[R] > A[P], A[R] + A[P] > A[Q].
   * We simply can check A[P] + A[Q] > A[R]. Since items are sorted the other two conditions  A[Q] + A[R] > A[P], A[R] + A[P] > A[Q]
   * are already met. Also the fact the we sort doesn't violate the requirement of the task i.e,  A triplet (P, Q, R) is triangular if 0 ≤ P < Q < R < N.
   * That is the initial P, Q, R  indexes might change in the sorted array however that not important based on the triangle checks 
   * i.e. [3, 2, 2] and [2, 2, 3] still meet the triangle requirement although we changed the items when sorting.
   */
  const solution = (A) => {
    const N = A.length;
    const sorted = A.sort((a, b) => a - b);

    for (let i = 0; i < N - 2; i++) {
      if(sorted[i] + sorted[i + 1] > sorted[i + 2]) return 1;
    }

    return 0;
  }

  return solution(A);
}

assert.equal(run([10, 2, 5, 1, 8, 20]), 1);
assert.equal(run([10, 50, 5, 1]), 0);
assert.equal(run([]), 0);
assert.equal(run([1]), 0);
assert.equal(run([1, 2]), 0);
assert.equal(run([3, 2, 2]), 1);
