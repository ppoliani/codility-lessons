const assert = require('assert');

const run = (A, B) => {

  const solution = (A, B) => {
    const N = A.length;

    const cache = {};

    const memoize  = (func, paramSelector=a => a) => (...args) => {     
      const key = JSON.stringify(paramSelector(args));

      if (cache[key]){
      return cache[key];
      }
      else {
        const val = func(...args);
        cache[key] = val;
        return val;
      }
    }

    const numOfClimbs = memoize(n => {
      if(n === 0 || n === 1) return 1;
      
      const ways = [1]

      for (let i = 1; i <= n; i++) {
        total = 0;

        for (let j = 1; j <= 2; j++) {
          if(i - j >= 0) total += ways[i - j]; // ways(i - 1) + ways(i - 2)
        }

        ways[i] = total;
      }

      return ways[n];
    })

    const result = [];

    for (let i = 0; i < N; i++) {
      result.push(numOfClimbs(A[i]) % Math.pow(2, B[i]))
    }

    return result;
  }

  return solution(A, B);
}

assert.deepEqual(run([4, 4, 5, 5, 1], [3, 2, 4, 3, 1]), [5, 1, 8, 0, 1]);
