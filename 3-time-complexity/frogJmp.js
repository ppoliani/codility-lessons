const assert = require('assert');

const run = (X, Y, D) => {

  /**
   * The result is Ceil((Target - Start) / distance)
   */
  const solution = (X, Y, D) => {
    return Math.ceil((Y - X) / D);
  }

  return solution(X, Y, D);
}

assert.equal(run(10, 85, 30), 3);
assert.equal(run(1, 5, 2), 2);
