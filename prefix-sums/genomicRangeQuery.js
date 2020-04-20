const assert = require('assert');

const run = (s, p, q) => {
  const solution = (s, p, q) => {

    const storeLastSeen = (lastSeen, char, n, i) => {
      if(char === n) {
        lastSeen[n][i] = i;
      }
      else {
        const prev = lastSeen[n][i - 1];
        lastSeen[n][i] = prev === undefined ? -1 : prev;
      }
    }
    
    const lastSeen = s.split('').reduce((acc, char, i) => {
      storeLastSeen(acc, char, 'A', i);
      storeLastSeen(acc, char, 'C', i);
      storeLastSeen(acc, char, 'G', i);
      storeLastSeen(acc, char, 'T', i);

      return acc;
    }, {'A': [], 'C': [], 'G': [], 'T': []});

    const result = [];
    const m = p.length;
    let i = 0;

    while(i < m) {
      if(lastSeen['A'][q[i]] >= p[i]) result.push(1);
      else if(lastSeen['C'][q[i]] >= p[i]) result.push(2);
      else if(lastSeen['G'][q[i]] >= p[i]) result.push(3);
      else if(lastSeen['T'][q[i]] >= p[i]) result.push(4);


      i++;
    }

    return result;
  }

  return solution(s, p, q);
}

assert.deepEqual(run('CAGCCTA', [2, 5, 0], [4, 5, 6]), [2, 4, 1]);
assert.deepEqual(run('C', [0], [0]), [2]);

