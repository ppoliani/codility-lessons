const assert = require('assert');
const {gcd} = require('../helpers/arithmetic');

const run = (A, B) => {

  const solution = (A, B) => {
    const reduce = (a, gcdVal) => {
      const remainder = a / gcdVal;
      if(gcdVal === 1) return a;
      if(remainder === 1) return 1;
      else return reduce(remainder, gcd(gcdVal, remainder));
    }

    let count = 0;

    for (let i = 0; i < A.length; i++) {
      const a = A[i];
      const b = B[i];
     
      const gcdVal = gcd(a, b);

      const reducedA = reduce(a, gcdVal);
      const reducedB = reduce(b, gcdVal);

      if(reducedA === 1 && reducedB === 1) count += 1;
      else if(gcd(reducedA, gcdVal) !== 1 && gcd(reducedB, gcdVal) !== 1) count += 1;
    }

    return count;
  }

  return solution(A, B);
}

assert.deepEqual(run([1], [1]), 1);
assert.deepEqual(run([15, 10, 3], [75, 30, 5]), 1);
