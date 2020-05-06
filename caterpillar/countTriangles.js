const assert = require('assert');

const run = (A) => {
  const solution = (A) => {
    A = A.sort((a, b) => a - b);
    let count = 0;

    for (let p = 0; p <= A.length - 3; p++) {
      let q = p + 1;
      let r = p + 2;
      
      while(r < A.length) {
        if(A[p] + A[q] > A[r]) {
          count += r - q;
          r++;
        }
        else {
          q++;

          if(r === q) r++;
        }
      }
    }

    return count;
  }

  return solution(A);
}

assert.equal(run([10, 2, 5, 1, 8, 12]), 4);
