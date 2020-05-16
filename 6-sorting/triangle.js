const assert = require('assert');
const {sortAsc} = require('../helpers/sort');

const run = (arr) => {

  const solution = (arr) => {
    const sorted = sortAsc(arr);
    
    let i = 0
    while(i < sorted.length - 2) {
      if(sorted[i] + sorted[i + 1] > sorted[i + 2]) return 1;
      i++;
    }

    return 0;
  }

  return solution(arr);
}

assert.equal(run([10, 2, 5, 1, 8, 20]), 1);
