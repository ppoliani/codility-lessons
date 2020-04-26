const assert = require('assert');

const run = (n) => {

  const solution = (n) => {
    let count = 0;
    let i = 1;

    while(i <= n) {
      if(n % i === 0) {
        count += 1;
      }

      i++;
    }

    return count;
  }

  return solution(n);
}

assert.equal(run(24), 8);
assert.equal(run(2), 2);
assert.equal(run(2147483647), 3);
