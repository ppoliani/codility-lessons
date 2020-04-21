const assert = require('assert');
const memoize = require('../helpers/memoize');
const {avg} = require('../helpers/aggregate');

const run = (arr) => {

  const solution = (arr) => {
    const recur = (i, j, min, minIndex) => {
      if(i === j) {
        return [min, minIndex];
      }

      const val = avg(arr.slice(i, j + 1));

      if(val < min) {
        min = val;
        minIndex = i;
      }

      console.log('', i, j)

      const [minL, minIndexL] = recurMemo(i + 1, j, min, minIndex);
      const [minR, minIndexR] = recurMemo(i, j - 1, minL, minIndexL);

      return [minR, minIndexR];
    };

    const recurMemo = memoize(recur, ([i, j]) => [i, j]);

    const result = recurMemo(0, arr.length - 1, Number.MAX_SAFE_INTEGER, 0);

    return result[1];
  }

  return solution(arr);
}

assert.equal(run([4, 2, 2, 5, 1, 5, 8]), 1);
