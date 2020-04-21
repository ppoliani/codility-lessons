const assert = require('assert');
const {sort} = require('../helpers/sort');

const run = (arr) => {

  const solution = (arr) => {
    const circlePoints = [];

    arr.forEach((r, i) => {
      circlePoints.push([i - r, true]);
      circlePoints.push([i + r, false]);
    });
    
    const sorted = sort(circlePoints, ([p1, b1], [p2, b2]) => {
      if(p1 === p2) {
        return b1 ? -1 : 1;
      }

      return p1 - p2;
    })

    let i = 0;
    let intersections = 0;
    let activeCircles = 0;

    while(i < sorted.length) {
      const prevPoint = circlePoints[i - 1];
      const point = circlePoints[i];
      
      if(prevPoint && point[1] && !prevPoint[1] && point[0] === prevPoint[0]) {
        activeCircles += 1;
      }
      if(point[1]) {
        intersections += activeCircles;
        activeCircles += 1;
      }
      else {
        activeCircles -= 1;
      }

      if(intersections > 10e6) return -1

      i++;
    }

    return intersections;
  }

  return solution(arr);
}

assert.equal(run([1, 0, 1, 0, 1]), 6);
assert.equal(run([1, 5, 2, 1, 4, 0]), 11);
assert.equal(run([1, 1, 1]), 3);
