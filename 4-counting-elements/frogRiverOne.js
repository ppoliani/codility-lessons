const {max} = require('../helpers/aggregate');

const run = (x, arr) => {

  const isBetweenBanks = pos => pos >= 1 && pos <= x;

  const solution = (x, arr) => {
    let positions = [];
    let covered = 0;

    for(let i = 0; i < arr.length; i++) {
      if(covered === x) break;

      const pos = arr[i];

      if(isBetweenBanks(pos) && positions[pos - 1] === undefined) {
        positions[pos - 1] = i;
        covered++;
      }
    }

    return covered === x
      ? max(positions)
      : -1;
  }

  return solution(x, arr);
}

console.log(run(3, [1, 3, 1, 3, 2, 1, 3]));
// console.log(run(2, [2, 2, 2, 2, 2]));
// console.log(run(5, [1, 3, 1, 4, 2, 3, 5, 4]));

// console.log(run(5, [3]));
