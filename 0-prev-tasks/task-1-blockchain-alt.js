const assert = require('assert');

const run = (S) => {

  const solution = (S) => {
    const freq = S.split(')').map(c=> c.split('('));
    const result = Array(26).fill(0);

    for (let i = 0; i < freq.length; i++) {
      const char = freq[i][0];
      const count = Number(freq[i][1]); 
      const index = char.split('#')[0] || char;
    

      if(Number(index) > 26) {
        const chars = index.split('');

        for (let i = 0; i < chars.length - 1; i++) {
          result[Number(chars[i]) - 1] += 1;
        }

        result[Number(chars[chars.length - 1]) - 1] += count || 1;
      }
      else {
        if(char) {
          result[Number(index) - 1] += count || 1;
        }
      }
    }

    return result;
  }

  return solution(S);
}

assert.deepEqual(run('23#(2)5(10)24#(3)21#(5)'), [0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 2, 3, 0, 0]);
assert.deepEqual(run('23#(2)56(10)24#(3)21#(5)'), [0, 0, 0, 0, 1, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 2, 3, 0, 0]);
assert.deepEqual(run('123456789'), [1, 1, 1, 1, 1, 1, 1, 1, 1, ...Array(17).fill(0)]);
assert.deepEqual(run('123456(10)78(5)9'), [1, 1, 1, 1, 1, 10, 1, 5, 1, ...Array(17).fill(0)]);
assert.deepEqual(run(''), Array(26).fill(0));

