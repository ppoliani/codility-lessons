const assert = require('assert');

const run = (N, A) => {

  /**
   * Create an N length array that store the counters. When an increase operation is met we simply increase the counter.
   * When max counter encountered we don't have to iterate over the entire array and store the max value.
   * We simply store the index and the max value at point and we continue. In each of the next steps we gradually set the max value each time we increment
   * Finally we iterate through the array to maximize the remaining items that we didn't touch since the last maximize op
   */
  const solution = (N, A) => {
    const isIncrease = val => val <= N;
    const result = Array(N).fill(0);
    let maxCounterVal = Number.MIN_SAFE_INTEGER;
    let maxOpIndex = Number.MAX_SAFE_INTEGER; 
    let maxOpValue = 0;

    for (let i = 0; i < A.length; i++) {
      if(isIncrease(A[i])) {
        if(i > maxOpIndex) result[A[i] - 1] = Math.max(result[A[i] - 1], maxOpValue) + 1;
        else result[A[i] - 1] += 1;

        maxCounterVal = Math.max(maxCounterVal, result[A[i] - 1]);
      }
      else {
        maxOpIndex = i;
        maxOpValue = maxCounterVal;
      }
    }

    for (let i = 0; i < result.length; i++) {
      if(result[i] < maxOpValue) {
        result[i] = maxOpValue;
      }
    }

    return result;
  }

  return solution(N, A);
}

assert.deepEqual(run(5, [3, 4, 4, 6, 1, 4, 4]), [3, 2, 2, 4, 2]);
assert.deepEqual(run(1, [1]), [1]);
assert.deepEqual(run(1, [0]), [0]);
