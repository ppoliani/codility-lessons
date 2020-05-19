const assert = require('assert');

const run = (A) => {

  // DFS approach that scores 33% due to execution time
  const solution = (A) => {
    const N = A.length;
    const fib = [0, 1, ...Array(25).fill(0)];

    for (let i = 2; i <= 26; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }

    const positions = [{index: -1, jumps: 0}];
    let min = Number.MAX_SAFE_INTEGER;

    while(positions.length > 0) {
      const pos = positions.pop();

      for (let i = 1; i < fib.length; i++) {
        const nextPos = pos.index + fib[i];
        
        if(nextPos > N) break;
        if(nextPos === N) {
          min = Math.min(min, pos.jumps + 1)
        }

        if(A[nextPos] === 1) {
          positions.push({index: nextPos, jumps: pos.jumps + 1})
        }
      }
    }

    return min === Number.MAX_SAFE_INTEGER ? -1 : min;
  }

  return solution(A);
}

assert.equal(run([0, 0, 0, 1, 1, 0, 1, 1, 0, 0]), 2);
assert.equal(run([0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0]), 3);
assert.equal(run([1, 1, 1]), 2);
assert.equal(run([1]), 1);
assert.equal(run([]), 1);
