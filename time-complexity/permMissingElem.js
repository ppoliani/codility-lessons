
const run = (arr) => {
  const checkIfMissing = (a, b) => a + 1 !== b;

  const solution = (arr) => {
    if(arr.length === 0) return 0;
    if(arr.length === 1) return 0;

    const sorted = arr.sort();
    let item = null;
    let i = 0;
    
    while(item = sorted[i]) {
      const next = sorted[i + 1];
      if(next) {
        if(checkIfMissing(item, next)) {
          return item + 1;
        }
      }

      i++;
    }
  }

  return solution(arr);
}

console.log(run([2, 3, 4, 5]));
console.log(run([2, 3, 1, 5]));
console.log(run([1]));
console.log(run([]));
