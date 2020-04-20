
const run = (arr) => {

  const solution = (arr) => {
    const sorted = arr.sort((a, b) => a - b); 
    let i = 0;
    let min = 1;
    let prevMin = -1;
    
    while(i < sorted.length) {
      if(prevMin !== sorted[i] && sorted[i] === min) {
        prevMin = min;
        min = min + 1;
      }
     
      i++;
    }

    return min;
  }

  return solution(arr);
}

console.log(run([3, 10]));
console.log(run([2]));
console.log(run([1, 3, 6, 4, 1, 2]));
console.log(run([1, 2, 3]));
console.log(run([-1, -3]));
console.log(run([-1, -3, 1, 2]));
console.log(run([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 100, 102, 103, 112, 113]));
