const assert = require('assert');

const run = (K, M, A) => {

  const solution = (K, M, A) => {
    // check if there is a block which has a some of less than num
    // basically it will check if there are K subarrays with sum bigger than num
    // if not then the first statement is true
    const check = (num, K, A) => {
      let i = 0;
      let sum = 0;

      while(i < A.length) {
        if(A[i] > num) return false;

        sum += A[i];

        if(sum > num) {
          sum = A[i];
          K--;

          if(K === 0) return false;
        }

        i++;
      }

      return true;
    }

    let sum = 0;
    let max = A[0];

    for (let i = 0; i < A.length; i++) {
      sum += A[i];
      max = Math.max(A[i], max)
    }

    let beg = max;
    let end = sum;
    let min = sum;

    while(beg <= end) {
      const mid = Math.floor((beg + end) / 2);

      if(check(mid, K, A)) {
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
