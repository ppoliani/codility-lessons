const assert = require('assert');

const run = (A) => {

  /**
   * Use the O(N) algorithm to find the leader
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
  
    const candidate = stack[0];
    let count = 0;
    let result = [];

    for (let i = 0; i < N; i++) {
      if(A[i] === candidate) {
        result[count] = i;
        count += 1;
      }
    }

    return count > N / 2 ? result[0] : -1;
  }

  return solution(A);
}

assert.equal(run([3, 4, 3, 2, 3, -1, 3, 3]), 0);
assert.equal(run([1]), 0);
assert.equal(run([]), -1);
