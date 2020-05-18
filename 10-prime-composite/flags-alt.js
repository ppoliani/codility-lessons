const assert = require('assert');

const run = (A) => {

  /**
   * Keep an array of N items where we in each index we store the index of the next peak.
   * For example if peaks are 1, 3, 5, 10 then indexed 6-10 will store 10 because that's their next peak.
   * The we iterate the nextPeaks K times trying to find the max number of K flags
   */
  const solution = (A) => {
    const N = A.length;

    if(N < 3) return 0;

    // Iterate from end to start and store in each index the 
    // location of the next peak.
    const findNextPeaks = () => {
      const nextPeaks = Array(N).fill(0);
      nextPeaks[N - 1] = -1;
      let peakCount = 0;

      for (let i = N - 2; i > 0; i--) {
        if(A[i - 1] < A[i] && A[i] > A[i + 1]) {
          nextPeaks[i] = i;
          peakCount += 1;
        }
        else {
          nextPeaks[i] = nextPeaks[i + 1]
        }
      }

      nextPeaks[0] = nextPeaks[1];

      return [nextPeaks, peakCount];
    }

    const [nextPeaks, peakCount] = findNextPeaks();
    let maxFlags = 0;

    // What is the upper limit of K? The minimum distance between the first and last flag is K * (K - 1).
    // As the left most cell and the right most cell of the array A can not be peeks by the definition,
    // we can say (K - 1) * K + 2 must be less than N
    for (let i = 1; (i - 1) * i + 2 < N && i <= peakCount; i++) {
      let pos = 0;
      let num = 0;

      while(pos < N && num < i) {
        pos = nextPeaks[pos];

        if(pos === -1) break;
        pos += i;
        num += 1;
      }

      maxFlags = Math.max(maxFlags, num);
    }

    return maxFlags;
  }

  return solution(A);
}

assert.equal(run([1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]), 3);
assert.equal(run([1]), 0);
assert.equal(run([1, 2]), 0);
assert.equal(run([1, 2, 1]), 1);
assert.equal(run([1, 2, 1, 1, 3, 1]), 2);
