const assert = require('assert');

const run = (s, p, q) => {
  const solution = (s, p, q) => {
    const getMinFactor = subSeq => subSeq.split('').reduce((min, n) => factors[n] < min ? factors[n] : min, Number.MAX_SAFE_INTEGER);

    const factors = {
      'A': 1,
      'C': 2,
      'G': 3,
      'T': 4
    }
    
    const result = [];
    const m = p.length;
    let i = 0;

    while(i < m) {
      const subSeq = s.substring(p[i], q[i] + 1);
      result.push(getMinFactor(subSeq));

      i++;
    }

    return result;
  }

  return solution(s, p, q);
}

assert.deepEqual(run('CAGCCTA', [2, 5, 0], [4, 5, 6]), [2, 4, 1]);
assert.deepEqual(run('C', [0], [0]), [2]);

