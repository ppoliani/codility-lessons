const assert = require('assert');

const run = (A) => {

  /**
   * Maintain a stack that we:
   * 1. Push to the stack if the peak of the stack has a shorter and increase the count
   * 2. If the peak of the stack has a taller block than the current then pop until you find a shorter.
   * 2.1 When shorter found push to stack and increase the count; if same height found then continue
   * 3. If peak has the same height then continue
   */
  const solution = (A) => {
    const N = A.length;
    const stack = [A[0]];
    const push = item => stack.push(item);
    const pop = () => stack.pop();
    const peak = () => stack[stack.length -1];
    let count = 1;
  
    const findBase = block => {
      while(stack.length > 0) {
        const prev = peak();

        if(prev > block) {
          pop();

          if(stack.length === 0) {
            pushBlock(block);
            break;
          }
        }
        else if(prev === block) {
          break;
        }
        else {
          pushBlock(block);
          break;
        }
      }
    }        
    
    const pushBlock = block => {
      push(block);
      count += 1;
    }

    for (let i = 1; i < N; i++) {
      const block = A[i];
      const prev = peak();

      if(prev < block) {
        pushBlock(block);
      }
      else if(prev === block) {
        continue;
      }
      else {
        findBase(block);
      }
    }

    return count;
  }

  return solution(A);
}

assert.equal(run([8, 8, 5, 7, 9, 8, 7, 4, 8]), 7);
assert.equal(run([8]), 1);
