const assert = require('assert');

const run = (arr) => {

  const solution = (arr) => {
    let i = 0;
    let min = Number.MAX_SAFE_INTEGER;
    let minIndex = 0;

    while(i < arr.length - 1) {
      const avg2 = (arr[i] + arr[i + 1]) / 2;
      
      if(avg2 < min) {
        min = avg2;
        minIndex = i;
      }

      if(i < arr.length - 2) {
        const avg3 = (arr[i] + arr[i + 1] + arr[i + 2]) / 3;

        if(avg3 < min) {
          min = avg3;
          minIndex = i;
        }
      } 

      i++;
    }

    return minIndex;
  }

  return solution(arr);
}

// assert.equal(run([4, 2, 2, 5, 1, 5, 8]), 1);
assert.equal(run([10, 10, -1, 2, 4, -1, 2, -1]), 5);
