const assert = require('assert');

const run = (A) => {

  const solution = (A) => {
    const N = A.length;
    const max = [A[0], ...Array(N - 1).fill(Number.MIN_SAFE_INTEGER)]

    for (let pos = 0; pos < N - 1; pos++) {
      for (let i = 1; i <= 6; i++) {
        const jumpPos = pos + i;
        
        if(jumpPos >= N) continue;

        max[jumpPos] = Math.max(max[jumpPos], A[pos + i] + max[pos])
      }
    }

    return max[N - 1];
  }

  return solution(A);
}

assert.equal(run([1, -2, 0, 9, -1, -2]), 8);
