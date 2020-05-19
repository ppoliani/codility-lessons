const assert = require('assert');

const run = (A) => {

  /**
   * A dp problem similar to how we would calculate the different ways climbing a ladder.
   * We keep an array that in each index holds the max sum to reach that index using different paths.
   */
  const solution = (A) => {
    const N = A.length;
    const max = [A[0], ...Array(N - 1).fill(Number.MIN_SAFE_INTEGER)];

    for (let i = 0; i < N - 1; i++) {
      for (let j = 1; j <= 6; j++) {
        const pos = j + i;

        if(pos >= N) continue;

        max[pos] = Math.max(max[pos], max[i] + A[pos]);
      }
    }

    return max[N - 1]
  }

  return solution(A);
}

assert.equal(run([1, -2, 0, 9, -1, -2]), 8);
