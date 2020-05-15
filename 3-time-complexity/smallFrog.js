
const run = (x, y, d) => {

  const solution = (x, y, d) => {
    if(x === y) return 0;
   
    return Math.ceil((y - x) / d);
  }

  return solution(x, y, d);
}

console.log(run(10, 85, 30));
