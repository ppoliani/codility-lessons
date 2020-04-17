
const run = n => {

// const createItem = (char, count, closed) => ({char, count, closed});
// const push = stack => item => stack.items.push(item);
// const pop = stack => stack.items.pop();
// const peak = stack => stack.items[stack.length - 1] || {char: '', count: 0};

// const increaseCount = stack => {
//   const top = peak(stack);
//   pop(stack);
//   push(createItem(top.char, top.count + 1))
// }



// const handler = {
//   apply: (target, thisArg, args) => {
//     return target(thisArg)(...args);
//     // 
//   }
// };

// const createStack = () => {
//   const state = {items: []};
//   const interface = {
//     createItem,
//     push,
//     pop,
//     peak,
//     increaseCount,
//     ...state
//   }

//   return new Proxy(interface, handler);
// }

let _stack = [];
const createItem = (char, count, closed) => ({char, count, closed});
const push = (item, stack=_stack) => stack.push(item);
const pop = (stack=_stack) => stack.pop();
const peak = (stack=_stack) => stack[stack.length - 1];
const increaseCount = (stack=_stack) => {
  const top = peak();

  if(top) {
    pop();
    push(createItem(top.char, top.count + 1))
  }
}
const newEntry = () => {
  const top = peak();

  if(top && top.count !== 0) {
    pop();
    push(createItem(top.char, top.count, true))
  }
  
  push(createItem('', 0))
}

const toBinary = n => n.toString(2);

const getMaxGap = () => {
  const filtered = _stack.filter(i => i.closed)
  
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
// console.log(run(529))
// console.log(run(1041))
// console.log(run(0))
// console.log(run(1))
// console.log(run(15))
// console.log(run(32))
