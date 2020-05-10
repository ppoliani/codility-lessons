const assert = require('assert');

// Naive approach; Brute force approach O(n^2. Score 45%
const run = (A) => {

  const solution = (A) => {
    let min = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < A.length; i++) {
      const item1 = A[i];

      for (let j = 0; j < A.length; j++) {
        const item2 = A[j];
        const absSum = Math.abs(item1 + item2);
        
        if(absSum < min) {
          min = absSum;
        }
      }
    }

    return min;
  }

  return solution(A);
}

assert.equal(run([1, 4, -3]), 1);
assert.equal(run([-8, 4, 5, -10, 3]), 3);
