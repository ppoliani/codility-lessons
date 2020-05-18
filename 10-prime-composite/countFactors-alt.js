const assert = require('assert');

const run = (N) => {

  /**
   * Use the divisors algorithm to find all factors
   */
  const solution = (N) => {
    let result = 0;
    let i = 1;

    while(i * i < N) {
      if(N % i === 0) result += 2;
      i++;
    }

    if(i * i === N) result += 1;

    return result;
  }

  return solution(N);
}

assert.equal(run(24), 8);
assert.equal(run(1), 1);
assert.equal(run(2), 2);
