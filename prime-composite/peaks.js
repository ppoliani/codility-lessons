const assert = require('assert');

const run = (arr) => {

  const solution = (arr) => {
    const length = arr.length;
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
    let numOfBlocks = 0;
    
    for (let i = 1; i < length; i++) {
      if(length % i === 0){
        let counter = 0;
        const blockSize = length / i;

        for (let j = 0; j < peaks.length; j++) {
          const l = counter * blockSize;
          const r = (counter + 1) * blockSize;
          
          if(peaks[j] >= l && peaks[j] < r) {
            counter += 1;
          }
        }

        if(counter === i) {
          numOfBlocks = counter;
        }
      }
    }

    return numOfBlocks;
  }

  return solution(arr);
}

assert.equal(run([1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]), 3);
assert.equal(run([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]), 1);
assert.equal(run([0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]), 7);
assert.equal(run([ 5, 6, 5, 6, 1, 1, 1, 1, 6, 5, 6, 5 ]), 4);
