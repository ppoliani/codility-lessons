const assert = require('assert');

const run = (A) => {
  
  const solution = (A) => {
    A = A.sort((a, b) => a - b);
    if(A.length === 0) return 0;

    const getOptions = (a, b) => {
      return [
        Math.abs(a * -1 + b * -1),
        Math.abs(a * -1 + b * 1),
        Math.abs(a * 1 + b * -1),
        Math.abs(a * 1 + b * 1)
      ];
  }

    const recur = (arr, n) => {
      // if(arr.length === 1) {
      //   console.log(`${Math.min(...getOptions(0, A[0]))}`)
      //   return Math.min(...getOptions(0, A[0]));
      // }

      if(n === 0) {
        return Math.min(...getOptions(0, A[0]));
      }

      if(n === 1) {
        const min = Math.min(...getOptions(A[0], A[1]));
        arr.splice(0, 1)
        A[0] = min;

        return min;
      }

      const lMin = recur(arr, n - 1);
      const rMin = recur(arr, n - 2);

      console.log(`lMin ${lMin}`)
      console.log(`rMin ${rMin}`)
      console.log(`...getOptions(lMin, rMin) ${getOptions(lMin, rMin)}`)

      return Math.min(lMin, rMin);
    }

    return recur(A, A.length);
  }

  return solution(A);
}

assert.equal(run([2, 2, 1]), 1);
assert.equal(run([1, 5, 2, -2]), 0);
assert.equal(run([1]), 1);
assert.equal(run([]), 0);
