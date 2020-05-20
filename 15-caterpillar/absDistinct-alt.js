const assert = require('assert');

const run = (A) => {

  const solution = (A) => {
    const N = A.length;
    const distinctValues = {};
    let count = 0;

    for (let i = 0; i < N; i++) {
      const absValue = Math.abs(A[i]);
      if(distinctValues[absValue]) continue;
      distinctValues[absValue] = true;
      count += 1;
    }

    return count
  }

  return solution(A);
}

assert.equal(run([-5, -3, -1, 0, 3, 6]), 5);
assert.equal(run([-5]), 1);
assert.equal(run([-5, 5]), 1);
