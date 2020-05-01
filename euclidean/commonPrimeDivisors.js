const assert = require('assert');
const {lcm} = require('../helpers/arithmetic');
const {sieve} = require('../helpers/sieve');

const run = (A, B) => {

  const solution = (A, B) => {
    const primeDivisorsSum = N => {
      const primes = sieve(N).reduce((acc, item, index) => {
        if(item) {
          acc.push(index)
        }

        return acc;
      }, []);

      let sum = 0;
      const divisors = [];

      for (let i = 0; i < primes.length; i++) {
        const prime = primes[i];
        
        if(N % prime === 0) {
          divisors.push(prime);
          sum += prime;
        }
      }

      return sum;
    }

    let count = 0;

    for (let i = 0; i < A.length; i++) {
      const sumN = primeDivisorsSum(A[i]);
      const sumM = primeDivisorsSum(B[i]);
      
      if(sumN > 0 && sumN === sumM) {
        count += 1;
      }
    }

    return count;
  }

  return solution(A, B);
}

assert.deepEqual(run([15, 10, 3], [75, 30, 5]), 1);
