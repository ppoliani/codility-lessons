const assert = require('assert');

const run = (arr) => {

  const solution = (arr) => {
    const length = arr.length - 1;
    const a1 = [];
    const a2 = [];

    for(let i = 1; i < length; i++) {
      a1[i] = Math.max((a1[i-1] || 0) + arr[i], 0);
    }

    for(let i = length - 1; i > 0; i--) {
      a2[i] = Math.max((a2[i+1] || 0) + arr[i], 0);
    }


  console.log(a1)
  console.log(a2)

    let max = 0;

    for(let i = 1; i < length; i++) {
      max = Math.max((a1[i-1] || 0) + (a2[i+1] || 0), max);
    }

    return max;
  }

  return solution(arr);
}

assert.equal(run([3, 2, 6, -1, 4, 5, -1, 2]), 17);
assert.equal(run([5, 5, 5]), 0);
assert.equal(run([5, 17, 0, 3]), 17);
