const assert = require('assert');
const {divisors} = require('../helpers/divisors');

const run = (arr) => {

  const solution = (arr) => {
    const length = arr.length;
    let result = [];

    const isDivisor = (x, n) => n % x === 0;

    for (let i = 0; i < length; i++) {
      const elem = arr[i];

      let nonDivisors = 0;
      for (let j = 0; j < arr.length; j++) {
        if(j !== i && !isDivisor(arr[j], elem)) {
          nonDivisors += 1;
        }
      }

      result.push(nonDivisors);
    }

    return result;
  }

  return solution(arr);
}

assert.deepEqual(run([3, 1, 2, 3, 6]), [2, 4, 3, 2, 0]);
