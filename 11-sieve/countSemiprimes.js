const assert = require('assert');

const run = (N, P, Q) => {

  const solution = (N, P, Q) => {
    const sieve = (n) => {
      const result = Array(n + 1).fill(true);

      let i = 2;

      while(i * i <= n) {
        if(result[i]) {
          let k = i * i;

          while(k <= n) {
            result[k] = false;
            k += i;
          }
        }

        i++;
      }

      return result;
    }
  

    const getSemiprimes = n => {
      const primeNumbers = sieve(n);
      const semiprime = Array(n + 1).fill(0);
      let i = 2;

      while(i * i <= n) {
        if(primeNumbers[i]) {
          let k = i;
  
          while(k * i <= n) {
            if(primeNumbers[k]) semiprime[k * i] = 1;
            k++;
          }
        }
  
        i++;
      }

      return semiprime;
    }

    const semiPrimes = getSemiprimes(N);
    const semiPrimesPrefixSum = [0];

    for (let i = 1; i < semiPrimes.length; i++) {
      semiPrimesPrefixSum[i] = semiPrimesPrefixSum[i - 1] + semiPrimes[i];
    }

    const result = [];

    for (let i = 0; i < P.length; i++) {
      result[i] = semiPrimesPrefixSum[Q[i]] - semiPrimesPrefixSum[P[i] - 1];
    }

    return result;
  }

  return solution(N, P, Q);
}

assert.deepEqual(run(26, [1, 4, 16], [26, 10, 20]), [10, 4, 0]);
