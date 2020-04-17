
const run = n => {

let _stack = [];

const createItem = (char, count, closed) => ({char, count, closed});
const push = (item, stack=_stack) => stack.push(item);
const pop = (stack=_stack) => stack.pop();
const peak = (stack=_stack) => stack[stack.length - 1] || {char: '', count: 0};

const increaseCount = () => {
  const top = peak();
  pop();
  push(createItem(top.char, top.count + 1))
}

const closeItem = () => {
  const top = peak();
  pop();
  push(createItem(top.char, top.count, true))
}

const toBinary = n => n.toString(2);

const getMaxGap = () => {
  const filtered = _stack.filter(i => i.closed)
  if(filtered.length === 0) return 0;

  return filtered.reduce((max, curr) => {
    return curr.count > max ? curr.count : max;
  }, peak().count)
}

const solution = n => {
  const binary = toBinary(n);

  let prev = '';

  const findGaps = (i) => {
    if(i === 1) {
      
    }
    if(i === 1 && prev === 0) {
      closeItem();
    }
    else if(i === 0 && prev === 1) {
      push(createItem(0, 1));
      prev = 0;
    }
    else if(i === 0) {
      increaseCount();
    }
  }

  binary.split('').map(i => Number(i)).forEach(findGaps);

  // console.log('>>>', _stack)

  return getMaxGap();
}

return solution(n);
}


console.log(run(529))
// console.log(run(1041))
// console.log(run(0))
// console.log(run(1))
// console.log(run(15))
// console.log(run(32))
