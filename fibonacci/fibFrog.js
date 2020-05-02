const assert = require('assert');
const {inverseFib} = require('../helpers/arithmetic');

const run = (arr) => {

  const solution = (arr) => {
    const fibSeq = inverseFib(arr.length);
    const leafs = [];
    arr[arr.length] = 1;

    let prev = 0;

    for (let i = 0; i < arr.length + 1; i++) {
      const distFromPrev =  i - prev;

      if(arr[i - 1] === 1 && fibSeq[distFromPrev] !== undefined) {
        prev = i;
        leafs.push(fibSeq[distFromPrev])
      }
    }

    return leafs.length;
  }

  return solution(arr);
}

assert.equal(run([0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0]), 3);
