const assert = require('assert');

const run = (arr) => {

  const solution = (arr) => {
    const isPeak = i => arr[i] > arr[i-1] && arr[i] > arr[i+1];

    const findPeaks = () => {
      const peaks = [];
      let i = 1;

      while(i < arr.length) {
        if(isPeak(i)) {
          peaks.push(i);
        }
  
        i++;
      }
  
      return peaks;
    }

    const peaks = findPeaks();

    const check = (prevFlagCount, flagCount) => {
      let count = 1;
      let i = 1;
      let currentPeak = peaks[0]
      
      while(i < peaks.length) {
        if(Math.abs(peaks[i] - currentPeak) >= flagCount) {
          count += 1;
          currentPeak = peaks[i];
        }

        i++;
      }

      if (count > flagCount) {
        return check(flagCount, flagCount + Math.ceil((flagCount - prevFlagCount) / 2))
      }
      else if(count < flagCount) {
        return check(prevFlagCount, Math.ceil((flagCount - prevFlagCount) / 2) + prevFlagCount)
      }

      return flagCount;
    }

    return peaks.length > 0 ? check(0, peaks.length) : 0;
  }

  return solution(arr);
}

const mediumArray = Array(100).fill(0).reduce((acc) => [...acc, 0, 1, 0], [])
assert.equal(run(mediumArray), 17);
assert.equal(run([1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]), 3);
assert.equal(run([1, 5, 2]), 1);
assert.equal(run([5]), 0);
assert.equal(run([1, 5, 2, 5, 1]), 2);
assert.equal(run([0, 0, 0, 0, 0, 1, 0, 1, 0, 1]), 2);
