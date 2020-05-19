const assert = require('assert');

const run = (A) => {

  /**
   * We start by calculating the fib sequence until 26 because Fib(26) > 100,000(max array length)
   * Then we use a dynamic programming algorithm that will keep an array of positions. Each position will 
   * have have the minimum number of jumps the frog can have to reach it.
   * We initialize that array with the first possible value 1 to the position the frog can jump based on wether it has a leaf on the 
   * first fib sequence indexes.
   * Once we have the first jumps marked we then update the num of jumps until index i until we reach the target. 
   */
  const solution = (A) => {
    const N = A.length;
    const fib = [0, 1, ...Array(25).fill(0)];
    const positions = Array(N).fill(0);

    for (let i = 2; i <= 26; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];

      // can we cross the river with one jump
      const pos = fib[i] - 1;
      if(pos === N) return 1;
      
      if(pos < N && A[pos] === 1) {
        positions[pos] = 1;
      }
    }

    let min = Number.MAX_SAFE_INTEGER;

    // iterate though all positions
    for (let i = 0; i < N; i++) {
      const jumpsSoFar = positions[i];

      // ignore if a position cannot be reached by the frog
      if(jumpsSoFar === 0) continue;
      
      for (let j = 2; j < fib.length - 1; j++) {
        const nextPos = i + fib[j];

        if(nextPos > N || A[nextPos] === 0) continue;

        // if we reached the target then check if it's the shortest possible path
        if(nextPos === N) {
          min = Math.min(min, jumpsSoFar + 1);
        }

        // we need to store the minimum jumps until nextPos. If we haven't reached it yet 
        // then we simply store the jumps we need to reach i plus 1. If we reached it before using a longer path
        // then we can reset the num of jumps to the number jumps we need to reach i plus 1.
        if(positions[nextPos] === 0 || positions[nextPos] > jumpsSoFar + 1) {
          positions[nextPos] = jumpsSoFar + 1;
        }
      }
    }

    return min === Number.MAX_SAFE_INTEGER ? -1 : min;
  }

  return solution(A);
}

assert.equal(run([0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0]), 3);
assert.equal(run([]), 1);
assert.equal(run([1, 1]), 1);
assert.equal(run([1]), 1);
