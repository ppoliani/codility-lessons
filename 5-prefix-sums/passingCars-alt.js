const assert = require('assert');

const run = (A) => {

  /**
   * Typical zero sum approach (along with counting elements principles).
   *  - Iterate through the array and store on each index i the number of west cards seen so far
   *  - Iterate a second time a perform range queries 
   * More specifically, the second time we iterate, when we encounter an east car we make a range query fron index i to N - 1 
   * and check how many west cars there exist.
   */
  const solution = (A) => {
    if(A.length === 1) return 0;
    const N = A.length;
    const countWestCars = Array(N - 1).fill(0);
    let count = 0;

    for (let i = 1; i < N; i++) {
      if(A[i] === 1) countWestCars[i] = countWestCars[i - 1] + A[i];
      else countWestCars[i] = countWestCars[i - 1];
    }

    for (let i = 0; i < N; i++) {
      if(A[i] === 0) {
        count += countWestCars[N - 1] - countWestCars[i];
      }

      if(count > 1000000000) return -1;
    }

    return count;
  }

  return solution(A);
}

assert.equal(run([0, 1, 0, 1, 1]), 5);
assert.equal(run([0]), 0);
assert.equal(run([1]), 0);
assert.equal(run([0, 1]), 1)
assert.equal(run([1, 1]), 0);
assert.equal(run([0, 0]), 0);
assert.equal(run([1, 0, 1, 0, 1, 1]), 5);
