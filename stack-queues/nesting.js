const assert = require('assert');
const Stack = require('../helpers/stack');

const run = (str) => {
  const solution = (str) => {
    const stack = Stack.createStack();
    const isClosingCounterPart = (top, char) => {
      if(top === '(') return char === ')';
      if(top === '{') return char === '}';
      if(top === '[') return char === ']';
    }
    const isEmpty = char => char = '';
    
    
    let i = 0;
    while(i < str.length) {
      const char = str[i];
      const top = stack.peak();

      stack.push(char);

      if(isClosingCounterPart(top, char)) {
        stack.pop();
        stack.pop();
      }

      i++;
    }

    return stack.count() > 0 ? 0 : 1;
  }

  return solution(str);
}

assert.equal(run('{[()()]}'), 1);
assert.equal(run('([)()]'), 0);
assert.equal(run(''), 1);
assert.equal(run('([)()]'), 0);
assert.equal(run(')'), 0);
