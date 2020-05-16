const assert = require('assert');

const run = (A) => {

  /**
   * We create an array of all points. There are two point per circle at y = 0; one is the opening and the other is the closing point
   * We then sort in ascending order based on the x value of each point.
   * Finally we iterate through all points and keep track of the number of circles that are active. We do that by incrementing a number every time we 
   * encounter an opening point and decrement the counter every time we encounter a closing point. 
   * Finally total intersections is the sum of all active circles in each iteration
   */
  const solution = (A) => {
    const Point = (x, isStartPoint) => ({x, isStartPoint});
    const N = A.length;
    let points = [];

    for (let i = 0; i < N; i++) {
      points.push(Point(i - A[i], true));
      points.push(Point(i + A[i], false));
    }

    points = points.sort((p1, p2) => {
      if(p1.x === p2.x) {
        return p1.isStartPoint ? -1 : 1;
      }

      return p1.x - p2.x;
    })

    let activeCircles = 0;
    let intersections = 0;

    console.log(points)

    for (let i = 0; i < points.length; i++) {
      const prevPoint = points[i - 1];
      const point = points[i];

      // Special case when the opening point of one circle is the closing point of another
      if(prevPoint && point.isStartPoint && !prevPoint.isStartPoint && point.x === prevPoint.x) {
        activeCircles += 1;
      }

      if(point.isStartPoint) {
        intersections += activeCircles;
        activeCircles += 1;
      }
      else {
        activeCircles -= 1;
      }

      if(intersections > 10000000) return -1;
    }

    return intersections;
  }

  return solution(A);
}

assert.equal(run([1, 5, 2, 1, 4, 0]), 11);
