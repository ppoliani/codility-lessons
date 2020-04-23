const assert = require('assert');

const run = (arr) => {
  
  const solution = (arr) => {
    let dominator = -1;

    const getLeaderIndexes = () => {
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
          dominator = arr[i];
        }
  
        i++;
      }
  
      return dominator !== -1 
        ? items[dominator].indexes 
        : [];
    }

    const leaderIndexes = getLeaderIndexes();


    let numOfEquiLeaders = 0;
    let d1 = 0;
    let d2 = leaderIndexes.length;
    let i = 0

    while(i < arr.length) {
      if(arr[i] === dominator) {
        d1 += 1;
        d2 -= 1;
      }
      if(d1 > (i + 1) / 2 && d2 > (arr.length - i - 1) / 2) {
        numOfEquiLeaders ++;
      }

      i++;
    }

    return numOfEquiLeaders;
  }

  return solution(arr);
}

assert.equal(run([4, 3, 4, 4, 4, 2]), 2);
assert.equal(run([4]), 0);
assert.equal(run([1, 2]), 0);
assert.equal(run([1, 2, 3, 4, 5]), 0);
assert.equal(run([4, 4, 2, 5, 3, 4, 4, 4]), 3);
