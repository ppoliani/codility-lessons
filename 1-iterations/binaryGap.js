const Stack = require('../helpers/stack');

const run = n => {
const stack = Stack.createStack();

const createItem = (char, count, closed) => ({char, count, closed});

const increaseCount = () => {
  const top = stack.peak();

  if(top) {
    stack.pop();
    stack.push(createItem(top.char, top.count + 1))
  }
}

const newEntry = () => {
  const top = stack.peak();

  if(top && top.count !== 0) {
    stack.pop();
    stack.push(stack.createItem(top.char, top.count, true))
  }
  
  stack.push(stack.createItem('', 0))
}

const toBinary = n => n.toString(2);

const getMaxGap = () => {
  const filtered = stack.items.filter(i => i.closed)
  
  if(filtered.length === 0) return 0;

  return filtered.reduce((max, curr) => {
    return curr.count > max ? curr.count : max;``
  },filtered[0].count)
};

const solution = n => {
  const binary = toBinary(n);

  const findGaps = (i) => {
    if(i === 1) {
      newEntry();
    }
    else if(i === 0) {
      increaseCount();
    }
  }

  binary.split('').map(i => Number(i)).forEach(findGaps);

  return getMaxGap();
}

return solution(n);
}

console.log(run(328))
console.log(run(529))
console.log(run(1041))
console.log(run(0))
console.log(run(1))
console.log(run(15))
console.log(run(32))
