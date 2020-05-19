const assert = require('assert');

const run = (S, K) => {

  /**
   * We apply a greedy approach. The one way that the string len can be reduced after removing items is
   * if we remove chars between two same characters i.e. CCBCCC if K=2 the only way this string can be reduce its size
   * is if we remove CB so we connect the other chars that are the same so we can compress them. So, we first find the 
   * start index from where we will remove the K chars. Then we remove them and finally we calculate the new length.
   */
  const solution = (S, K) => {
    if(S.length <= K) return 0;
  
    let startIndex = 0;
    S = S.split('');

    // the only way we can reduce by removing one item is we have two same consecutive chars i.e BBBBAA
    if(K === 1) {
      let prev = S[0];
      let count = 1;

      for (let i = 1; i <= S.length; i++) {
        if(S[i] === prev) {
          count += 1;
        }
        else {
          if(count === 2) {
            startIndex = i - 1;
            break;
          }

          count = 1;
        }

        prev = S[i];
      }
    }
    else {
      for (let i = 0; i <= S.length - K; i++) {
        // make sure we don't remove if the in-between char is the same as the ones on the edges
        if(S[i] === S[i + 1]) continue;
        if(S[i - 1] === S[i + K]) {
          startIndex = i;
          break;
        }
      }
    }

    S.splice(startIndex, K);

    let prev = S[0];
    let len = 1;
    let numOfSame = 1;

    for (let i = 1; i < S.length; i++) {
      if(S[i] === prev) {
        if(numOfSame < 2) len += 1;
        numOfSame += 1;
      }
      else {
        len += 1
        numOfSame = 1;
      }

      prev = S[i];
    }

    return len;
  }

  return solution(S, K);
}

assert.equal(run('BBBBAA', 1), 3);
assert.equal(run('ABBBB', 1), 2);
assert.equal(run('BBAAAAA', 2), 2);
assert.equal(run('ABBBCCDDCCC', 11), 0);
assert.equal(run('ABBBCCDDCCC', 3), 5);
assert.equal(run('ABBBCCDDCCC', 0), 9);
assert.equal(run('ABBBCCCCDD', 5), 4);
assert.equal(run('AAAAAAAAAAA', 2), 2);
assert.equal(run('AAAAABBBBCCCCC', 2), 6);
assert.equal(run('', 2), 0);

