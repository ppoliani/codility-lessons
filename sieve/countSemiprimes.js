const assert = require('assert');

const run = (N, P, Q) => {

  const solution = (N, P, Q) => {
    // const prepareForFactorization = (start, n) => {
    //   const factors = Array(n + 1).fill(0);
    //   let i = Math.max(start, 2);

    //   while(i * i <= n) {
    //     if(factors[i] === 0) {
    //       let k = i * i;

    //       while(k <= n) {
    //         if(factors[k] === 0) factors[k] = i;
    //         k += i;
    //       }
    //     }

    //     i++;
    //   }

    //   return factors;
    // }

    // const factorization = (start, n) => {
    //   const primeFactors = [];
    //   const factors = prepareForFactorization(start, n)

    //   while(factors[n] > 0) {
    //     primeFactors.push(factors[n])
    //     n /= factors[n]
    //   }

    //   primeFactors.push(n);

    //   return primeFactors;
    // }

    console.log(factorization(1, 26))
  }

  return solution(N, P, Q);
}

assert.equal(run(26, [1, 4, 16], [26, 10, 20]), [10, 4, 0]);
