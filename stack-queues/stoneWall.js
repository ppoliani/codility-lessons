const assert = require('assert');
const Stack = require('../helpers/stack');

const run = (heights) => {

  const solution = (heights) => {
    const stack = Stack.createStack();
    const createBlock = (height, width) => ({height, width});
    const blocks = [];
    
    const iterate = block => {
      let count = stack.count();

      if(count === 0) {
        stack.push(block);
        return;
      }

      while(count > 0) {
        const top = stack.peak();
        const existingBlock = stack.at(count - 1);

        if(block.height < existingBlock.height) {
          if(top.height !== block.height) {
            blocks.push(stack.pop());
            stack.push(block);
            count = stack.count();
          }
        }
        else {
          stack.at(count - 1).width += 1;


          if(top.height !== block.height) {
            stack.push(block);
          }
        }

        count--;
      }
    }

    let i = 0;
    while(i < heights.length) {
      iterate(createBlock(heights[i], 1));
      i++;
    }

    return blocks.length;
  }

  return solution(heights);
}

assert.equal(run([8, 8, 5, 7, 9, 8, 7, 4, 8]), 7);
