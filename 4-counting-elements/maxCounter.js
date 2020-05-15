
const run = (n, array) => {
  const solution = (n, array) => {
    let counters = Array(n).fill(0);
    let maxVal = 0;
    let lastIncrease = 0;
  
    const increase = index => {
      const val = Math.max(counters[index] + 1, lastIncrease + 1);
      counters[index] = val;
  
      maxVal = Math.max(val, maxVal);
    }

    const maximize = () => {
      lastIncrease = maxVal;
    }

    const runOp = val => {
      if(val <= n) return increase(val - 1);
      if(val === n + 1) return maximize();
    }

    array.forEach(val => runOp(val));

    return counters.map(i => Math.max(lastIncrease, i));
  }

  return solution(n, array);
}

console.log(run(5, [3, 4, 4, 6, 1, 4, 4]));
console.log(run(5, []));
console.log(run(5, [6, 6, 6, 6, 6, 6, 6]));
console.log(run(5, [1, 6, 6, 6, 6, 6, 6]));
