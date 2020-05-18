const assert = require('assert');
const {divisors} = require('../helpers/divisors');

const run = (arr) => {

  const solution = (arr) => {
    const length = arr.length;
    let result = [];
    let items = {};

    for (let i = 0; i < length; i++) {
      items[arr[i]] = (items[arr[i]] || 0) + 1
    }

    for (let i = 0; i < length; i++) {
      const n = arr[i];
      let numOfDivisors = 0;
      let j = 1;

      while(j * j < n) {
        if(n % j === 0) {
          numOfDivisors += items[j] || 0;
          numOfDivisors += items[n / j] || 0;
        }

        j++;
      }

      if(j * j === n) numOfDivisors += (items[j] || 0);

      result.push(length - numOfDivisors);
    }

    return result;
  }

  return solution(arr);
}

// assert.deepEqual(run([3, 1, 2, 3, 6]), [2, 4, 3, 2, 0]);
// assert.deepEqual(run([2]), [0]);
assert.deepEqual(run([3, 4]), [0]);
