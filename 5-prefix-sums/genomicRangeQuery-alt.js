const assert = require('assert');

const run = (S, P, Q) => {

  /**
   * To make quick queries when ranges are involved, we can utilize the prefix sum technique.
   * In this scenario we want a way to check which nucleotide exist within a range defined by P and Q arrays.
   * An existence of nucleotide can be easily queried if we can store the count of each of them until index i.
   * For example if at index i=3 we have 2 As and at index i=5 We have a count of 3 As it indicates that there is one A within
   * that range. Knowing that information we can easily tell what is the smallest nucleotide.
   * If A is there then we simply return 1 if not we check the next smallest which is C
   */
  const solution = (S, P, Q) => {
    const N = S.length;
    const countAtIndex = {
      A: Array(N).fill(0), 
      C: Array(N).fill(0), 
      G: Array(N).fill(0), 
      T: Array(N).fill(0),
    }

    const result = [];

    const storeCountAtIndex = (nucleotide, char, index) => {
      if(char === nucleotide) {
        countAtIndex[nucleotide][index] = countAtIndex[nucleotide][index - 1] + 1;
      }
      else {
        countAtIndex[nucleotide][index] = countAtIndex[nucleotide][index - 1];
      }
    }

    for (let i = 0; i < S.length; i++) {
      storeCountAtIndex('A', S[i], i + 1);
      storeCountAtIndex('C', S[i], i + 1);
      storeCountAtIndex('G', S[i], i + 1);
      storeCountAtIndex('T', S[i], i + 1);
    }

    for (let i = 0; i < P.length; i++) {
      const from = P[i];
      const to = Q[i] + 1;

      if(countAtIndex['A'][to] > countAtIndex['A'][from]) result.push(1)
      else if(countAtIndex['C'][to] > countAtIndex['C'][from]) result.push(2)
      else if(countAtIndex['G'][to] > countAtIndex['G'][from]) result.push(3)
      else if(countAtIndex['T'][to] > countAtIndex['T'][from]) result.push(4)
    }

    return result;
  }

  return solution(S, P, Q);
}

assert.deepEqual (run('A', [0], [0]), [1]);
assert.deepEqual (run('G', [0], [0]), [3]);
assert.deepEqual (run('CAGCCTA', [2, 5, 0], [4, 5, 6]), [2, 4, 1]);
