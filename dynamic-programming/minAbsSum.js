const assert = require('assert');
const {dynamicCoinChangingOptimized} = require('../helpers/dp');

const run = (A) => {

  const solution = (A) => {
    console.table(dynamicCoinChangingOptimized([1, 3, 4], 6))
  }

  return solution(A);
}

assert.equal(run([]), true);
