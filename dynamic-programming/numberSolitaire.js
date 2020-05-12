const assert = require('assert');

const run = (A) => {

  const solution = (A) => {
    const N = A.length - 1;
    const dp = [A[0], A[0] + A[1], ...Array(N - 2).fill(0)];
    const moves = [1, 2, 3, 4, 5, 6];

    const F = K => {
      let total = 0;
      let max = 0;

      for (let i = 0; i < moves.length; i++) {
        for(let j = K; j > 0; j--) {
          if(K - moves[i] >= 0) { 
            dp[K] = dp[K] + dp[j - moves[i]];
          }
        }

        dp[K] += A[K];
      }


      // max = Math.max(max, total) 

      return total;
    }

    return F(2);
  }

  return solution(A);
}

assert.equal(run([1, -2, 0, 9, -1, -2]), 8);
