const assert = require('assert');

const run = (N) => {

  /**
   * Use the divisors algorithm to find the factors of N
   * Iterate though the factors of N and locate the max perimeter of the two sides
   */
  const solution = (N) => {
    let i = 1;
    let factors = [];

    while(i * i < N) {
      if(N % i === 0) {
        factors.push(i);
        factors.push(N / i);
      }
      i++;
    }

    if(i * i === N) factors.push(i);

    let minPerimeter = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < factors.length; i++) {
      const A = factors[i];
      const B = N / A;

      minPerimeter = Math.min(minPerimeter, 2 * (A + B))
    }

    return minPerimeter;
  }

  return solution(N);
}

assert.equal(run(30), 22);
assert.equal(run(1), 4);
