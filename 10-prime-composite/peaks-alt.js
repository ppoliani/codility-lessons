const assert = require('assert');

const run = (A) => {

  /**
   * We can use the counting elements technique to store the number of peaks until index i.
   * We can  start with the K being equal to the number of peaks. We then find the block size for each candidate
   * K and see if the value at the edges of each block are different using the peak count array. If values are different
   * then it suggest that there is at least one new peak between those two indexes.
   * We should ignore K that don't divide the total number of items i.e. if array has 11 element we cannot have blocks of size 3
   */
  const solution = (A) => {
    const N = A.length;
    const peakCount = Array(N - 1).fill(0);
    let numOfPeaks = 0;

    for (let i = 1; i < N; i++) {
      if(A[i - 1] < A[i] && A[i] > A[i + 1]) {
        peakCount[i] = peakCount[i - 1] + 1;
        numOfPeaks += 1;
      }
      else {
        peakCount[i] = peakCount[i - 1];
      }
    }

    for (let i = numOfPeaks; i > 0; i--) {
      if(N % i !== 0) continue;

      const blockSize = N / i;
      let j = blockSize - 1;

      while(j <= N - blockSize - 1) {
        const nextBlockStart = j + blockSize;
        if(peakCount[j] <= 0 || peakCount[j] === peakCount[nextBlockStart]) break;
        j = nextBlockStart;
      }

      if(j === N - 1) return i;
    }

    return 0;
  }

  return solution(A);
}

assert.equal(run([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]), 1);
assert.equal(run([1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]), 3);
assert.equal(run([0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]), 7);
assert.equal(run([ 5, 6, 5, 6, 1, 1, 1, 1, 6, 5, 6, 5 ]), 4);
