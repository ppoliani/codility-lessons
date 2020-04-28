const assert = require('assert');

const run = (arr) => {

  const solution = (arr) => {
    console.log(arr);
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
    let numOfBlocks = peaks.length;

    while(numOfBlocks > 0) {
      if(arr.length % numOfBlocks !== 0) numOfBlocks -= 1;
      const arraySize = arr.length / numOfBlocks;


      let j = 0;
      let edge = 0;

      while(edge < arr.length - 1) {
        edge = edge + arraySize;
        const l = edge - arraySize;
        if(peaks[j] >= l && peaks[j] <= edge - 1) j++;
      }

      if(j < numOfBlocks) {
        numOfBlocks -= 1;
      }
      else break;
    }

    return numOfBlocks;
  }

  return solution(arr);
}

assert.equal(run([1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]), 3);
assert.equal(run([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]), 1);
assert.equal(run([0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]), 7);
assert.equal(run([ 5, 6, 5, 6, 1, 1, 1, 1, 6, 5, 6, 5 ]), 4);
