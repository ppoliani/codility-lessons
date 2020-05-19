const assert = require('assert');

const run = (A, B) => {

  const solution = (A, B) => {
    if (A.length <= 1) return A.length;
    
    let count = 1;
    let prevEnd = B[0];
    
    for (let curr = 1; curr < A.length; curr++) {
      if(A[curr] > prevEnd) {
        count++;
        prevEnd = B[curr];
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
