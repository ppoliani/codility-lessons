
const run = (arr) => {

  const solution = (arr) => {
    const sorted = arr.sort(); 
    let i = 0;
    
    while(i < sorted.length) {
      const next = sorted[i + 1];
      const curr = sorted[i];

      if(next === undefined) {
        return Math.min(curr + 1, 1)
      }

      if(curr > 0 && curr !== next && next !== curr + 1) {
        return Math.max(curr + 1, 1);
      }

      i++;
    }
  }

  return solution(arr);
}

console.log(run([3, 10]));
console.log(run([2]));
// console.log(run([1, 3, 6, 4, 1, 2]));
// console.log(run([1, 2, 3]));
// console.log(run([-1, -3]));
// console.log(run([-1, -3, 1, 2]));
