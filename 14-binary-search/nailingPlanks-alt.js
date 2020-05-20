const assert = require('assert');

const run = (A, B, C) => {

  /**
   * We start from the fact that the maximum number of nails would be M and the minimum 0 which suggests that we 
   * cannot nail all planks. So all we have to do is try to run a binary search and locate the minimum number. One every iteration
   * we need to check if mid nails can cover all planks. The naive approach of running that square would be to have a nested loop and check
   * if the first mid nails cover the entire list of planks. The is a more efficient approach. This is essentially a range query. We want to find out
   * if between two numbers there is a number from some other list. This is the use case for using prefix sum which will allow range queries in O(N).
   */
  const solution = (A, B, C) => {
    const N = A.length;
    const M = C.length;

    const checkIfCanNailAll = mid => {
      const prefixSum = Array(2 * M + 1).fill(0);

      for (let i = 0; i < mid; i++) {
        prefixSum[C[i]] = 1;
      }

      for (let i = 1; i <= 2 * M; i++) {
        prefixSum[i] += prefixSum[i - 1];
      }

      for (let i = 0; i < N; i++) {
        if(prefixSum[B[i]] === prefixSum[A[i] - 1]) return false;
      }

      return true;
    }

    let beg = 0;
    let end = M;
    let min = -1;

    while(beg <= end) {
      const mid = Math.floor((beg + end) / 2);

      if(checkIfCanNailAll(mid)) {
        min = mid;
        end = mid - 1;
      }
      else {
        beg = mid + 1;
      }
    }

    return min === 0 ? -1 : min;
  }

  return solution(A, B, C);
}

assert.equal(run([1, 4], [4, 6], [4, 5, 6]), 1);
assert.equal(run([2], [2], [1]), -1);
assert.equal(run([1, 4, 5, 8], [4, 5, 9, 10], [4, 6, 7, 10, 2]), 4);
