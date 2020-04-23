const assert = require('assert');

const run = (arr) => {
  
  const solution = (arr) => {
    const getLeader = (arr) => {
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
          return arr[i];
        }
  
        i++;
      }
  
      return -1;
    }

    let numOfEquiLeaders = 0;

    const recur = (slice1, slice2) => {
      if(slice1.length === 1) {
        const leader1 = getLeader(slice1);
        const leader2 = getLeader(slice2);

        if(leader1 = -1 && leader1 === leader2) {
          numOfEquiLeaders += 1;
        }

<<<<<<< Updated upstream
      const leader1 = getLeader(slice1);
      const leader2 = getLeader(slice2);

      if(leader1 !== -1 && leader1 === leader2) {
        numOfEquiLeaders += 1;
=======
        return;
>>>>>>> Stashed changes
      }

      return recur(
        slice1.split(0, slice1.length / 2), 
        slice1.split(slice1.length / 2, slice1.length)
      )
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
