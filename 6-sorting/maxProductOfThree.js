const assert = require('assert');
const {sortDesc} = require('../helpers/sort');

const run = (arr) => {

  const solution = (arr) => {
    const sorted = sortDesc(arr);

    const prod1 = sorted[0] * sorted[1] * sorted[2];
    const prod2 = sorted[0] * sorted[arr.length - 2] * sorted[arr.length - 1];

    return Math.max(prod1, prod2);
  }

  return solution(arr);
}

assert.equal(run([-3, 1, 2, -2, 5, 6]), 60);
assert.equal(run([-5, 5, -5, 4]), 125);
assert.equal(run([-5, 4, -5, -5]), 100);

