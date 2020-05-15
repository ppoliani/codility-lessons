
const {sum} = require('../helpers/aggregate');

const run = (arr) => {
  const solution = (arr) => {
    const expectedSum = sum(Array.from(new Array(arr.length + 1), (_, i) => i + 1))
    const currentSum = sum(arr);

    return expectedSum - currentSum;
  }

  return solution(arr);
}

console.log(run([2, 3, 1, 4]));
console.log(run([2, 3, 4, 5]));
console.log(run([2, 3, 1, 5]));
console.log(run([1]));
console.log(run([]));
