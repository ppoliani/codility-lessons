const assert = require('assert');
const Stack = require('../helpers/stack');

const run = (sizes, directions) => {

  const solution = (sizes, directions) => {
    const createFish = (position, size, direction) => ({position, size, direction});
    const isBiggerFish = (f1, f2) => f1.size > f2.size;
    const isUpstream = (f1, f2) => f1.position < f2.position;

    const iterateStack = fish => {
      let i = 0;
      const count = stack.count();

      while(i < count) {
        const top = stack.peak();

        if(isUpstream(top, fish) && top.direction === 1 && fish.direction === 0) {
          if(isBiggerFish(fish, top)) {
            stack.pop();
          }
          else return;
        }

        i++;
      }   

      stack.push(fish);
    }

    const stack = Stack.createStack();

    let i = 0;

    while(i < sizes.length) {
      const fish = createFish(i, sizes[i], directions[i]);
      const top = stack.peak();

      if(!top) stack.push(fish);
      else if(isUpstream(top, fish) && top.direction === 1 && fish.direction === 0) {
        iterateStack(fish);
      }
      else {
        stack.push(fish);
      }

      i++;
    }

    return stack.count();
  }

  return solution(sizes, directions);
}

assert.equal(run([4, 3, 2, 1, 5], [0, 1, 0, 0, 0]), 2);
assert.equal(run([10, 3, 2, 1, 5], [1, 0, 0, 0, 0]), 1);
assert.equal(run([10, 3, 2, 1, 100], [1, 1, 1, 1, 0]), 1);
assert.equal(run([4], [1]), 1);
assert.equal(run([4, 5], [1, 0]), 1);
assert.equal(run([4, 5], [1, 1]), 2);
