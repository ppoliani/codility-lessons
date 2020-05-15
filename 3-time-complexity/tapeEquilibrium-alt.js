const assert = require('assert');

const run = (A) => {

  /**
   * Iterate thought the array once and keep the left sum until index i and the right sum.
   * The right sum is essentially total - left sum. We calculate the total sum in the beginning
   * On each step we try to find the min diff of left and right sums
   */
  const solution = (A) => {    
    const N = A.length;
    const total = A.reduce((s, item) => s + item, 0);
    let lSum = 0;
    let rSum = 0
    let minDiff = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < N - 1; i++) {
      lSum += A[i];
      rSum = total - lSum;

      minDiff = Math.min(minDiff, Math.abs(lSum - rSum));
    }

    return minDiff;
  }

  return solution(A);
}


assert.equal(run([-1000, 1000]), 2000);
assert.equal(run([5, 3, -2, -1, 10]), 1);
assert.equal(run([3, 1, 2, 4, 3]), 1);
