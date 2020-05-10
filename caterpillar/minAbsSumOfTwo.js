const assert = require('assert');
const {} = require('../helpers/sort')

// Naive approach; Brute force approach O(n^2). Score 45% (accurate but poor performance)
// Greedy algorithm; score 72% i.e. sort and compare the first with the last item and increase back when new min found
const run = (A) => {

  const solution = (A) => {
    A = A.sort((a, b) => a - b);
    let min = Math.abs(A[0] + A[0]);
  
    let l = 0;
    let r = A.length - 1;

    while(l <= r) {
      let lval = Math.abs(A[l] * 2);
      let rval = Math.abs(A[r] * 2);
      let both = Math.abs(A[l] + A[r]);

      if(lval < min) {
        min = lval;
      }
      if(rval < min) {
        min = rval;
      }
      if(both < min) {
        min = both;
      }

       //if A[l] >=0, we have the smallest number already.
      if (A[l] >= 0){
        return min;
      }

      if(lval < rval) {
        r -= 1;
      }
      else if(lval > rval) {
        l += 1;
      }
      else {
        l += 1;
        r -= 1;
      }
    }

    return min;
  }

  return solution(A);
}

assert.equal(run([1, 4, -3]), 1);
assert.equal(run([-8, 4, 5, -10, 3]), 3);
assert.equal(run([0]), 0);
assert.equal(run([-10, -3, -1, 0, 2, 4, 5]), 0);

