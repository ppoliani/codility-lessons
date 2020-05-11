const assert = require('assert');
const {frog, frogRecursive} = require('../helpers/dp');

const run = (A) => {

  const solution = (A) => {
    console.log(frog([1, 2], 5));
    console.log(frogRecursive([1, 2], 5));
  }

  return solution(A);
}

assert.equal(run([]), true);
