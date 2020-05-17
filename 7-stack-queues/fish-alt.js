const assert = require('assert');

const run = (A,B) => {

  /**
   * We maintain a stack of fishes that will stay alive. We pop two items from the stack and check which one 
   * will survive. If the direction of the fish flows to the same direction then both will survive. The first fish that pops will 
   * be always at position P < Q (position of second fish). If they meet then only the big one survives. We need to make 
   * sure that we keep to comparing the big one with all the other alive fishes to check if the above condition are met
   */
  const solution = (A,B) => {
    const N = A.length;

    const Fish = (p, s, d) => ({p, s, d});
    const stack = [Fish(0, A[0], B[0])];
    const push = item => stack.push(item);
    const pop = () => stack.pop();
    const peak = () => stack[stack.length -1];

    const flowUntil = () => {
      let fish = pop();
      let prevFish = pop();

      while(prevFish && fish)  {
        if(prevFish.d === 1 && fish.d === 0) {
          if(fish.s > prevFish.s) {
            push(fish);
          }
          else {
            push(prevFish);
            break;
          }
        }
        else {
          push(prevFish);
          push(fish);
          break;
        }
        
        if(stack.length === 1) break;
        
        fish = pop();
        prevFish = pop();
      }
    }

    for (let i = 1; i < N; i++) {
      const fish = Fish(i, A[i], B[i])
      push(fish);
      flowUntil();
    }

    return stack.length;
  }

  return solution(A,B);
}

assert.equal(run([4, 5], [1, 0]), 1);
assert.equal(run([4, 3, 2, 1, 5], [0, 1, 1, 0, 0]), 2);
assert.equal(run([4, 3, 2, 1, 5], [0, 1, 0, 0, 0]), 2);
assert.equal(run([4, 5], [1, 1]), 2);
