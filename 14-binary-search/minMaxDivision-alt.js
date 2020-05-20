const assert = require('assert');

const run = (K, M, A) => {

  /**
   * We can say that the smallest possible sum can be a sum of one item. That large sum of all slices
   * can not be any smaller than the largest number the array because even if the other slices have smaller sum the total sum
   * will be the one of the largest slice which will be the slice with the largest number. Essentially, the smallest large sum is 
   * he one that has the largest number of the array. Consequently, the largest possible sum is the one that has all items i.e. the sum of the entire array.
   * Knowing the two edges we can run a binary search algorithm to find the smallest large sum.
   * The way we run the binary search is as follows. We need start with a candidate answer being the mid of the above the two edges.
   * We then check if there are no more that K slices that exceed the candidate. This means that there might be a slice that has a smaller sum than
   * the candidate so we keep that candidate as the min value (so far) and try to check again decreasing the end edge of the search range setting it to mid - 1.
   * Otherwise we know that there candidate cannot be the smallest large sum so we need to search in the right side of the mid i.e. [mid+1, end]
   */
  const solution = (K, M, A) => {
    const N = A.length;
    let sum = 0;
    let max = A[0];

    for (let i = 0; i < N; i++) {
      sum += A[i];
      max = Math.max(max, A[i]);
    }

    const check = candidate => {
      let sum = 0;
      let sliceGT = 0;

      for (let i = 0; i < N; i++) {
        if(A[i] > candidate) return false;

        sum += A[i];
        
        if(sum > candidate) {
          sliceGT += 1;
          sum = A[i];

          if(sliceGT === K) return false;
        } 
      }

      return true;
    }

    let beg = max;
    let end = sum;
    let min = sum;

    while(beg <= end) {
      const mid = Math.floor((beg + end) / 2);

      if(check(mid)) {
        min = mid;
        end = mid - 1;
      }
      else {
        beg = mid + 1;
      }
    }

    return min;
  }

  return solution(K, M, A);
}

assert.equal(run(3, 5, [2, 1, 5, 1, 2, 2, 2]), 6);
