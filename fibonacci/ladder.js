const assert = require('assert');

const run = (A, B) => {

  const solution = (A, B) => {
    const result = [];

    const climb = target => {
      const positions = [{pos: 0, move: 1}];
      const visited = [];
      let count = 0;

      while(positions.length > 0) {
        const curPos = positions.shift();
        let nextPosA = curPos.pos + 1;
        let nextPosB = curPos.pos + 2;

        if(nextPosA === target || nextPosB === target) {
          count += 1;
        }

        if(nextPosA <= target && !visited[nextPosA]) positions.push({pos: nextPosA, move: curPos.move + 1});
        if(nextPosB <= target && !visited[nextPosB]) positions.push({pos: nextPosB, move: curPos.move + 2});
      }   

      return count;
    }

    for (let i = 0; i < A.length; i++) {
      const numOfClimbs = climb(A[i]);
      
      result.push(numOfClimbs % Math.pow(2, B[i]))
    }

    return result;
  }

  return solution(A, B);
}

assert.deepEqual(run([4, 4, 5, 5, 1], [3, 2, 4, 3, 1]), [5, 1, 8, 0, 1]);
assert.deepEqual(run([1], [1]), [1]);
