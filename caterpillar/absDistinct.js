const assert = require('assert');

const run = (A) => {

  const solution = (A) => {
    const values = {};
    let count = 0;

    for (let i = 0; i < A.length; i++) {
      if(!values[Math.abs(A[i])]) {
        count += 1;
        values[Math.abs(A[i])] = true
      }
    }

    return count;
  }

  return solution(A);
}

assert.equal(run([-5, -3, -1, 0, 3, 6]), 5);
assert.equal(run([]), 0);
assert.equal(run([-1, 1]), 1);
