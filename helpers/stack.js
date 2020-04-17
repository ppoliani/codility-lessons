const handler = {
  apply: (target, thisArg, args) => {
    return args.length === 0 
      ? target(thisArg)
      : target(thisArg)(...args);
  }
};

const createItem = (char, count, closed) => ({char, count, closed});
const push = new Proxy(stack => item => stack.items.push(item), handler);
const pop = new Proxy(stack => stack.items.pop(), handler);
const peak = new Proxy(stack => stack.items[stack.items.length - 1], handler);

const createStack = () => {
  return {
    items: [],
    createItem,
    push,
    pop,
    peak
  }
};

module.exports = {createStack}
