const assert = require('assert');

const run = (A, B) => {

  const solution = (A, B) => {
    if(A.length === 0) return 0;
    if(A.length === 1) return 1;
    
    let r = A.length - 1;
    let l = r - 1;
    let count = 0;
    const segs = {};

    while(l >= 0) {
      if(B[l] < A[r]) {
        if(!segs[l]) count++;
        if(!segs[r]) count++;

        r = l;
        l = r - 1;

        segs[l] = segs[r] = true;
      }

      l--;
    }

    return count;
  }

  return solution(A, B);
}
assert.equal(run([1, 3], [4, 5]), 0);
assert.equal(run([1, 3, 7, 9, 9], [5, 6, 8, 9, 10]), 3);
assert.equal(run([1, 3], [2, 5]), 2);
assert.equal(run([], []), 0);
assert.equal(run([1], [2]), 1);
assert.equal(run([1, 1], [1, 1]), 0);
assert.equal(run([1, 2], [1, 2]), 2);
