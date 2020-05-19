const assert = require('assert');

const run = (A, B) => {

  const solution = (A, B) => {
    const L = Math.max(...A);
    const fibSeq = [0, 1];

    for (let i = 2; i <= L + 2; i++) {
      // 1 << 30 is same as Math.pow(2, 30)
      // modulo Math.pow(2, 30) to avoid overflow
      fibSeq[i] = (fibSeq[i - 1] + fibSeq[i - 2]) % (1 << 30);
    }
    const result = [];

    for (let i = 0; i < A.length; i++) {
      result[i] = fibSeq[A[i] + 1] % (1 << B[i])
     }

    return result;
  }

  return solution(A, B);
}

// assert.deepEqual(run([1], [1]), [1]);
// assert.deepEqual(run([4, 4, 5, 5, 1], [3, 2, 4, 3, 1]), [5, 1, 8, 0, 1]);
assert.deepEqual(run([100], [1]), [1]);
