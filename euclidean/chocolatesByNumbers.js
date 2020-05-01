const assert = require('assert');
const {lcm} = require('../helpers/arithmetic');

const run = (N, M) => {

  const solution = (N, M) => {
    console.log(lcm(N, M))
    return lcm(N, M) / M;
  }

  return solution(N, M);
}

assert.equal(run(10, 4), 5);
assert.equal(run(10, 1), 10);
assert.equal(run(10, 20), 1);
