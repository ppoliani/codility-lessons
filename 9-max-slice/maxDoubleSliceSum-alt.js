const assert = require('assert');

const run = (A) => {

  /**
   * Keep two arrays that store the maximum ending (i.e. sum until index) at each index for the left and right slice.
   * Then iterate and find the max of l[i - 1] + r[r - 1] for each index.
   */
  const solution = (A) => {
    if(A.length <= 3) return 0;

    const N = A.length;
    const lMaxEnding = Array(N).fill(0);
    const rMaxEnding = Array(N).fill(0);

    for (let i = 1; i < N - 1; i++) {
      lMaxEnding[i] = Math.max(lMaxEnding[i - 1] + A[i], 0)
    }

    for (let i = N - 2; i > 0; i--) {
      rMaxEnding[i] = Math.max(rMaxEnding[i + 1] + A[i], 0)
    }

    let max = 0;

    for (let i = 1; i < N - 1; i++) {
      max = Math.max(lMaxEnding[i - 1] + rMaxEnding[i + 1], max);
    }

    return max;
  }

  return solution(A);
}

assert.equal(run([3, 2, 6, -1, 4, 5, -1, 2]), 17);
