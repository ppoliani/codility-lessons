const assert = require('assert');

const run = (M, A) => {

  const solution = (M, A) => {
    let total = 0;
    let back = -1;
    const found = [];

    for (let front = 0; front < A.length; front++) {
      if(found[A[front]] > back) {
        back = found[A[front]]
      }

      total += front - back;
      found[A[front]] = front;

      if(total > 1000000000) return 1000000000;
    }

    return total;
  }

  return solution(M, A);
}

assert.equal(run(6, [3, 4, 5, 5, 2]), 9);
assert.equal(run(0, [0, 0, 0, 0]), 4);
