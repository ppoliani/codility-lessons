const assert = require('assert');
const {dynamicCoinChanging} = require('../helpers/dp');

const run = (A) => {

  const solution = (A) => {
    console.table(dynamicCoinChanging([1, 3, 4], 6))
  }

  return solution(A);
}

assert.equal(run([]), true);
