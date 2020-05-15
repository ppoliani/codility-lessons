const assert = require('assert');

const run = (a, b, k) => {
  const solution = (a, b, k) => {
    const minValue = Math.floor((a + k - 1) / k) * k;
    if(minValue > b) return 0;

    return Math.floor((b - minValue) / k) + 1;
  }

  return solution(a, b, k);
}

assert.equal(run(0, 1, 11), 0);
assert.equal(run(6, 11, 2), 3);
assert.equal(run(0, 100, 2), 51);
assert.equal(run(100, 100, 2), 1);
assert.equal(run(11, 345, 17), 20);
assert.equal(run(0, 2000000000, 1), 2000000001);
