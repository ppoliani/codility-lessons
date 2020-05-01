const assert = require('assert');

const run = (N, M) => {

  const solution = (N, M) => {
    const next = x => (x + M) % N;
    const noConsumed = x => !consumed[x];

    const consumed = {};
    let nextChocolate = 0;
    let count = 0;

    while(noConsumed(nextChocolate)) {
      consumed[nextChocolate] = true;
      count += 1;
      nextChocolate = next(nextChocolate);
    }

    return count;
  }

  return solution(N, M);
}

assert.equal(run(10, 4), 5);
assert.equal(run(10, 1), 10);
assert.equal(run(10, 20), 1);
