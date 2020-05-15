const assert = require('assert');

const run = (A, B, K) => {

  /**
   * The result is basically Math.floor((B - A) / K) + 1 however instead of using A we should find the min value 
   * that divides K. The min value can be either A or the closest next that divided K is A doesn't.
   */
  const solution = (A, B, K) => {
    const minValue = Math.floor((A + K - 1) / K) * K;
    if(minValue > B) return 0;

    return Math.floor((B - minValue) / K) + 1
  }

  return solution(A, B, K);
}

assert.equal(run(6, 11, 2), 3);
assert.equal(run(0, 6, 1), 7);
assert.equal(run(0, 6, 3), 3);
