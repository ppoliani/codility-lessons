const assert = require('assert');

const run = (arr) => {

  const solution = (arr) => {
    const threshold = arr.length / 2;
    const items = {};

    let i = 0;
    while(i < arr.length) {
      const existing = items[arr[i]];

      if(existing) {
        items[arr[i]].count += 1;
      }
      else {
        items[arr[i]] = {count: 1, indexes: []};
      }

      items[arr[i]].indexes.push(i);

      if(items[arr[i]].count > threshold) {
        return items[arr[i]].indexes[0];
      }

      i++;
    }

    return -1;
  }

  return solution(arr);
}

assert.equal(run([3, 4, 3, 2, 3, -1, 3, 3]), 0);
assert.equal(run([1, 2, 3, 4, 5, -1, 6, 3]), -1);
assert.equal(run([-1, -1, 5, 1, 1, 1, 1]), 3);
assert.equal(run([]), -1);

