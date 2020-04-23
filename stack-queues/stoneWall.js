const assert = require('assert');
const Stack = require('../helpers/stack');

const run = (heights) => {

  const solution = (heights) => {
    const stack = Stack.createStack();
    let blocks = 0;
    
    const iterate = newHeight => {
      let topHeight = stack.peak();

      if(newHeight === topHeight) return;
      
      if(topHeight === undefined || newHeight > topHeight) {
        stack.push(newHeight);
        blocks += 1;
      }
      else {
        stack.pop();

        if(stack.count() >= 0) {
          iterate(newHeight);
        }
      }
    }

    let i = 0;
    while(i < heights.length) {
      iterate(heights[i]);
      i++;
    }

    return blocks;
  }

  return solution(heights);
}

assert.equal(run([8, 8, 5, 7, 9, 8, 7, 4, 8]), 7);
