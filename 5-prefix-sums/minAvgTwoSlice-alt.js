const assert = require('assert');

const run = (A) => {

  /**
   * The min average can be searched in slices of size 2 or 3 as we cannot have slices longer than that to produce 
   * lower average that the sub slice of 2 or 3 items. For example, a slice of 4 items cannot have smaller average that it's subslice
   * that contains two items. More specifically, 4 can split into two slices of two items. If the first slice is bigger that then total average
   * then it simply means that the second slice will have a much lower average. In any case, we can't have both slices having higher average than
   * the total slice of 4. Same applies if we have 5 items, in that case we can have two slices of 2 and three items and the same principle applies.
   */
  const solution = (A) => {
    if(A.length === 2) return 0;

    const N = A.length;
    let min = (A[0] + A[1]) / 2 
    let minIndex = 0;

    for (let i = 2; i < N; i++) {
      const avg2 = (A[i] + A[i - 1]) / 2
      const avg3 = (A[i] + A[i - 1] + A[i - 2]) / 3
      
      if(avg2 < min) {
        min = avg2;
        minIndex = i - 1;
      }

      if(avg3 < min) {
        min = avg3;
        minIndex = i - 2;
      }
    }

    return minIndex;
  }

  return solution(A);
}

assert.equal(run([4, 2, 2, 5, 1, 5, 8]), 1);
