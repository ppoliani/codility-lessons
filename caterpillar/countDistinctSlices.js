const assert = require('assert');

const run = (M, A) => {

  const solution = (M, A) => {
    let total = 0;
    let front = 0;
    let maxSum = 0;

    const isDistinctSlice = (back, front) => {
      const elems = {};
      const sum = 0;

      for (let i = back; i <= front; i++) {
        if(elems[A[i]]) return false;
        elems[A[i]] = true;
      }

      return true;
    }

    for (let i = 0; i <= M; i++) {
      maxSum += i;
    }

    for (let back = 0; back < A.length; back++) {
      let sumSum = 0;
      front = back;

      while(front < A.length && sumSum + A[front] <= maxSum && isDistinctSlice(back, front)) {
        total += 1;
        front += 1;
        sumSum += A[front];
      }

      if(total > 1000000000) return 1000000000;
    }

    return total;
  }

  return solution(M, A);
}

assert.equal(run(6, [3, 4, 5, 5, 2]), 9);
assert.equal(run(0, [0, 0, 0, 0]), 4);
