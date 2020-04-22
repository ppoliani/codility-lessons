const handler = {
  apply: (target, thisArg, args) => {
    return args.length === 0 
      ? target(thisArg)
      : target(thisArg)(...args);
  }
};

const push = new Proxy(stack => item => stack.items.push(item), handler);
const pop = new Proxy(stack => stack.items.pop(), handler);
const peak = new Proxy(stack => stack.items[stack.items.length - 1], handler);
const count = new Proxy(stack => stack.items.length, handler);
const at = new Proxy(stack => i => stack.items[i], handler);

const createStack = () => {
  return {
    items: [],
    push,
    pop,
    peak,
    count,
    at
  }
};

module.exports = {createStack}
