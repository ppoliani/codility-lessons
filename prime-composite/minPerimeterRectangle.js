const assert = require('assert');
const {getFactors} = require('../helpers/arithmetic');

const run = (area) => {

  const solution = (area) => {
    const perimeter = (w, h) => 2 * (w + h);


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
