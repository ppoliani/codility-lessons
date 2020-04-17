const {sum} = require('../helpers/aggregate');

const run = (arr) => {

  const solution = (arr) => {
    if(arr.length === 0 || arr.length === 1) return 0;

    const total = sum(arr);

    return arr.reduce((acc, item, i) => {
      if(i === arr.length - 1) return acc;

      const leftTotal = acc.currentTotal + item;
      const rightTotal = total - leftTotal
      const diff = Math.abs(leftTotal - rightTotal);

      return diff < acc.min 
        ? {currentTotal: leftTotal, min: diff}
        : {currentTotal: leftTotal, min: acc.min}

    }, {currentTotal: 0, min: Number.MAX_SAFE_INTEGER}).min;
  }

  return solution(arr);
}


console.log(run([-1000, 1000]));
console.log(run([3, 1, 2, 4, 3]));
console.log(run([3]));
console.log(run([]));
console.log(run([1, 1, 1, 1]));
console.log(run([-1, -1, -2, -1]));
