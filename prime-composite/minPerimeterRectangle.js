const assert = require('assert');

const run = (area) => {

  const solution = (area) => {
    const perimeter = (w, h) => 2 * (w + h);
    const getFactors = n => {
      let i = 0;
      const factors = [];

      while(i * i <= n) {
        if(n % i === 0) {
          factors.push(i);
        }

        i++;
      }

      return factors;
    }

    const factors = getFactors(area);
    let minPerimeter = 2 * (1 + area);

    for (let i = 1; i < factors.length; i++) {
      const w = factors[i];
      const h = area / w;
      const p = perimeter(w, h);
      
      minPerimeter = Math.min(p, minPerimeter);
    }

    return minPerimeter;
  }

  return solution(area);
}

assert.equal(run(30), 22);
assert.equal(run(1), 4);
