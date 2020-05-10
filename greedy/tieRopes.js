const assert = require('assert');

const run = (K, A) => {

  const solution = (K, A) => {
    let count = 0;
    let i = 0;
    let newLen = 0;

    while(i < A.length) {
      newLen += A[i];

      if(newLen >= K) {
        newLen = 0;
        count++;
      }

      i++;
    }

    return count;
  }

  return solution(K, A);
}

assert.equal(run(4, [1, 2, 3, 4, 1, 1, 3]), 3);
