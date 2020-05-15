const assert = require('assert');

const run = (A) => {

  /**
   * First we find the max positive integer in the array.
   * We then create an empty array of size maxPositiveInt + 2 (we use plus two because we don't count 0 and we want to
   * cover cases where the min missing in is the last item in the sequence i.e. 1,2,3)
   * We iterate and find the count for each item in A.
   * Finally we iterate through count and return the index of the first item that equals to zero
   */
  const solution = (A) => {
    let max = 1;

    for (let i = 0; i < A.length; i++) {
      if(A[i] > 0) {
        max = Math.max(max, A[i]);
      }
    }

    const count = Array(max + 2).fill(0);

    for (let i = 0; i < A.length; i++) {
      if(A[i] > 0) {
        count[A[i]] += 1;
      }
    }

    for (let i = 1; i < count.length; i++) {
      if(count[i] === 0) return i;
    }
  }

  return solution(A);
}

assert.equal(run([1, 3, 6, 4, 1, 2]), 5);
assert.equal(run([1, 2, 3]), 4);
assert.equal(run([-1, -3]), 1);
assert.equal(run([-1]), 1);
assert.equal(run([1]), 2);
