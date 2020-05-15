const assert = require('assert');

const run = (X, A) => {

  /**
   * We know that we need to get to target X going through all X-1..1
   * First we get the sum of seq until X i.e. n * (n + 1) // 2
   * The we store the count of each leaf we find in a separate array.
   * We also keep a sum until the point we're interested not including leaves at positions we already counted
   * If sum is equal to the totalUntilTarget we return the index i which is the earliest time.
   */
  const solution = (X, A) => {
    const N = A.length;
    const totalUntilTarget = Math.ceil(X * (X + 1) / 2);
    const count = Array(N - 1).fill(0);
    let sum = 0;

    for (let i = 0; i < N; i++) {
      if(count[A[i]] > 0) continue;

      count[A[i]] += 1;
      sum += A[i];

      if(sum >= totalUntilTarget) return i;
    }

    return -1;
  }

  return solution(X, A);
}

assert.equal(run(5, [1, 3, 1, 4, 2, 3, 5, 4]), 6);
assert.equal(run(5, [1, 3, 1, 4, 2, 3, 3, 4]), -1);
assert.equal(run(3, [3]), 0);
