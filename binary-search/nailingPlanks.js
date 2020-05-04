const assert = require('assert');

const run = (A, B, C) => {

  const solution = (A, B, C) => {
    const check = (nail, A, B) => {
      if(!nail) return false;
      let i = 0;
      let n = A.length;

      while(n > 0) {
        if(nail < A[i] && nail > B[i]) return false;
        n--;
      }

      return true;
    }

    let min = -1;
    let beg = 0;
    let end = C.length;

    while(beg <= end) {
      const mid = Math.floor((beg + end) / 2);

      if(check(C[mid], A, B)) {
        min = mid;
        end = mid - 1; 
      }
      else {
        beg = mid + 1;
      }
    }

    return min;
  }

  return solution(A, B, C);
}

assert.equal(run([1, 4, 5, 8], [4, 5, 9, 10], [4, 6, 7, 10, 2]), 4);
// assert.equal(run([1, 4], [4, 5], [8]), -1);
// assert.equal(run([1, 4], [4, 5], [4]), 1);
