const assert = require('assert');
const {sortAsc} = require('../helpers/sort')

const run = (arr) => {

  const solution = (arr) => {
    const sorted = sortAsc(arr);
    let count = 0;
    let i = 0;
    
    while(i < sorted.length) {
      if(sorted[i] !== sorted[i + 1]) {
        count += 1;
      }

      i++;
    }

    return count;
  }

  return solution(arr);
}

assert.equal(run([2, 1, 1, 2, 3, 1]), 3);
assert.equal(run([1, 1]), 1);
assert.equal(run([1, 1, 2]), 2);
assert.equal(run([]), 0);
