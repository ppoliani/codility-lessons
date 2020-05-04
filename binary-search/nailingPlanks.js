const assert = require('assert');

const run = (A, B, C) => {

  const solution = (A, B, C) => {
    const check = nailCount => {
      if(!nailCount) return false;
      let covered = 0;

      for (let i = 0; i < nailCount; i++) {        
        for (let j = 0; j < A.length; j++) {
          if(C[i] >= A[j] && C[i] <= B[j]) covered += 1;
        }
      }
      
      return covered >= A.length;
    }

    let min = -1;
    let beg = 0;
    let end = C.length;

    while(beg <= end) {
      const mid = Math.floor((beg + end) / 2);

      if(check(mid, A, B, C)) {
        min = mid + 1;
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
