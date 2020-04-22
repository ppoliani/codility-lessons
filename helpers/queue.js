const handler = {
  apply: (target, thisArg, args) => {
    return args.length === 0 
      ? target(thisArg)
      : target(thisArg)(...args);
  }
};

const enqueue = new Proxy(stack => item => stack.items.push(item), handler);
const dequeue = new Proxy(stack => stack.items.shift(), handler);
const peak = new Proxy(stack => stack.items[stack.items.length - 1], handler);
const count = new Proxy(stack => stack.items.length, handler);

const createQueue = () => {
  return {
    items: [],
    enqueue,
    dequeue,
    peak,
    count
  }
};

module.exports = {createQueue}
