const assert = require('assert');

const run = (a, b, k) => {
  const solution = (a, b, k) => {
    if(k === 1) return (b - a) + 1;

    let i = a;
    let count = 0;

    while(i <= b && i <= 2000000000) {
      if(i % k === 0) {
        count += 1;
        i += k;
      }
      else {
        i++;
      }

    }

    return count;
  }

  return solution(a, b, k);
}

assert.equal(run(6, 11, 2), 3);
assert.equal(run(0, 100, 2), 51);
assert.equal(run(100, 100, 2), 1);
assert.equal(run(11, 345, 17), 20);
assert.equal(run(0, 2000000000, 1), 2000000001);
