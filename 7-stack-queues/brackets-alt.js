const assert = require('assert');

const run = (S) => {

  /**
   * Scan each character and add it to the queue when an opening bracket is encountered.
   * When we see a closing bracket we need to check the peak of the stack and make sure that there exist a 
   * corresponding opening bracket. If not then it's an invalid string. If there is then we pop from the stack.
   * Finally, we check the length of the stack and make sure it's empty
   */
  const solution = (S) => {
    const stack = [];
    const push = item => stack.push(item);
    const pop = () => stack.pop();
    const peak = () => stack[stack.length -1];

    const isOpening = char => char === '(' || char === '[' || char === '{'
    const isClosing = char => char === ')' || char === '}' || char === ']'
    const getMatchingOpening = char => {
      switch(char) {
        case ')':
          return '(';
        case ']':
          return '[';
        case '}':
          return '{';
      }
    }

    for (let i = 0; i < S.length; i++) {
      const char = S[i];

      if(isOpening(char)) push(char);
      else if(isClosing(char)) {
        if(peak() !== getMatchingOpening(char)) return 0;
        else pop();
      }
    }

    return stack.length >= 1 ? 0 : 1;
  }

  return solution(S);
}

assert.equal(run('{[()()]}'), 1);
assert.equal(run('([)()]'), 0);
assert.equal(run('()'), 1);
assert.equal(run('('), 0);
assert.equal(run(']'), 0);
