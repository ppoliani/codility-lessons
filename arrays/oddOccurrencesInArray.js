const Stack = require('../stack');

const run = arr => {
  const stack = Stack.createStack();

  const solution = (arr) => {
    const sorted = arr.sort();

    sorted.forEach(item => {
      const top = stack.peak();

      if(top && top === item) {
        stack.pop();
      }
      else {
        stack.push(item);
      }
    });

    return stack.pop();
  }

  return solution(arr);
}

console.log(run([9, 3, 9, 3, 9, 7, 9]));
console.log(run([1]));
console.log(run([1, 1, 1]));
