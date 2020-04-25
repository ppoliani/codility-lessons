const assert = require('assert');

const run = (arr) => {

  const solution = (arr) => {
    let untilIndex = [];
    let fromIndex = [];
    let max1 = Number.MIN_SAFE_INTEGER;
    let max2 = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
      untilIndex[i] = Math.max((untilIndex[i-1] || 0) + arr[i], arr[i])
      max1 = Math.max(max1, untilIndex[i]);
    }

    for (let i = arr.length - 1; i > 0; i--) {
      fromIndex[i] = Math.max((fromIndex[i+1] || 0) + arr[i], arr[i])
      max2 = Math.max(max2, fromIndex[i]);
    }

    return Math.max(max1, max2);
  }

  return solution(arr);
}

assert.equal(run([3, 2, -6, 4, 0]), 5);
assert.equal(run([1, 2, 10, 10, 3, 3]), 29);
assert.equal(run([1, 2, -10, 10, 1, 2]), 13);
assert.equal(run([1, 2]), 3);
assert.equal(run([-1, -2, 1]), 1);
assert.equal(run([-1, -2, -5]), -1);
assert.equal(run([-2, 1, -2]), 1);
