const assert = require('assert');
const {lcm} = require('../helpers/arithmetic');
const {sieve} = require('../helpers/sieve');

const run = (A, B) => {

  const solution = (A, B) => {
    const primeDivisors = N => {
      const primes = sieve(N).reduce((acc, item, index) => {
        if(item) {
          acc.push(index)
        }

        return acc;
      }, []);

      const divisors = [];

      for (let i = 0; i < primes.length; i++) {
        const prime = primes[i];
        
        if(N % prime === 0) {
          divisors.push(prime);
        }
      }

      return divisors;
    }

    let count = 0;

    const deepEqual = (arr1, arr2) => {
      let numOfEqual = 0;

      for (let j = 0; j < arr1.length; j++) {
        const primeN = arr1[j];
        const primeM = arr2[j];
        
        if(primeN === primeM) {
          numOfEqual++;
        }
        else {
          return false;
        }
    }

    return true;
  }

    for (let i = 0; i < A.length; i++) {
      const primeDivisorsN = primeDivisors(A[i]);
      const primeDivisorsM = primeDivisors(B[i]);
      
      if(primeDivisorsN.length === primeDivisorsM.length) {
        if(deepEqual(primeDivisorsN, primeDivisorsM)) count += 1;
      }
    }

    return count;
  }

  return solution(A, B);
}

assert.deepEqual(run([1], [1]), 1);
assert.deepEqual(run([15, 10, 3], [75, 30, 5]), 1);
