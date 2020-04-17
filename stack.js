let _stack = [];

const createItem = (char, count) => ({char, count});
const push = (item, stack=_stack) => stack.push(item);
const pop = (stack=_stack) => stack.pop();
const peak = (stack=_stack) => stack[stack.length - 1];
