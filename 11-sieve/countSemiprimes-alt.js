const assert = require('assert');

const run = (N, P, Q) => {

  /**
   * Find all prime number until N using the sieve
   * Use those prime numbers to find the semiprime numbers and fill the index of semiprime table with 1
   * Use prefix sum t technique to find the semi-primes until index i.
   * Finally perform range queries on the prefix sum
   */
  const solution = (N, P, Q) => {
    const M = P.length;
    const sieve = [0, 0, ...Array(N - 1).fill(1)]
    let i = 2;

    // 1. find prime numbers until N
    while(i * i <= N) {
      if(sieve[i] === 1) {
        let k = i * i;

        while(k <= N) {
          sieve[k] = 0;
          k += i;
        }
      }

      i++;
    }

    const semiPrime = Array(N + 1).fill(0);

    let j = 2;

    // find semiprime
    while(j * j <= N) {
      // ignore non prime numbers
      if(sieve[j] === 0) {
        j++;
        continue;
      }

      let k = j;
      
      while(k * j <= N) {
        if(sieve[k] === 1) {
          semiPrime[k * j] = 1;
        }

        k++;
      }

      j++;
    }

    for (let i = 1; i <= N; i++) {
      semiPrime[i] = semiPrime[i] + semiPrime[i - 1];
    }

    let result = [];
    for (let i = 0; i < M; i++) {
      result[i] = semiPrime[Q[i]] - semiPrime[P[i] - 1];
    }

    return result;
  }

  return solution(N, P, Q);
}

assert.deepEqual(run(26, [1, 4, 16], [26, 10, 20]), [10, 4, 0]);
