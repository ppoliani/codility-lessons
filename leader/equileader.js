const assert = require('assert');

const run = (arr) => {
  
  const solution = (arr) => {
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
          return items[arr[i]].indexes;
        }
  
        i++;
      }
  
      return [];
    }

    const leaderIndexes = getLeaderIndexes();

    const countLeaderOccurencesInRange = range => {
      let count  = 0;
      let i = 0;

      while(i < leaderIndexes.length) {
        const index = leaderIndexes[i];

        if(index > range[1]) return count
        if(index >= range[0] && index <= range[1]) {
          count += 1;
        }

        i++;
      }
      return leaderIndexes.reduce((count, index) => {
        if(index >= range[0] && index <= range[1]) {
          count += 1;
        }

        return count;
      }, 0)
    }

    const isLeaderInSlice = (count, range) => {
      return count > Math.round((range[1] - range[0]) / 2);
    }

    let numOfEquiLeaders = 0;
    let splitPoint = 0;

    while(splitPoint < arr.length) {
      const range = [0, splitPoint];
      const range2 = [splitPoint + 1, arr.length - 1];
      const numOfLeaderInSlice1 = countLeaderOccurencesInRange(range);
      const numOfLeaderInSlice2 = leaderIndexes.length - numOfLeaderInSlice1;
  
      if(splitPoint >= arr.length) return;
  
      if(isLeaderInSlice(numOfLeaderInSlice1, range) && isLeaderInSlice(numOfLeaderInSlice2, range2)) {
        numOfEquiLeaders += 1;
      }

      splitPoint++;
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
