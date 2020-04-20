const assert = require('assert');
const {sortAsc} = require('../helpers/sort');

const run = (arr) => {

  const solution = (arr) => {
    if(arr.length === 0) return 0;

    const sorted = sortAsc(arr);

    let i = 0;
    let prev = -1;
    
    while(i < sorted.length) {
      const curr = sorted[i];

      if(sorted[i] !== i + 1) return 0
      if(curr === prev) return 0;
      if(curr < 1 || curr > 100000) return 0
     
      prev = curr;
      i++;
    }

    return 1;
  }

  return solution(arr);
}

assert.equal(run([0]), 0);
assert.equal(run([4, 1, 3, 2]), 1);
assert.equal(run([4, 1, 1, 3, 2]), 0);
assert.equal(run([4, 1, 3]), 0);
assert.equal(run([1, 2, 3]), 1);
assert.equal(run([1]), 1);
assert.equal(run([2]), 0);
assert.equal(run([2, 3]), 0);
assert.equal(run([]), 0);
