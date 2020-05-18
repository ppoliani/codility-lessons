const assert = require('assert');

const run = (n) => {

  const solution = (n) => {
    let count = 0;
    let i = 1;

    while(i * i <= n) {
      if(n % i === 0) {
        if(i * i === n) count += 1
        else count += 2;
      }

      i++;
    }

    return count;
  }

  return solution(n);
}

assert.equal(run(24), 8);
assert.equal(run(1), 1);
assert.equal(run(2), 2);
assert.equal(run(41), 2);
assert.equal(run(2147483647), 2);
