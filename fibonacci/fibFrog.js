const assert = require('assert');
const {fibDynamic} = require('../helpers/arithmetic');

const run = (arr) => {

  const solution = (arr) => {
    if(arr.length <= 2) return 1;

    const target = arr.length;
    const fibSeq = fibDynamic(Math.min(arr.length, 26));
    const positions = [];
    const visited = [];

    for (let i = 0; i <= fibSeq.length || fibSeq[i] <= arr.length; i++) {
      const pos = fibSeq[i] - 1;

      if(arr[pos] === 1 && !visited[pos]) {
        positions.push({pos, move: 1})
        visited[pos] = true;
      }
    }

    while(positions.length > 0) {
      const curPos = positions.shift();

      for (let j = fibSeq.length - 1; j > 0; j--) {
        const nextPos = curPos.pos + fibSeq[j];

        if(nextPos === target) return curPos.move + 1;
        else if(nextPos < target && arr[nextPos] === 1 && !visited[nextPos]) {
          positions.push({pos: nextPos, move: curPos.move + 1});
          visited[nextPos] = true;
        }    
      }
    }

    return -1;
  }

  return solution(arr);
}

assert.equal(run([0, 0, 0, 1, 1, 0, 1, 1, 0, 0]), 2);
assert.equal(run([0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0]), 3);
assert.equal(run([1, 1, 1]), 2);
assert.equal(run([1]), 1);
assert.equal(run([]), 1);
