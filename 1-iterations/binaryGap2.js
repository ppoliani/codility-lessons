const assert = require('assert');

const run = (N) => {

  /**
   * Keep the index of the beginning of the gap i.e. when we see 1 and we're not in the middle of gap yet
   * Everytime we see 0 and we're in a gap we just increment the value
   * When we see a closing 1 we store the max value we have from all the gaps so far. We also start the next potential gap
   */
  const solution = (N) => {
    const binary =  N.toString(2);
    let max = 0;
    let startIndex = -1;
    let numOfZeros = 0;

    for (let i = 0; i < binary.length; i++) {
      if(binary[i] === '1' && startIndex === -1) startIndex = i;
      if(binary[i] === '0' && startIndex >= 0) numOfZeros += 1;
      if(binary[i] === '1' && numOfZeros > 0) {
        max = Math.max(numOfZeros, max);
        startIndex = i;
        numOfZeros = 0
      }
    }

    return max;
  }

  return solution(N);
}

assert.equal(run(328), 2);
assert.equal(run(9), 2);
assert.equal(run(529), 4);
assert.equal(run(20), 1);
assert.equal(run(15), 0);
assert.equal(run(32), 0);
