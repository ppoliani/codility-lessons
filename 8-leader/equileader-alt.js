const assert = require('assert');

const run = (A) => {

  /**
   * An equi leader can be only the leader of the full array. Thus we first find the leader of the entire array.
   * The we iterate from left to right and keep the count of the leader in the slice [0, i] to [i+1, N-1]. 
   * Finally we check when the left count of leaders and right count are leaders in their sub-slice respectively. 
   */
  const solution = (A) => {
    const N = A.length;
    const stack = [A[0]];
    const push = item => stack.push(item);
    const pop = () => stack.pop();
  
    for (let i = 1; i < N; i++) {
      push(A[i]);
  
      if(stack.length >= 2) {
        const top1 = pop();
        const top2 = pop();
  
        if(top1 === top2) {
          push(top2);
          push(top1);
        }
      }
    }
  
    const leader = stack[0];
    let count = 0;


    for (let i = 0; i < N; i++) {
      if(A[i] === leader) {
        count += 1;
      }
    }

    let equiLeaders = 0;
    let lLeaderCount = 0;

    for (let i = 0; i < N; i++) {
      if(A[i] === leader) {
        lLeaderCount += 1;
      }

      rLeaderCount = count - lLeaderCount;
      if(lLeaderCount > (i + 1) / 2 && rLeaderCount > (N - i - 1) / 2) equiLeaders += 1;
    }

    return equiLeaders;
  }

  return solution(A);
}

assert.equal(run([4, 3, 4, 4, 4, 2]), 2);
assert.equal(run([4]), 0);
assert.equal(run([4, 4]), 1);
