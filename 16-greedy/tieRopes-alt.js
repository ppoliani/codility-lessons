const assert = require('assert');

const run = (K, A) => {

  /**
   * Keep a temp len variable that holds the current sum of adjacent ropes; When that value hits K
   * then we increase the counter and reset len.
   */
  const solution = (K, A) => {
    const N = A.length;
    let count = 0;
    let len = 0;

    for (let i = 0; i < N; i++) {
      len += A[i];

      if(len >= K) {
        count += 1;
        len = 0;
      }
    }

    return count;
  }

  return solution(K, A);
}

assert.equal(run(4, [1, 2, 3, 4, 1, 1, 3]), 3);
