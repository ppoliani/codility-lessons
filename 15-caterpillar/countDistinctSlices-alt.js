const assert = require('assert');

const run = (M, A) => {

  /**
   * We start with a front and back variables. The front increments in a loop. At the each iteration we 
   * check if the have already seen the item at the front index before. If not we simple increase the count by 
   * the different of front and back. If we do find an item that we've seen before then we need to start a new slice
   * so we change back to the index of the item we last so as long as it it's not before the current back index.
   */
  const solution = (M, A) => {
    const N = A.length;
    let back = -1;
    const seen = {};
    let total = 0;

    for (let front = 0; front < N; front++) {
      if(seen[A[front]] > back) {
        back = seen[A[front]]
      }

      total += front - back;
      seen[A[front]] = front;

      if(total > 1000000000) return 1000000000;
    }

    return total;
  }

  return solution(M, A);
}


assert.equal(run(6, [3, 4, 5, 5, 2]), 9);
assert.equal(run(6, [5, 5, 5, 5, 3]), 6);
assert.equal(run(6, [1, 2, 3, 4, 5]), 15);
assert.equal(run(6, [5, 5]), 2);
assert.equal(run(6, [5]), 1);
